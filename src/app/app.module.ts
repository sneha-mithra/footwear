import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FootwearListComponent } from './footwear-list/footwear-list.component';
import { CreateFootwareComponent } from './create-footware/create-footware.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateFootwearComponent } from './update-footwear/update-footwear.component';
import { FootwearDetailsComponent } from './footwear-details/footwear-details.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
@NgModule({
  declarations: [
    AppComponent,
    FootwearListComponent,
    CreateFootwareComponent,
    UpdateFootwearComponent,
    FootwearDetailsComponent,
    LoginComponent,
    SignupComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
