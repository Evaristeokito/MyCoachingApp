import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CustomerTableComponent } from './customer-table/customer-table.component';

const routes: Routes = [
  {
    path: 'create',
    component: CreateCustomerComponent,
  },
  { path: 'list', component: CustomerTableComponent },
  { path: 'detail/:id', component: CustomerTableComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerRoutingModule {}
