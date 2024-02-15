import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'beautify-json-viewer-ui',
  templateUrl: './viewer-ui.component.html',
  styleUrl: './viewer-ui.component.scss',
})
export class ViewerUiComponent {
  @Input() jsonData: any;
  @Input() darkStyle: boolean | undefined | null;
  @Input() filterObj: boolean = true;
  @Input() inputText: string | undefined;
  @Input() expandedNodes: string[] = [];
  @Input() parent = '';
  @Input() order: 'asc' | 'desc' | '' = '';
  @Output() unificationExpandedNode = new EventEmitter<string[]>();

  protected readonly Object = Object;

  getObjectKeys(obj: unknown, order: 'asc' | 'desc' | ''): string[] {
    if (typeof obj === 'object' && obj !== null) {
      const arr = Object.keys(
        this.filterObj
          ? this.filterObjectForKeys(obj, this.inputText ?? '')
          : obj
      );
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

  filterObjectForKeys(obj: any, filterString: string, parentKey?: string): any {
    const filterStringL = filterString.toLowerCase();
    const result: Record<string, any> = {};
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const value = obj[key];
        if (
          key.toLowerCase().includes(filterStringL) ||
          (parentKey && parentKey.toLowerCase().includes(filterStringL))
        ) {
          result[key] = value;
        } else if (typeof value === 'object' && value !== null) {
          const filteredNestedObject = this.filterObjectForKeys(
            value,
            filterStringL,
            key
          );
          if (Object.keys(filteredNestedObject).length > 0) {
            result[key] = filteredNestedObject;
          }
        }
      }
    }
    return result;
  }
}
