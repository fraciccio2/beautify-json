import { Component, inject } from '@angular/core';
import { NgThemeService } from '@beautify-json/ng';

@Component({
  selector: 'beautify-json-not-found-feature',
  template: `<beautify-json-not-found-ui
    [darkStyle]="darkStyle$ | async"
  ></beautify-json-not-found-ui>`,
  styles: ``,
})
export class NotFoundFeatureComponent {
  private ngThemeService = inject(NgThemeService);

  darkStyle$ = this.ngThemeService.darkStyle$;
}
