import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivacyUiComponent } from './privacy-ui/privacy-ui.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [CommonModule, TranslateModule],
  declarations: [PrivacyUiComponent],
  exports: [PrivacyUiComponent],
})
export class PrivacyUiModule {}
