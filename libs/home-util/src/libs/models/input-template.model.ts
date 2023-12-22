import { EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

export interface InputTemplateModel {
  json?: string;
  beautifyJSON?: string;
  formControlInputTextSub?: FormControl;
  collapseAllEmit?: EventEmitter<void>;
  expandAllEmit?: EventEmitter<void>;
}
