import { Component, inject, Input } from '@angular/core';
import { NgThemeService } from '@beautify-json/ng';

@Component({
  selector: 'beautify-json-beauty-sub-feature',
  template: `<beautify-json-beauty-ui
    class="d-block h-100"
    [beautifyJSON]="beautifyJSON"
    [darkStyle]="ngThemeService.darkStyle$ | async"
  ></beautify-json-beauty-ui>`,
  styles: [
    `
      :root {
        display: block;
        height: 100%;
      }
    `,
  ],
})
export class BeautySubFeatureComponent {
  @Input() beautifyJSON: string | undefined;

  protected ngThemeService = inject(NgThemeService);
}
