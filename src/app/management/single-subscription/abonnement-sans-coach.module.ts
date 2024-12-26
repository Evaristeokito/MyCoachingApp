import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";
import { AbonnementSansTableComponent } from './abonnement-sans-table/abonnement-sans-table.component';
import { AbonnementSansSingleComponent } from './abonnement-sans-single/abonnement-sans-single.component';
import { AbonnementSansCoachComponent } from './abonnement-sans-coach.component';
import { AbonnementSansCoachRoutingModule } from './abonnement-sans-coach-routing.module';
import { MaterialsModule } from 'src/app/core/material/materials.module';


@NgModule({
  declarations: [
    AbonnementSansTableComponent,
    AbonnementSansSingleComponent,
    AbonnementSansCoachComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialsModule,
    AbonnementSansCoachRoutingModule,
    RouterLink
  ]
})
export class AbonnementSansCoachModule { }
