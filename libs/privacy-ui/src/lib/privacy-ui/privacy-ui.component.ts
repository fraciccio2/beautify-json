import { Component, Input } from '@angular/core';

@Component({
  selector: 'beautify-json-privacy-ui',
  templateUrl: './privacy-ui.component.html',
  styleUrl: './privacy-ui.component.scss',
})
export class PrivacyUiComponent {
  @Input() darkStyle: boolean | undefined | null;
}
