import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeFeatureComponent } from './home-feature/home-feature.component';
import { HomeUiModule } from '@beautify-json/home-ui';
import { RouterModule } from '@angular/router';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HomeUiModule,
    RouterModule.forRoot([{ path: '', component: HomeFeatureComponent }]),
  ],
  declarations: [HomeFeatureComponent],
  exports: [HomeFeatureComponent],
  providers: [provideHttpClient(withInterceptorsFromDi())],
})
export class HomeFeatureModule {}
