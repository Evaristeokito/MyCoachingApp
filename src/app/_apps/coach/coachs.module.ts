import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoachsRoutingModule } from './coachs-routing.module';
import {CoachComponent} from "./coach.component";
import {CoachTableComponent} from "./coach-table/coach-table.component";
import {ReactiveFormsModule} from "@angular/forms";
import { CoachSingleComponent } from './coach-single/coach-single.component';
import { UpdateCoachComponent } from './update-coach/update-coach.component';
import {MaterialsModule} from "../../materials/materials.module";

@NgModule({
  declarations: [
    CoachComponent,
    CoachTableComponent,
    CoachSingleComponent,
    UpdateCoachComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CoachsRoutingModule,
    MaterialsModule
  ]
})
export class CoachsModule { }
