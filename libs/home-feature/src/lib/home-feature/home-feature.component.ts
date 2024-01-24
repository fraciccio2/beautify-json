import {
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  inject,
  OnInit,
  Type,
} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {
  InputTemplateModel,
  JsonTemplateEnum,
  JsonTemplateType,
  RightOrLeftTemplateEnum,
} from '@beautify-json/home-util';
import {
  BeautySubFeatureComponent,
  ErrorModalComponent,
  LoadDataUrlModalComponent,
  TextSubFeatureComponent,
  ViewerSubFeatureComponent,
} from '@beautify-json/home-sub-feature';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { finalize, take } from 'rxjs';
import { HomeFeatureService } from '../home-feature.service';
import { CodemirrorComponent } from '@ctrl/ngx-codemirror';
import * as CodeMirror from 'codemirror';

@Component({
  selector: 'beautify-json-home-feature',
  template: ` <beautify-json-home-ui
    [showAlert]="showAlert"
    [showLoader]="showLoader"
    [showExpandedUi]="showExpandedUi"
    [showExpandedSub]="showExpandedSub"
    [validateError]="validateError"
    [beautifyJSON]="beautifyJSON"
    [validatedJSON]="validatedJSON"
    [inputs]="inputs"
    [options]="homeFeatureService.options"
    [formControlInputText]="formControlInputText"
    [formControlTemplate]="formControlTemplate"
    [formControlText]="formControlText"
    [currentTemplate]="currentTemplate"
    [codeMirrorOptions]="codeMirrorOptions"
    (validateJSON)="validateJSON()"
    (cleanInputText)="cleanInputText()"
    (collapseAll)="collapseAll()"
    (expandAll)="expandAll()"
    (loadDataFromUrl)="loadDataFromUrl()"
    (downloadJsonFile)="downloadJsonFile()"
    (printJson)="printJson()"
    (orderAsc)="orderAsc()"
    (orderDesc)="orderDesc()"
    (focusOnInput)="focusOnInput()"
    (expandSection)="
      $event === RightOrLeftTemplateEnum.left
        ? (showExpandedUi = true)
        : (showExpandedSub = true)
    "
    (contractSection)="
      $event === RightOrLeftTemplateEnum.left
        ? (showExpandedUi = false)
        : (showExpandedSub = false)
    "
    (readFile)="readFile($event)"
    (passCodeMirrorComponent)="passCodeMirrorComponent($event)"
  ></beautify-json-home-ui>`,
  styles: ``,
})
export class HomeFeatureComponent
  implements OnInit, AfterViewInit, AfterViewChecked
{
  private cdRef = inject(ChangeDetectorRef);
  private modalService = inject(NgbModal);
  private httpClient = inject(HttpClient);
  protected homeFeatureService = inject(HomeFeatureService);
  protected readonly RightOrLeftTemplateEnum = RightOrLeftTemplateEnum;

  formControlInputText = new FormControl('', Validators.required);
  formControlInputTextSub = new FormControl('');
  formControlTemplate = new FormControl(1, Validators.required);
  formControlText = new FormControl('');

  currentTemplate: Type<JsonTemplateType> | null = null;

  showAlert = false;
  showLoader = false;
  showExpandedUi = false;
  showExpandedSub = false;
  validateError = '';
  beautifyJSON = '';
  validatedJSON = '';
  printStyle = `
    pre .string {
      color: #4fc5c2;
    }
    pre .number {
      color: #7a7ff0;
    }
    pre .boolean {
      color: #fc8c58;
    }
    pre .null {
      color: #6a6a5c;
    }
    pre .key {
      color: #7babf6;
    }
  `;
  errorLine: CodeMirror.LineHandle | null = null;
  codeMirrorOptions: { [key: string]: boolean | string | string[] } = {
    lineNumbers: true,
    styleActiveLine: true,
    matchBrackets: true,
    indentWithTabs: true,
    autofocus: true,
    mode: 'javascript',
    foldGutter: true,
    gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
  };
  inputs: InputTemplateModel = {};
  codemirrorInstance: CodeMirror.EditorFromTextArea | undefined;
  collapseAllEmit: EventEmitter<void> = new EventEmitter<void>();
  expandAllEmit: EventEmitter<void> = new EventEmitter<void>();
  orderAscEmit: EventEmitter<void> = new EventEmitter<void>();
  orderDescEmit: EventEmitter<void> = new EventEmitter<void>();

  ngOnInit() {
    this.formControlTemplate.valueChanges.subscribe((changes) => {
      this.changeTemplate(changes ?? JsonTemplateEnum.BEAUTY);
    });
    this.formControlText.valueChanges.subscribe((changes) => {
      this.inputs = {
        ...this.inputs,
        inputText: changes ?? '',
      };
    });
  }

  ngAfterViewInit() {
    this.changeTemplate(JsonTemplateEnum.BEAUTY);
  }

  ngAfterViewChecked() {
    this.cdRef.detectChanges();
  }

  changeTemplate(changes: number) {
    switch (changes) {
      case JsonTemplateEnum.BEAUTY:
        this.inputs = {
          beautifyJSON: this.beautifyJSON,
        };
        this.currentTemplate = BeautySubFeatureComponent;
        break;
      case JsonTemplateEnum.VIEWER:
        this.inputs = {
          json: this.validatedJSON,
          collapseAllEmit: this.collapseAllEmit,
          expandAllEmit: this.expandAllEmit,
          orderAscEmit: this.orderAscEmit,
          orderDescEmit: this.orderDescEmit,
        };
        this.currentTemplate = ViewerSubFeatureComponent;
        break;
      case JsonTemplateEnum.TEXT:
        this.formControlInputTextSub.patchValue(this.validatedJSON);
        this.inputs = {
          formControlInputTextSub: this.formControlInputTextSub,
        };
        this.currentTemplate = TextSubFeatureComponent;
        break;
    }
  }

  validateJSON() {
    if (this.formControlInputText?.value) {
      this.showAlert = true;
      this.highlightErrorLine();
      try {
        const parse = JSON.parse(this.formControlInputText?.value);
        this.validatedJSON = JSON.stringify(parse, null, '\t');
        this.validateError = '';
        this.beautifyJSON = this.homeFeatureService.syntaxHighlight(
          this.validatedJSON
        );
        this.changeTemplate(
          this.formControlTemplate?.value ?? JsonTemplateEnum.BEAUTY
        );
      } catch (e) {
        if (e instanceof Error) {
          const lineMatches = e.message.match(/line ([0-9]*)/);
          if (lineMatches && lineMatches.length > 1) {
            this.highlightErrorLine(+lineMatches[1] - 1);
          }
          this.validateError = e.message;
        }
      }
    }
  }

  highlightErrorLine(line?: number) {
    if (this.codemirrorInstance) {
      if (typeof line === 'number') {
        this.errorLine = this.codemirrorInstance.addLineClass(
          line,
          'background',
          'line-error'
        );
        this.codemirrorInstance.setCursor(line);
      } else if (this.errorLine) {
        this.codemirrorInstance.removeLineClass(
          this.errorLine,
          'background',
          'line-error'
        );
        this.errorLine = null;
      }
    }
  }

  cleanInputText() {
    this.formControlInputText.patchValue('');
    this.showAlert = false;
    this.validateError = '';
  }

  collapseAll() {
    this.collapseAllEmit.emit();
  }

  expandAll() {
    this.expandAllEmit.emit();
  }

  orderAsc() {
    this.orderAscEmit.emit();
  }

  orderDesc() {
    this.orderDescEmit.emit();
  }

  readFile(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    const fileReader = new FileReader();
    fileReader.onload = () => {
      if (typeof fileReader.result === 'string') {
        this.formControlInputText.patchValue(fileReader.result);
      }
    };
    if (file) {
      fileReader.readAsText(file);
    }
  }

  loadDataFromUrl() {
    const modal = this.modalService.open(LoadDataUrlModalComponent, {
      centered: true,
    });
    modal.result
      .then((resp: { url: string }) => {
        this.showLoader = true;
        this.httpClient
          .get<object | string>(resp.url)
          .pipe(
            take(1),
            finalize(() => (this.showLoader = false))
          )
          .subscribe({
            next: (json) => {
              if (typeof json === 'string') {
                this.formControlInputText.patchValue(json);
              } else if (typeof json === 'object') {
                try {
                  const stringObj = JSON.stringify(json);
                  this.formControlInputText.patchValue(stringObj);
                } catch (e) {
                  if (e instanceof Error) {
                    this.showAlert = true;
                    this.validateError = e.message;
                  }
                }
              }
            },
            error: (error) => {
              this.showAlert = true;
              this.validateError = error.message ?? 'Error, not valid URL';
            },
          });
      })
      .catch(() => {});
  }

  downloadJsonFile() {
    this.homeFeatureService.downloadJsonFile(this.validatedJSON);
  }

  printJson() {
    if (this.formControlInputText?.value) {
      this.validateJSON();
      if (this.validatedJSON) {
        const printWindow = window.open('', '_blank');
        printWindow?.document.write(
          `<html lang="en"><head><style media="print">${
            this.printStyle
          }</style><title>Print JSON</title></head><body><pre>${this.homeFeatureService.syntaxHighlight(
            this.validatedJSON
          )}</pre></body></html>`
        );
        printWindow?.document.close();
        printWindow?.print();
        printWindow?.close();
      } else {
        const modal = this.modalService.open(ErrorModalComponent, {
          centered: true,
        });
        modal.componentInstance.message = 'HomeFeature.InvalidJSON';
      }
    } else {
      const modal = this.modalService.open(ErrorModalComponent, {
        centered: true,
      });
      modal.componentInstance.message = 'HomeFeature.EmptyText';
    }
  }

  focusOnInput() {
    const input = document.getElementById('input-popup');
    if (input) {
      input.focus();
    }
  }

  passCodeMirrorComponent(editor: CodemirrorComponent) {
    this.codemirrorInstance = editor.codeMirror;
  }
}
