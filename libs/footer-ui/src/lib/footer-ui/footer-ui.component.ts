import { Component, Input } from '@angular/core';

@Component({
  selector: 'beautify-json-footer-ui',
  templateUrl: './footer-ui.component.html',
  styleUrl: './footer-ui.component.scss',
})
export class FooterUiComponent {
  @Input() darkStyle: boolean | undefined | null;
}
