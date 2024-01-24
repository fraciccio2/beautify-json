import { Component, Input } from '@angular/core';

@Component({
  selector: 'beautify-json-code-sub-feature',
  template: ` <beautify-json-code-ui
    [validatedJSON]="validatedJSON"
    [codeMirrorOptions]="codeMirrorOptions"
  ></beautify-json-code-ui>`,
  styles: ``,
})
export class CodeSubFeatureComponent {
  @Input() validatedJSON: string | undefined;
  @Input() codeMirrorOptions:
    | { [key: string]: boolean | string | string[] }
    | undefined;
}
