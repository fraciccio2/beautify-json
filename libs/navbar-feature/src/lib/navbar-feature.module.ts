import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarFeatureComponent } from './navbar-feature/navbar-feature.component';
import { NavbarUiModule } from '@beautify-json/navbar-ui';

@NgModule({
  imports: [CommonModule, NavbarUiModule],
  exports: [NavbarFeatureComponent],
  declarations:[NavbarFeatureComponent]
})
export class NavbarFeatureModule {}
