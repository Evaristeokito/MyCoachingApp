import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'agents',
    loadChildren: () =>
      import('./agents/agents.module').then((m) => m.AgentsModule),
  },
  {
    path: 'dossiers',
    loadChildren: () =>
      import('./dossiers/dossiers.module').then((m) => m.DossiersModule),
  },
  {
    path: 'formations',
    loadChildren: () =>
      import('./utils/formations/formations.module').then(
        (m) => m.FormationsModule,
      ),
  },
  {
    path: 'langues',
    loadChildren: () =>
      import('./utils/langues/langues.module').then((m) => m.LanguesModule),
  },
  {
    path: 'experience',
    loadChildren: () =>
      import('./utils/experience/experience.module').then(
        (m) => m.ExperienceModule,
      ),
  },
  {
    path: 'competences',
    loadChildren: () =>
      import('./utils/competence/competence.module').then(
        (m) => m.CompetenceModule,
      ),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
