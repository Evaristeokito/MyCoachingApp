import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CoachComponent} from "./coach.component";
import {CoachTableComponent} from "./coach-table/coach-table.component";
import {UpdateCoachComponent} from "./update-coach/update-coach.component";
import {CoachSingleComponent} from "./coach-details/coach-single.component";

const routes: Routes = [
  {path : "save",component:CoachComponent},
  {path : "show" , component : CoachTableComponent},
  {path : "update/:id" , component : UpdateCoachComponent},
  {path : "single/:id" , component  : CoachSingleComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoachsRoutingModule { }
