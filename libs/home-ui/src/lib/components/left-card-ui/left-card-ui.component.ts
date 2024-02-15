import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RightOrLeftTemplateEnum } from '@beautify-json/home-util';
import { CodemirrorComponent } from '@ctrl/ngx-codemirror';

@Component({
  selector: 'beautify-json-left-card-ui',
  templateUrl: './left-card-ui.component.html',
  styleUrl: './left-card-ui.component.scss',
})
export class LeftCardUiComponent {
  @Input() showExpanded: boolean | undefined;
  @Input() darkStyle: boolean | undefined | null;
  @Input() validatedJSON: string | undefined;
  @Input() validateError: string | undefined;
  @Input() formControlInputText: FormControl | undefined;
  @Input() codeMirrorOptions:
    | { [key: string]: boolean | string | string[] }
    | undefined;
  @Output() cleanInputText = new EventEmitter<void>();
  @Output() printJson = new EventEmitter<void>();
  @Output() formatCodeOnLeft = new EventEmitter<void>();
  @Output() expandSection = new EventEmitter<RightOrLeftTemplateEnum>();
  @Output() contractSection = new EventEmitter<RightOrLeftTemplateEnum>();
  @Output() passCodeMirrorComponent = new EventEmitter<CodemirrorComponent>();

  isCopy = false;
  protected readonly RightOrLeftTemplateEnum = RightOrLeftTemplateEnum;
}
