import { AfterViewInit, Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'beautify-json-text-sub-feature',
  template: `<beautify-json-text-ui
    class="d-block h-100"
    [formControlInputTextSub]="formControlInputTextSub"
  ></beautify-json-text-ui>`,
  styles: [
    `
      :host {
        display: block;
        height: 100%;
      }
    `,
  ],
})
export class TextSubFeatureComponent implements AfterViewInit {
  @Input() formControlInputTextSub: FormControl | undefined;

  ngAfterViewInit() {
    const lineNumbersContainer = document.querySelector(
      '.line-number-right'
    ) as HTMLDivElement;
    const lines = this.formControlInputTextSub?.value?.split('\n');
    if (lineNumbersContainer) {
      lineNumbersContainer.innerHTML = '';
      for (let i = 1; i <= (lines.length || 1); i++) {
        const lineNumber = document.createElement('div');
        lineNumber.textContent = i.toString();
        lineNumbersContainer.appendChild(lineNumber);
      }
    }
  }
}
