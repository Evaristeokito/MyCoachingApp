import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateLangue } from './createLangue/createLangue';
import { Langues } from './langues';


const routes: Routes = [
  { path: 'show', component: Langues },
  { path: 'create', component: CreateLangue },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LanguesRoutingModule {}
