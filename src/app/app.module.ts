import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MaterialsModule} from './core/material/materials.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DashboardComponent, FooterComponent, HeaderComponent, MainComponent, NavbarComponent} from './core/_composants';
import {provideHttpClient, withInterceptorsFromDi} from "@angular/common/http";
import {AsyncPipe, JsonPipe} from "@angular/common";
import {UtilsModule} from "./management/utils/utils.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DashTopCardComponent} from "./core/_composants/dashboard/dash-top-card/dash-top-card/dash-top-card.component";
import {
  DashProgressBarComponent
} from "./core/_composants/dashboard/dash-top-card/dash-progress-bar/dash-progress-bar.component";
import {
  DashGraphBarComponent
} from "./core/_composants/dashboard/dash-top-card/dash-graph-bar/dash-graph-bar.component";
import { DataTable } from "./core/_composants/dashboard/dataTable/dataTable";
import { A11yModule } from "@angular/cdk/a11y";


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    NavbarComponent,
  ],
  bootstrap: [AppComponent],
  imports: [BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialsModule,
    FormsModule,
    ReactiveFormsModule,
    AsyncPipe,
    JsonPipe,
    UtilsModule,
    NgbModule,
    DashTopCardComponent,
    DashProgressBarComponent,
    DashGraphBarComponent, DataTable, A11yModule],
  providers: [provideHttpClient(withInterceptorsFromDi())]
})
export class AppModule {
}
