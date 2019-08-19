import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { WijmoModule } from './wijmo/wijmo.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    WijmoModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
