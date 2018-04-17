import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import {PrimengimportModule} from './primengimport/primengimport.module';
import { ListComponent } from './list/list.component';
import { MtableComponent } from './mtable/mtable.component';
import {MmoduleModule} from './mmodule/mmodule.module';
import { LoginComponent } from './login/login.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ContactService} from './contact.service';
import { AddcontactComponent } from './addcontact/addcontact.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    NavigationComponent,
    HomeComponent,
    ListComponent,
    MtableComponent,
    LoginComponent,
    AddcontactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PrimengimportModule,
    MmoduleModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent],
  entryComponents: [AddcontactComponent]
})
export class AppModule { }
