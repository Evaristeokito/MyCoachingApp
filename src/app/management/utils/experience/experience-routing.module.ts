import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Experience } from './experience';
import { CreateExperience } from './createExperience/createExperience';


const routes: Routes = [
  { path: 'show', component: Experience },
  { path: 'create', component: CreateExperience },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExperienceRoutingModule {}
