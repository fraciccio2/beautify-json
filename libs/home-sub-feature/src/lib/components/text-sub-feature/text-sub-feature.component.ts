import { Component, inject, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgThemeService } from '@beautify-json/ng';

@Component({
  selector: 'beautify-json-text-sub-feature',
  template: `<beautify-json-text-ui
    class="d-block h-100"
    [darkStyle]="ngThemeService.darkStyle$ | async"
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

  protected ngThemeService = inject(NgThemeService);
}
