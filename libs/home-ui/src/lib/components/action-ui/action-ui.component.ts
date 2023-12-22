import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'beautify-json-action-ui',
  templateUrl: './action-ui.component.html',
  styleUrl: './action-ui.component.scss',
})
export class ActionUiComponent {
  @Input() showAlert: boolean | undefined;
  @Input() validateError: string | undefined;
  @Input() formControlInputText: FormControl | undefined;
  @Output() validateJSON = new EventEmitter<void>();
  @Output() readFile = new EventEmitter<Event>();
}
