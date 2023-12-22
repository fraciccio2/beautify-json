import { EventEmitter } from '@angular/core';

export interface InputTemplateModel {
  json?: string;
  beautifyJSON?: string;
  collapseAllEmit?: EventEmitter<void>;
  expandAllEmit?: EventEmitter<void>;
}
