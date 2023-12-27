import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ExerciceComponent } from './exercice.component';
import { ExerciceTableComponent } from '../index.coach';
import { ExerciceSingleComponent } from './exercice-single/exercice-single.component';

const routes: Routes = [
  {path : "nouveau" , component : ExerciceComponent},
  {path : "liste" , component : ExerciceTableComponent},
  {path : "single/:id" , component : ExerciceSingleComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExerciceRoutingModule {
}
