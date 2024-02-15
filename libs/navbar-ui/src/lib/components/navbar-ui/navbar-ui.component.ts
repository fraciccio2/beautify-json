import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LanguageModel, ThemeType } from '@beautify-json/home-util';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'beautify-json-navbar-ui',
  templateUrl: './navbar-ui.component.html',
  styleUrl: './navbar-ui.component.scss',
})
export class NavbarUiComponent {
  @Input() darkStyle: boolean | undefined | null;
  @Input() selectedTheme: ThemeType | undefined | null;
  @Input() languages: LanguageModel[] | undefined;
  @Input() formControlLanguage: FormControl | undefined;
  @Output() setTheme = new EventEmitter<ThemeType>();
}
