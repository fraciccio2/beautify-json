import { Component, Input } from '@angular/core';
import { LanguageModel } from '@beautify-json/home-util';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'beautify-json-navbar-ui',
  templateUrl: './navbar-ui.component.html',
  styleUrl: './navbar-ui.component.scss',
})
export class NavbarUiComponent {
  @Input() languages: LanguageModel[] | undefined;
  @Input() formControlLanguage: FormControl | undefined;
}
