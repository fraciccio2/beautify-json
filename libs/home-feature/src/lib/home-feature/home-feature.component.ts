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

@Component({
  selector: 'beautify-json-home-feature',
  template: ` <beautify-json-home-ui
    [showAlert]="showAlert"
    [showLoader]="showLoader"
    [validateError]="validateError"
    [beautifyJSON]="beautifyJSON"
    [validatedJSON]="validatedJSON"
    [inputs]="inputs"
    [options]="homeFeatureService.options"
    [formControlInputText]="formControlInputText"
    [formControlTemplate]="formControlTemplate"
    [currentTemplate]="currentTemplate"
    (validateJSON)="validateJSON()"
    (cleanInputText)="cleanInputText()"
    (collapseAll)="collapseAll()"
    (expandAll)="expandAll()"
    (loadDataFromUrl)="loadDataFromUrl()"
    (downloadJsonFile)="downloadJsonFile()"
    (printJson)="printJson()"
    (readFile)="readFile($event)"
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

  formControlInputText = new FormControl('', Validators.required);
  formControlInputTextSub = new FormControl('');
  formControlTemplate = new FormControl(1, Validators.required);

  currentTemplate: Type<JsonTemplateType> | null = null;

  showAlert = false;
  showLoader = false;
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
  inputs: InputTemplateModel = {};
  collapseAllEmit: EventEmitter<void> = new EventEmitter<void>();
  expandAllEmit: EventEmitter<void> = new EventEmitter<void>();

  ngOnInit() {
    this.formControlInputText.valueChanges.subscribe((changes) => {
      this.updateLineNumbers(changes ?? '', '.line-number-left');
    });
    this.formControlInputTextSub.valueChanges.subscribe((changes) => {
      this.updateLineNumbers(changes ?? '', '.line-number-right');
    });
    this.formControlTemplate.valueChanges.subscribe((changes) => {
      this.changeTemplate(changes ?? JsonTemplateEnum.BEAUTY);
    });
  }

  ngAfterViewInit() {
    this.updateLineNumbers('', '.line-number-left');
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

  updateLineNumbers(changes: string, querySelector: string) {
    const lineNumbersContainer = document.querySelector(
      querySelector
    ) as HTMLDivElement;
    const lines = changes?.split('\n');
    if (lineNumbersContainer) {
      lineNumbersContainer.innerHTML = '';
      for (let i = 1; i <= (lines.length || 1); i++) {
        const lineNumber = document.createElement('div');
        lineNumber.textContent = i.toString();
        lineNumbersContainer.appendChild(lineNumber);
      }
    }
  }

  validateJSON() {
    if (this.formControlInputText?.value) {
      this.showAlert = true;
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
          this.validateError = e.message;
        }
      }
    }
  }

  cleanInputText() {
    this.formControlInputText.reset();
    this.showAlert = false;
    this.validateError = '';
  }

  collapseAll() {
    this.collapseAllEmit.emit();
  }

  expandAll() {
    this.expandAllEmit.emit();
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
}
