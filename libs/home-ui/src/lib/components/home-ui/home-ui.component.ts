import { Component, EventEmitter, Input, Output, Type } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  InputTemplateModel,
  JsonTemplateType,
  RightOrLeftTemplateEnum,
} from '@beautify-json/home-util';

@Component({
  selector: 'beautify-json-home-ui',
  templateUrl: './home-ui.component.html',
  styleUrl: './home-ui.component.scss',
})
export class HomeUiComponent {
  @Input() showAlert: boolean | undefined;
  @Input() showLoader: boolean | undefined;
  @Input() showExpandedUi: boolean | undefined;
  @Input() showExpandedSub: boolean | undefined;
  @Input() validateError: string | undefined;
  @Input() beautifyJSON: string | undefined;
  @Input() validatedJSON: string | undefined;
  @Input() inputs: InputTemplateModel | undefined;
  @Input() options: { label: string; id: number }[] | undefined;
  @Input() formControlInputText: FormControl | undefined;
  @Input() formControlTemplate: FormControl | undefined;
  @Input() currentTemplate: Type<JsonTemplateType> | null = null;
  @Output() validateJSON = new EventEmitter<void>();
  @Output() cleanInputText = new EventEmitter<void>();
  @Output() collapseAll = new EventEmitter<void>();
  @Output() expandAll = new EventEmitter<void>();
  @Output() loadDataFromUrl = new EventEmitter<void>();
  @Output() downloadJsonFile = new EventEmitter<void>();
  @Output() printJson = new EventEmitter<void>();
  @Output() expandSection = new EventEmitter<RightOrLeftTemplateEnum>();
  @Output() contractSection = new EventEmitter<RightOrLeftTemplateEnum>();
  @Output() readFile = new EventEmitter<Event>();
}
