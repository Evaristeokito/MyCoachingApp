import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";
import { MaterialsModule } from 'src/app/materials/materials.module';
import { ExerciceComponent } from './exercice.component';
import { ExerciceTableComponent } from '../index.coach';
import { ExerciceSingleComponent } from './exercice-single/exercice-single.component';
import { ExerciceRoutingModule } from './exercice-routing.module';

@NgModule({
  declarations: [
   ExerciceComponent,
   ExerciceTableComponent,
   ExerciceSingleComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialsModule,
    ExerciceRoutingModule,
    RouterLink
  ]
})
export class ExerciceModule { }
