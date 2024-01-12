import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ActionUiComponent,
  BeautyUiComponent,
  HomeUiComponent,
  InfoUiComponent,
  LeftCardUiComponent,
  RightCardUiComponent,
  TextUiComponent,
  ViewerUiComponent,
} from './components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { NgbPopover, NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { HomeUtilModule } from '@beautify-json/home-util';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ClipboardModule,
    NgbTooltip,
    TranslateModule,
    FormsModule,
    NgbPopover,
    HomeUtilModule,
  ],
  declarations: [
    HomeUiComponent,
    ViewerUiComponent,
    BeautyUiComponent,
    ActionUiComponent,
    RightCardUiComponent,
    LeftCardUiComponent,
    TextUiComponent,
    InfoUiComponent,
  ],
  exports: [
    HomeUiComponent,
    ViewerUiComponent,
    BeautyUiComponent,
    ActionUiComponent,
    RightCardUiComponent,
    LeftCardUiComponent,
    TextUiComponent,
    InfoUiComponent,
  ],
})
export class HomeUiModule {}
