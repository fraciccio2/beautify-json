import { Component, inject, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LanguageModel, ThemeType } from '@beautify-json/home-util';
import { TranslateService } from '@ngx-translate/core';
import { NgThemeService } from '@beautify-json/ng';

@Component({
  selector: 'beautify-json-navbar-feature',
  template: `<beautify-json-navbar-ui
    [darkStyle]="darkStyle"
    [selectedTheme]="selectedTheme"
    [languages]="languages"
    [formControlLanguage]="formControlLanguage"
    (setTheme)="setTheme($event)"
  ></beautify-json-navbar-ui>`,
  styles: ``,
})
export class NavbarFeatureComponent implements OnInit {
  @Input() darkStyle: boolean | undefined | null;
  @Input() selectedTheme: ThemeType | undefined | null;
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
  private ngThemeService = inject(NgThemeService);

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

  setTheme(theme: ThemeType) {
    const themeLocal = localStorage.getItem('theme');
    if (themeLocal !== theme) {
      localStorage.setItem('theme', theme);
      this.ngThemeService.setTheme(theme);
    }
  }
}
