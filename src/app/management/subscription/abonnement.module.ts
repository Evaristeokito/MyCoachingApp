import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import {AbonnementComponent} from "./abonnement.component";
import {AddAbonnementComponent} from "./add-abonnement/add-abonnement.component";
import {SingleAbonnementComponent} from "./single-abonnement/single-abonnement.component";
import {RouterLink} from "@angular/router";
import { AbonnementRoutingModule } from './abonnement-routing.module';
import { MaterialsModule } from 'src/app/core/material/materials.module';

@NgModule({
  declarations: [
    AbonnementComponent,
    AddAbonnementComponent,
    SingleAbonnementComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialsModule,
    AbonnementRoutingModule,
    RouterLink
  ]
})
export class AbonnementModule { }
