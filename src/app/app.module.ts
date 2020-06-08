import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from "@angular/material/table";
import {PaginatorIntlModule} from "./paginator-intl/paginator-intl.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    PaginatorIntlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
