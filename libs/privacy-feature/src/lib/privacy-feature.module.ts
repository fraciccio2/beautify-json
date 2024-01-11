import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivacyFeatureComponent } from './privacy-feature/privacy-feature.component';
import { RouterModule } from '@angular/router';
import { PrivacyUiModule } from '@beautify-json/privacy-ui';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'privacy',
        component: PrivacyFeatureComponent,
      },
    ]),
    PrivacyUiModule,
  ],
  declarations: [PrivacyFeatureComponent],
  exports: [PrivacyFeatureComponent],
})
export class PrivacyFeatureModule {}
