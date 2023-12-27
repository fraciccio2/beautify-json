import { Component, Input } from '@angular/core';

@Component({
  selector: 'beautify-json-beauty-sub-feature',
  template: `<beautify-json-beauty-ui
    class="d-block h-100"
    [beautifyJSON]="beautifyJSON"
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
}
