import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import {DataTablesModule} from 'angular-datatables';

import {
  DashboardComponent,
  HeaderComponent,
  FooterComponent,
  MainComponent,
  NavbarComponent,
} from './_composants/index';
import {
  NationaliteComponent,
  CouleurComponent,
  CreneauComponent,
  CiviliteComponent
} from './_apps/index.coach';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SweetAlert2Module} from "@sweetalert2/ngx-sweetalert2";
import {ClientModule} from "./_apps/clients/client.module";
import { CommuneComponent } from './_apps/commune/commune.component';
import { PoidsComponent } from './_apps/poids/poids.component';
import { TailleComponent } from './_apps/taille/taille.component';
import {MaterialsModule} from "./materials/materials.module";
import {CoachsModule} from "./_apps/coach/coachs.module";
import {AbonnementModule} from "./_apps/abonnement/abonnement.module";
import { AbonnementSansCoachModule } from './_apps/abonnement-sans-coach/abonnement-sans-coach.module';
import { ExerciceSansCoachComponent } from './_apps/exercice-sans-coach/exercice-sans-coach.component';
import { ExerciceSansCoachAddComponent } from './_apps/exercice-sans-coach/exercice-sans-coach-add/exercice-sans-coach-add.component';
import { ExerciceModule } from './_apps/exercices/exercice.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    NavbarComponent,
    NationaliteComponent,
    CouleurComponent,
    CreneauComponent,
    CiviliteComponent,
    LoginComponent,
    RegisterComponent,
    CommuneComponent,
    PoidsComponent,
    TailleComponent,
    ExerciceSansCoachComponent,
    ExerciceSansCoachAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DataTablesModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialsModule,
    SweetAlert2Module,
    CoachsModule,
    ClientModule,
    AbonnementModule,
    ExerciceModule,
    AbonnementSansCoachModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
