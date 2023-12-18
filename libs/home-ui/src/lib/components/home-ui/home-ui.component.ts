import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'beautify-json-home-ui',
  templateUrl: './home-ui.component.html',
  styleUrl: './home-ui.component.scss',
})
export class HomeUiComponent {
  @Input() showAlert: boolean | undefined;
  @Input() validateError: string | undefined;
  @Input() beautifyJSON: string | undefined;
  @Input() formControlInputText: FormControl | undefined;
  @Output() validateJSON = new EventEmitter<void>();
  @Output() cleanInputText = new EventEmitter<void>();

  isCopy = false;
}
