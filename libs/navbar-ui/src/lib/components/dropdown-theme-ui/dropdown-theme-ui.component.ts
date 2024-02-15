import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ThemeType } from '@beautify-json/home-util';

@Component({
  selector: 'beautify-json-dropdown-theme-ui',
  templateUrl: './dropdown-theme-ui.component.html',
  styleUrl: './dropdown-theme-ui.component.scss',
})
export class DropdownThemeUiComponent {
  @Input() darkStyle: boolean | undefined | null;
  @Input() selectedTheme: ThemeType | undefined | null;
  @Output() setTheme = new EventEmitter<ThemeType>();
}
