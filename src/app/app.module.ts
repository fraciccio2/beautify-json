import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarFeatureModule } from '@beautify-json/navbar-feature';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        RouterModule,
        NavbarFeatureModule
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}