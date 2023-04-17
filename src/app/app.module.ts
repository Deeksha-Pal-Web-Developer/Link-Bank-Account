import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FooterComponent } from './components/footer/footer.component';
import { SelectBanksComponent } from './components/select-banks/select-banks.component';
import { AccountDetailsComponent } from './components/select-banks/account-details/account-details.component';
import { MaterialModule } from './material/material.module';
import { OtpComponentComponent } from './components/select-banks/account-details/otp-component/otp-component.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SelectBanksComponent,
    AccountDetailsComponent,
    OtpComponentComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
