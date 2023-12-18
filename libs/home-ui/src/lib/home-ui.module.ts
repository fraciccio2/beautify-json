import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeUiComponent } from './components';
import { ReactiveFormsModule } from '@angular/forms';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, ClipboardModule, NgbTooltip],
  declarations: [HomeUiComponent],
  exports: [HomeUiComponent],
})
export class HomeUiModule {}
