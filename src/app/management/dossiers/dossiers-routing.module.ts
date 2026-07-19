import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateDossier } from './create-dossier/create-dossier';
import { DetailsDossier } from './details-dossier/details-dossier';
import { Dossiers } from './dossiers';
import { UpdateDossier } from './update-dossier/update-dossier';

const routes: Routes = [
  { path: 'show', component: Dossiers },
  { path: 'show/:id', component: DetailsDossier },
  { path: 'update/:id', component: UpdateDossier },
  { path: 'create', component: CreateDossier },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DossiersRoutingModule {}
