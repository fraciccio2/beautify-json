import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'beautify-json-text-ui',
  templateUrl: './text-ui.component.html',
  styleUrl: './text-ui.component.scss',
})
export class TextUiComponent {
  @Input() darkStyle: boolean | undefined | null;
  @Input() formControlInputTextSub: FormControl | undefined;
}
