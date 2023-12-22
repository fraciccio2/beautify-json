import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'beautify-json-left-card-ui',
  templateUrl: './left-card-ui.component.html',
  styleUrl: './left-card-ui.component.scss',
})
export class LeftCardUiComponent {
  @Input() formControlInputText: FormControl | undefined;
  @Output() cleanInputText = new EventEmitter<void>();

  isCopy = false;
}
