import { Component, Input } from '@angular/core';

@Component({
  selector: 'beautify-json-info-ui',
  templateUrl: './info-ui.component.html',
  styleUrl: './info-ui.component.scss',
})
export class InfoUiComponent {
  @Input() darkStyle: boolean | undefined | null;
  JSONExample = `{
  "person": {
    "name": "John Doe",
    "age": 30,
    "isDeveloper": true,
    "projects": ["Project A", "Project B"]
  },
  "dataList": [
    "Item 1",
    42,
    true,
    {"key": "value"},
    ["nested", "array"]
  ],
  "exampleString": "This is an example of a JSON string",
  "exampleNumber": 3.14,
  "exampleBoolean": true,
  "exampleNull": null
}
`;
}
