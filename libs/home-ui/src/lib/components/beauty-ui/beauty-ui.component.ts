import { Component, Input } from '@angular/core';

@Component({
  selector: 'beautify-json-beauty-ui',
  templateUrl: './beauty-ui.component.html',
  styleUrl: './beauty-ui.component.scss',
})
export class BeautyUiComponent {
  @Input() beautifyJSON: string | undefined;
}
