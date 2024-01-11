import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterUiComponent } from './footer-ui/footer-ui.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';

@NgModule({
  imports: [CommonModule, TranslateModule, RouterLink],
  declarations: [FooterUiComponent],
  exports: [FooterUiComponent],
})
export class FooterUiModule {}
