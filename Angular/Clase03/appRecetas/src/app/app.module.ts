import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormComponentComponent } from './form-component/form-component.component';
import { ListadoComponentComponent } from './listado-component/listado-component.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponentComponent,
    ListadoComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
