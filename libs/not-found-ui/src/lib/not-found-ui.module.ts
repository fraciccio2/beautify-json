import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundUiComponent } from './components';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [CommonModule, RouterLink, TranslateModule],
  declarations: [NotFoundUiComponent],
  exports: [NotFoundUiComponent],
})
export class NotFoundUiModule {}
