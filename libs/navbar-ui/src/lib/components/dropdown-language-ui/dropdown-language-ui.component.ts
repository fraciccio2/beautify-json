import { Component, Input } from '@angular/core';
import { LanguageModel } from '@beautify-json/home-util';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'beautify-json-dropdown-language-ui',
  templateUrl: './dropdown-language-ui.component.html',
  styleUrl: './dropdown-language-ui.component.scss',
})
export class DropdownLanguageUiComponent {
  @Input() languages: LanguageModel[] | undefined;
  @Input() formControlLanguage: FormControl | undefined;
}
