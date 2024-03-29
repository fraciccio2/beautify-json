import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  BeautySubFeatureComponent,
  CodeSubFeatureComponent,
  TextSubFeatureComponent,
  ViewerSubFeatureComponent,
} from './components';
import { HomeUiModule } from '@beautify-json/home-ui';
import { ErrorModalComponent, LoadDataUrlModalComponent } from './modals';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [CommonModule, HomeUiModule, ReactiveFormsModule, TranslateModule],
  declarations: [
    ViewerSubFeatureComponent,
    BeautySubFeatureComponent,
    LoadDataUrlModalComponent,
    TextSubFeatureComponent,
    ErrorModalComponent,
    CodeSubFeatureComponent,
  ],
  exports: [
    ViewerSubFeatureComponent,
    BeautySubFeatureComponent,
    LoadDataUrlModalComponent,
    TextSubFeatureComponent,
    ErrorModalComponent,
    CodeSubFeatureComponent,
  ],
})
export class HomeSubFeatureModule {}
