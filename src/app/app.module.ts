import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddRestroComponent } from './add-restro/add-restro.component';
import { UpdateRestroComponent } from './update-restro/update-restro.component';
import { LoginRestroComponent } from './login-restro/login-restro.component';
import { RegisterRestroComponent } from './register-restro/register-restro.component';
import { ListRestroComponent } from './list-restro/list-restro.component';
import {HttpClientModule} from '@angular/common/http'
import {ReactiveFormsModule} from '@angular/forms'
 
@NgModule({
  declarations: [
    AppComponent,
    AddRestroComponent,
    UpdateRestroComponent,
    LoginRestroComponent,
    RegisterRestroComponent,
    ListRestroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
