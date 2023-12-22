import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  BeautySubFeatureComponent,
  ViewerSubFeatureComponent,
} from './components';
import { HomeUiModule } from '@beautify-json/home-ui';

@NgModule({
  imports: [CommonModule, HomeUiModule],
  declarations: [ViewerSubFeatureComponent, BeautySubFeatureComponent],
  exports: [ViewerSubFeatureComponent, BeautySubFeatureComponent],
})
export class HomeSubFeatureModule {}
