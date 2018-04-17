import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenuModule} from 'primeng/menu';
import {FormsModule} from '@angular/forms';
import {StepsModule} from 'primeng/steps';
import {OrderListModule} from 'primeng/orderlist';

@NgModule({
  imports: [
    CommonModule,
    MenuModule,
    FormsModule,
    StepsModule,
    OrderListModule
  ], exports: [
    MenuModule,
    FormsModule,
    StepsModule,
    OrderListModule
  ],
  declarations: []
})
export class PrimengimportModule { }
