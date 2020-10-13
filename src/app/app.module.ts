import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JsonToXmlComponent } from './json-to-xml/json-to-xml.component';
import { JsonToXlsxComponent } from './json-to-xlsx/json-to-xlsx.component';
import { JsonToCsvComponent } from './json-to-csv/json-to-csv.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JsonToPdfComponent } from './json-to-pdf/json-to-pdf.component';

@NgModule({
  declarations: [
    AppComponent,
    JsonToXmlComponent,
    JsonToXlsxComponent,
    JsonToCsvComponent,
    JsonToPdfComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
