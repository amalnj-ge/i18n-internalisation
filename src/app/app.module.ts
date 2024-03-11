import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { routes } from './app.routes';

@NgModule({
  declarations: [
    // Other components go here
  ],
  imports: [
    BrowserModule,
    CommonModule,
    TableComponent,
    RouterModule.forRoot([]),
  ],
//   bootstrap: [AppComponent]
})
export class AppModule { }