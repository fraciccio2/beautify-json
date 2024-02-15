import { Component, inject } from '@angular/core';
import { NgThemeService } from '@beautify-json/ng';

@Component({
  selector: 'beautify-json-privacy-feature',
  template: `<beautify-json-privacy-ui
    [darkStyle]="darkStyle$ | async"
  ></beautify-json-privacy-ui>`,
  styles: ``,
})
export class PrivacyFeatureComponent {
  private ngThemeService = inject(NgThemeService);

  darkStyle$ = this.ngThemeService.darkStyle$;
}
