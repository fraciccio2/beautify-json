import { NgModule } from '@angular/core';
import { HighlightPipe } from './pipes';

const pipes = [HighlightPipe];

@NgModule({
  exports: [pipes],
  declarations: [pipes],
})
export class HomeUtilModule {}
