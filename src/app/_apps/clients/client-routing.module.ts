import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ClientsComponent} from "./clients.component";
import {ClientsTableComponent} from "./clients-table/clients-table.component";
import {ClientDetailComponent} from "./client-detail/client-detail.component";

const routes: Routes = [{
  path: "nouveau-client", component: ClientsComponent,
},
  {path: "voir-les-cliients", component: ClientsTableComponent},
  {path : "client-detail/:id", component:ClientDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule {
}
