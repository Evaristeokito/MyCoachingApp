import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";
import { ExerciceComponent } from './exercice.component';
import { ExerciceSingleComponent } from './exercice-single/exercice-single.component';
import { ExerciceRoutingModule } from './exercice-routing.module';
import { MaterialsModule } from 'src/app/core/material/materials.module';
import {ExerciceTableComponent} from "./exercice-table/exercice-table.component";
import {NgbPagination} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
   ExerciceComponent,
   ExerciceSingleComponent,
    ExerciceTableComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ExerciceRoutingModule,
    RouterLink,
    MaterialsModule,
    NgbPagination
  ]
})
export class ExerciceModule { }
