import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { AddpageComponent } from './Components/addpage/addpage.component';
import { DisplaypageComponent } from './Components/displaypage/displaypage.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { MyLibModule } from 'my-lib';
import { SearchPipe } from './Filters/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AddpageComponent,
    DisplaypageComponent,
    NavbarComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MyLibModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
