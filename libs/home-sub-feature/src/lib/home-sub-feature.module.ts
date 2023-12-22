import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  BeautySubFeatureComponent,
  TextSubFeatureComponent,
  ViewerSubFeatureComponent,
} from './components';
import { HomeUiModule } from '@beautify-json/home-ui';
import { LoadDataUrlModalComponent } from './modals';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, HomeUiModule, ReactiveFormsModule],
  declarations: [
    ViewerSubFeatureComponent,
    BeautySubFeatureComponent,
    LoadDataUrlModalComponent,
    TextSubFeatureComponent,
  ],
  exports: [
    ViewerSubFeatureComponent,
    BeautySubFeatureComponent,
    LoadDataUrlModalComponent,
    TextSubFeatureComponent,
  ],
})
export class HomeSubFeatureModule {}
