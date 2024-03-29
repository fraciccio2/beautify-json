import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'beautify-json-action-ui',
  templateUrl: './action-ui.component.html',
  styleUrl: './action-ui.component.scss',
})
export class ActionUiComponent {
  @Input() showAlert: boolean | undefined;
  @Input() darkStyle: boolean | undefined | null;
  @Input() validateError: string | undefined;
  @Input() validatedJSON: string | undefined;
  @Input() formControlInputText: FormControl | undefined;
  @Output() validateJSON = new EventEmitter<void>();
  @Output() loadDataFromUrl = new EventEmitter<void>();
  @Output() downloadJsonFile = new EventEmitter<void>();
  @Output() readFile = new EventEmitter<Event>();
}
