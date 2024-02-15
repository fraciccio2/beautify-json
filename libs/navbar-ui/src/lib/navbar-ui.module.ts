import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  DropdownLanguageUiComponent,
  DropdownThemeUiComponent,
  NavbarUiComponent,
} from './components';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [CommonModule, NgbDropdownModule, TranslateModule],
  exports: [
    NavbarUiComponent,
    DropdownLanguageUiComponent,
    DropdownThemeUiComponent,
  ],
  declarations: [
    NavbarUiComponent,
    DropdownLanguageUiComponent,
    DropdownThemeUiComponent,
  ],
})
export class NavbarUiModule {}
