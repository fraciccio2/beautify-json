import { EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

export interface InputTemplateModel {
  json?: string;
  beautifyJSON?: string;
  inputText?: string;
  validatedJSON?: string;
  codeMirrorOptions?: { [key: string]: boolean | string | string[] };
  formControlInputTextSub?: FormControl;
  collapseAllEmit?: EventEmitter<void>;
  expandAllEmit?: EventEmitter<void>;
  orderAscEmit?: EventEmitter<void>;
  orderDescEmit?: EventEmitter<void>;
}
