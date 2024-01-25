import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundFeatureComponent } from './not-found-feature/not-found-feature.component';
import { NotFoundUiModule } from '@beautify-json/not-found-ui';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '404',
        component: NotFoundFeatureComponent,
      },
    ]),
    NotFoundUiModule,
  ],
  declarations: [NotFoundFeatureComponent],
  exports: [NotFoundFeatureComponent],
})
export class NotFoundFeatureModule {}
