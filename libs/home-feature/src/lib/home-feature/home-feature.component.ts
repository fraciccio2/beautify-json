import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'beautify-json-home-feature',
  template: `<beautify-json-home-ui
    [showAlert]="showAlert"
    [validateError]="validateError"
    [beautifyJSON]="beautifyJSON"
    [formControlInputText]="formControlInputText"
    (validateJSON)="validateJSON()"
    (cleanInputText)="cleanInputText()"
  ></beautify-json-home-ui>`,
  styles: ``,
})
export class HomeFeatureComponent implements OnInit, AfterViewInit {
  formControlInputText = new FormControl('', Validators.required);

  showAlert = false;
  validateError = '';
  beautifyJSON = '';

  ngOnInit() {
    this.formControlInputText.valueChanges.subscribe((changes) => {
      this.updateLineNumbers(changes ?? '');
    });
  }

  ngAfterViewInit() {
    this.updateLineNumbers('');
  }

  updateLineNumbers(changes: string) {
    const lineNumbersContainer = document.querySelector(
      '.line-number'
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
        const validatedJSON = JSON.stringify(parse, null, '\t');
        this.validateError = '';
        this.beautifyJSON = this.syntaxHighlight(validatedJSON);
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

  syntaxHighlight(json: string) {
    json = json
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
    return json.replace(
      /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)/g,
      (match) => {
        let cls = 'number';
        if (/^"/.test(match)) {
          if (/:$/.test(match)) {
            cls = 'key';
          } else {
            cls = 'string';
          }
        } else if (/true|false/.test(match)) {
          cls = 'boolean';
        } else if (/null/.test(match)) {
          cls = 'null';
        }
        return '<span class="' + cls + '">' + match + '</span>';
      }
    );
  }
}
