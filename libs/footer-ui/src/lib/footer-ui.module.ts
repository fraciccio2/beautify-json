import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterUiComponent } from './footer-ui/footer-ui.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [CommonModule, TranslateModule],
  declarations: [FooterUiComponent],
  exports: [FooterUiComponent],
})
export class FooterUiModule {}
