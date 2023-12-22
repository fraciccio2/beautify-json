import { Component, Input } from '@angular/core';

@Component({
  selector: 'beautify-json-beauty-sub-feature',
  template: `<beautify-json-beauty-ui
    [beautifyJSON]="beautifyJSON"
  ></beautify-json-beauty-ui>`,
  styles: ``,
})
export class BeautySubFeatureComponent {
  @Input() beautifyJSON: string | undefined;
}
