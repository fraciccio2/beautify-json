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
    [inputText]="inputText"
    [expandedNodes]="expandedNodes"
    [jsonData]="jsonData"
    [order]="order"
    (unificationExpandedNode)="unificationExpandedNode($event)"
  ></beautify-json-viewer-ui>`,
  styles: ``,
})
export class ViewerSubFeatureComponent implements OnInit, OnChanges {
  @Input() json: string | undefined;
  @Input() inputText: string | undefined;
  @Input() collapseAllEmit: EventEmitter<void> | undefined;
  @Input() expandAllEmit: EventEmitter<void> | undefined;
  @Input() orderAscEmit: EventEmitter<void> | undefined;
  @Input() orderDescEmit: EventEmitter<void> | undefined;

  jsonData: any;
  expandedNodes: string[] = [];
  order: 'asc' | 'desc' | '' = '';

  ngOnInit() {
    if (this.collapseAllEmit) {
      this.collapseAllEmit.subscribe(() => {
        this.expandedNodes = [];
      });
    }
    if (this.expandAllEmit) {
      this.expandAllEmit.subscribe(() => {
        this.expandedNodes = this.getAllNodes(this.jsonData, '');
      });
    }
    if (this.orderAscEmit) {
      this.orderAscEmit.subscribe(() => {
        this.order = 'asc';
      });
    }
    if (this.orderDescEmit) {
      this.orderDescEmit.subscribe(() => {
        this.order = 'desc';
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
    if (changes && changes['inputText'] && this.inputText) {
      this.expandedNodes = this.getAllNodes(this.jsonData, '');
    } else if (changes && changes['inputText'] && !this.inputText) {
      this.expandedNodes = [];
    }
  }

  isObject(obj: unknown): boolean {
    return typeof obj === 'object' && obj !== null;
  }

  getAllNodes(obj: any, parent: string): string[] {
    let keys: string[] = [];
    for (const key of Object.keys(obj)) {
      if (this.isObject(obj[key]) && obj[key] !== null) {
        const nodeItem = key + parent;
        keys.push(nodeItem);
        keys = keys.concat(this.getAllNodes(obj[key], nodeItem));
      }
    }
    return keys;
  }

  unificationExpandedNode(expandedNodes: string[]) {
    this.expandedNodes = expandedNodes;
  }
}
