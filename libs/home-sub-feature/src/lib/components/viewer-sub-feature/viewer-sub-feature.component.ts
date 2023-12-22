import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'beautify-json-viewer-sub-feature',
  template: `<beautify-json-viewer-ui
    [expandedNodes]="expandedNodes"
    [jsonData]="jsonData"
  ></beautify-json-viewer-ui>`,
  styles: ``,
})
export class ViewerSubFeatureComponent implements OnInit, OnChanges {
  @Input() json: string | undefined;
  @Input() collapseAllEmit: EventEmitter<void> | undefined;
  @Input() expandAllEmit: EventEmitter<void> | undefined;

  jsonData: any;
  expandedNodes: string[] = [];

  ngOnInit() {
    if (this.collapseAllEmit) {
      this.collapseAllEmit.subscribe(() => {
        this.expandedNodes = [];
      });
    }
    if (this.expandAllEmit) {
      this.expandAllEmit.subscribe(() => {
        this.expandedNodes = this.getAllNodes(this.jsonData);
      });
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes && changes['json'] && this.json) {
      try {
        this.jsonData = JSON.parse(this.json);
      } catch (e) {
        console.error(e);
      }
    }
  }

  isObject(obj: unknown): boolean {
    return typeof obj === 'object' && obj !== null;
  }

  getAllNodes(obj: any): string[] {
    let keys: string[] = [];
    for (const key of Object.keys(obj)) {
      keys.push(key);
      if (this.isObject(obj[key]) && obj[key] !== null) {
        keys = keys.concat(this.getAllNodes(obj[key]));
      }
    }
    return keys;
  }
}
