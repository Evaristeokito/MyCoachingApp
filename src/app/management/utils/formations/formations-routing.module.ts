import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Formations } from './formations';
import { CreateFormation } from './createFormation/createFormation';

const routes: Routes = [

  { path: 'show', component: Formations },
  { path: 'create', component: CreateFormation },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormationsRoutingModule {}
