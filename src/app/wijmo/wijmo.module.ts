import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WjCoreModule } from 'wijmo/wijmo.angular2.core';
import { WjGridModule } from 'wijmo/wijmo.angular2.grid';
import { WjInputModule } from 'wijmo/wijmo.angular2.input';
import { SampleGridComponent } from './sample-grid/sample-grid.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    WjCoreModule,
    WjInputModule,
    WjGridModule,
  ],
  declarations: [SampleGridComponent],
  exports: [
    SampleGridComponent,
  ],
})
export class WijmoModule {
}
