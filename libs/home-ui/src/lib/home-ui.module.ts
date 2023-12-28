import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ActionUiComponent,
  BeautyUiComponent,
  FooterUiComponent,
  HomeUiComponent,
  LeftCardUiComponent,
  RightCardUiComponent,
  TextUiComponent,
  ViewerUiComponent,
} from './components';
import { ReactiveFormsModule } from '@angular/forms';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ClipboardModule,
    NgbTooltip,
    TranslateModule,
  ],
  declarations: [
    HomeUiComponent,
    ViewerUiComponent,
    BeautyUiComponent,
    ActionUiComponent,
    RightCardUiComponent,
    LeftCardUiComponent,
    TextUiComponent,
    FooterUiComponent,
  ],
  exports: [
    HomeUiComponent,
    ViewerUiComponent,
    BeautyUiComponent,
    ActionUiComponent,
    RightCardUiComponent,
    LeftCardUiComponent,
    TextUiComponent,
    FooterUiComponent,
  ],
})
export class HomeUiModule {}
