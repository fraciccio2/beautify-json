import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownLanguageUiComponent, NavbarUiComponent } from './components';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [CommonModule, NgbDropdownModule],
  exports: [NavbarUiComponent, DropdownLanguageUiComponent],
  declarations: [NavbarUiComponent, DropdownLanguageUiComponent],
})
export class NavbarUiModule {}
