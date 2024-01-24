import { Component, Input } from '@angular/core';

@Component({
  selector: 'beautify-json-code-ui',
  templateUrl: './code-ui.component.html',
  styleUrls: ['./code-ui.component.scss'],
})
export class CodeUiComponent {
  @Input() validatedJSON: string | undefined;
  @Input() codeMirrorOptions:
    | { [key: string]: boolean | string | string[] }
    | undefined;
}
