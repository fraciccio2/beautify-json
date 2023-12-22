import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarFeatureModule } from '@beautify-json/navbar-feature';
import { HomeFeatureModule } from '@beautify-json/home-feature';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '**',
        redirectTo: '',
      },
    ]),
    TranslateModule.forRoot({
      defaultLanguage: 'en',
    }),
    NavbarFeatureModule,
    HomeFeatureModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
