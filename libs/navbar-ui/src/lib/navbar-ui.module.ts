import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarUiComponent } from './components/navbar-ui/navbar-ui.component';

@NgModule({
  imports: [CommonModule],
  exports: [NavbarUiComponent],
  declarations: [NavbarUiComponent]
})
export class NavbarUiModule {}
