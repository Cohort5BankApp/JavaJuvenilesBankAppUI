import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomerSignUpComponent } from './customer-sign-up/customer-sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerSignUpComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
