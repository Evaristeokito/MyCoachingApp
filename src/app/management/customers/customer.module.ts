import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerRoutingModule } from './customer-routing.module';
import {CreateCustomerComponent} from "./create-customer/create-customer.component";
import {MatRadioButton} from "@angular/material/radio";
import {CustomerTableComponent} from "./customer-table/customer-table.component";


@NgModule({
  declarations: [
    CreateCustomerComponent,
    CustomerTableComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CustomerRoutingModule,
    MatRadioButton,
  ],
})
export class CustomerModule {}
