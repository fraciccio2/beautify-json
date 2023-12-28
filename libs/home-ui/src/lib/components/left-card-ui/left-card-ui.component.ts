import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RightOrLeftTemplateEnum } from '@beautify-json/home-util';

@Component({
  selector: 'beautify-json-left-card-ui',
  templateUrl: './left-card-ui.component.html',
  styleUrl: './left-card-ui.component.scss',
})
export class LeftCardUiComponent {
  @Input() showExpanded: boolean | undefined;
  @Input() formControlInputText: FormControl | undefined;
  @Output() cleanInputText = new EventEmitter<void>();
  @Output() printJson = new EventEmitter<void>();
  @Output() expandSection = new EventEmitter<RightOrLeftTemplateEnum>();
  @Output() contractSection = new EventEmitter<RightOrLeftTemplateEnum>();

  isCopy = false;
  protected readonly RightOrLeftTemplateEnum = RightOrLeftTemplateEnum;
}
