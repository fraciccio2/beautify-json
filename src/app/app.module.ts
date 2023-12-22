import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarFeatureModule } from '@beautify-json/navbar-feature';
import { HomeFeatureModule } from '@beautify-json/home-feature';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import * as it from '../assets/translations/it.json';
import * as en from '../assets/translations/en.json';

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
export class AppModule {
  constructor(private translate: TranslateService) {
    translate.setTranslation('it', it);
    translate.setTranslation('en', en);
  }
}
