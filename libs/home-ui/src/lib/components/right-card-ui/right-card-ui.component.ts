import { Component, EventEmitter, Input, Output, Type } from '@angular/core';
import {
  InputTemplateModel,
  JsonTemplateEnum,
  JsonTemplateType,
} from '@beautify-json/home-util';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'beautify-json-right-card-ui',
  templateUrl: './right-card-ui.component.html',
  styleUrl: './right-card-ui.component.scss',
})
export class RightCardUiComponent {
  @Input() beautifyJSON: string | undefined;
  @Input() validatedJSON: string | undefined;
  @Input() inputs: InputTemplateModel | undefined;
  @Input() options: { label: string; id: number }[] | undefined;
  @Input() formControlTemplate: FormControl | undefined;
  @Input() currentTemplate: Type<JsonTemplateType> | null = null;
  @Output() collapseAll = new EventEmitter<void>();
  @Output() expandAll = new EventEmitter<void>();

  isCopy = false;

  protected readonly JsonTemplateEnum = JsonTemplateEnum;
}
