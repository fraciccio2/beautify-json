import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'beautify-json-viewer-ui',
  templateUrl: './viewer-ui.component.html',
  styleUrl: './viewer-ui.component.scss',
})
export class ViewerUiComponent {
  @Input() jsonData: any;
  @Input() expandedNodes: string[] = [];
  @Input() parent = '';
  @Input() order: 'asc' | 'desc' | '' = '';
  @Output() unificationExpandedNode = new EventEmitter<string[]>();

  protected readonly Object = Object;

  getObjectKeys(obj: unknown, order: 'asc' | 'desc' | ''): string[] {
    if (typeof obj === 'object' && obj !== null) {
      const arr = Object.keys(obj);
      if (!arr || arr.length <= 1 || !order) {
        return arr;
      }

      return arr.sort((a, b) =>
        order === 'asc' ? a.localeCompare(b) : b.localeCompare(a)
      );
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
      const nodeItem = item + this.parent;
      if (this.expandedNodes.includes(nodeItem)) {
        this.expandedNodes = this.expandedNodes.filter(
          (node) => node !== nodeItem
        );
      } else {
        this.expandedNodes.push(nodeItem);
      }
      this.unificationExpandedNode.emit(this.expandedNodes);
    }
  }
}
