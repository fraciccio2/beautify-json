import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeFeatureComponent } from './home-feature/home-feature.component';
import { HomeUiModule } from '@beautify-json/home-ui';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    HomeUiModule,
    RouterModule.forRoot([{ path: '', component: HomeFeatureComponent }]),
  ],
  declarations: [HomeFeatureComponent],
  exports: [HomeFeatureComponent],
})
export class HomeFeatureModule {}
