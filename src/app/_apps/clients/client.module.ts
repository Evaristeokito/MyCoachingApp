import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import {ClientsComponent} from "./clients.component";
import {ClientsTableComponent} from "./clients-table/clients-table.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { MaterialsModule } from 'src/app/materials/materials.module';

@NgModule({
  declarations: [
    ClientsComponent,
    ClientsTableComponent,
    ClientDetailComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialsModule,
    ClientRoutingModule
  ]
})
export class ClientModule { }
