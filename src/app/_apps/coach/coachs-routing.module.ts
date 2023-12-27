import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CoachComponent} from "./coach.component";
import {CoachTableComponent} from "./coach-table/coach-table.component";
import {CoachSingleComponent} from "./coach-single/coach-single.component";
import {UpdateCoachComponent} from "./update-coach/update-coach.component";

const routes: Routes = [
  {path : "creation",component:CoachComponent},
  {path : "liste-des-coachs" , component : CoachTableComponent},
  {path : "single-coach/:id" , component : CoachSingleComponent},
  {path : "update-coach/:id" , component : UpdateCoachComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoachsRoutingModule { }
