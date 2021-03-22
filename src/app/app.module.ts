import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import Listview component Module
import { ListViewAllModule } from '@syncfusion/ej2-angular-lists';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, ListViewAllModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
