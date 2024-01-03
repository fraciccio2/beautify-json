import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'beautify-json-viewer-ui',
  templateUrl: './viewer-ui.component.html',
  styleUrl: './viewer-ui.component.scss',
})
export class ViewerUiComponent {
  @Input() jsonData: any;
  @Input() expandedNodes: string[] = [];
  @Output() unificationExpandedNode = new EventEmitter<string[]>();

  protected readonly Object = Object;

  getObjectKeys(obj: unknown): string[] {
    if (typeof obj === 'object' && obj !== null) {
      return Object.keys(obj);
    }
    return [];
  }

  isObject(obj: unknown): boolean {
    return typeof obj === 'object' && obj !== null;
  }

  isArray(obj: unknown): boolean {
    return Array.isArray(obj);
  }

  toggleNode(item: string): void {
    if (this.isObject(this.jsonData[item]) && this.jsonData[item] !== null) {
      if (this.expandedNodes.includes(item)) {
        this.expandedNodes = this.expandedNodes.filter((node) => node !== item);
      } else {
        this.expandedNodes.push(item);
      }
      this.unificationExpandedNode.emit(this.expandedNodes);
    }
  }
}
