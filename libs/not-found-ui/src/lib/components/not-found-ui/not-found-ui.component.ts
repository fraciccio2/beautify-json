import { Component, Input } from '@angular/core';

@Component({
  selector: 'beautify-json-not-found-ui',
  templateUrl: './not-found-ui.component.html',
  styleUrl: './not-found-ui.component.scss',
})
export class NotFoundUiComponent {
  @Input() darkStyle: boolean | undefined | null;
}
