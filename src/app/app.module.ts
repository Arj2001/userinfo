import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from "@angular/common/http";

const addRoute:Routes = [
  {
    path:"",component:UserComponent
  },
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(addRoute),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
