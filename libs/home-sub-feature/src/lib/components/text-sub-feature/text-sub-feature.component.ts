import { Component, Input } from '@angular/core';
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
export class TextSubFeatureComponent {
  @Input() formControlInputTextSub: FormControl | undefined;
}
