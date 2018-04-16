import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import {PrimengimportModule} from './primengimport/primengimport.module';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    NavigationComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimengimportModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
