import { Component, inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LanguageModel } from '@beautify-json/home-util';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'beautify-json-navbar-feature',
  template: `<beautify-json-navbar-ui
    [languages]="languages"
    [formControlLanguage]="formControlLanguage"
  ></beautify-json-navbar-ui>`,
  styles: ``,
})
export class NavbarFeatureComponent implements OnInit {
  languages: LanguageModel[] = [
    {
      img: 'assets/img/flags/ita.svg',
      text: ' IT',
      value: 'it',
    },
    {
      img: 'assets/img/flags/en.svg',
      text: 'EN',
      value: 'en',
    },
  ];

  formControlLanguage = new FormControl({
    img: 'assets/img/flags/en.svg',
    text: ' EN',
    value: 'en',
  });

  private translate = inject(TranslateService);

  ngOnInit() {
    this.changeLanguage();
  }

  changeLanguage() {
    this.formControlLanguage.valueChanges.subscribe((changes) => {
      if (changes && changes.value) {
        this.translate.use(changes.value);
        document.querySelector('html')?.setAttribute('lang', changes.value);
      }
    });
  }
}
