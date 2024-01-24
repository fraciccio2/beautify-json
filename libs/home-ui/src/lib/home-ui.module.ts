import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ActionUiComponent,
  BeautyUiComponent,
  CodeUiComponent,
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
import { CodemirrorModule } from '@ctrl/ngx-codemirror';

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
    CodemirrorModule,
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
    CodeUiComponent,
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
    CodeUiComponent,
  ],
})
export class HomeUiModule {}
