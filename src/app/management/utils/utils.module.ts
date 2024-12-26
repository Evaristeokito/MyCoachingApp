import { NgModule } from '@angular/core';
import {AsyncPipe, CommonModule, JsonPipe} from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CiviliteComponent } from './civilite/civilite.component';
import { CommuneComponent } from './commune/commune.component';
import { CouleurComponent } from './couleurs/couleur.component';
import { CreneauComponent } from './creneau/creneau.component';
import { NationaliteComponent } from './nationalite/nationalite.component';
import { PoidsComponent } from './poids/poids.component';
import { MaterialsModule } from 'src/app/core/material/materials.module';
import { TailleComponent } from './taille/taille.component';
import { provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import {RouterLink} from "@angular/router";
import {NgbPagination} from "@ng-bootstrap/ng-bootstrap";

@NgModule({ declarations: [
        CiviliteComponent,
        CommuneComponent,
        CouleurComponent,
        CreneauComponent,
        NationaliteComponent,
        PoidsComponent,
        TailleComponent
    ],
    exports: [
        CiviliteComponent,
        CommuneComponent,
        CouleurComponent,
        CreneauComponent,
        NationaliteComponent,
        PoidsComponent,
        TailleComponent
    ], imports: [CommonModule,
        ReactiveFormsModule,
        MaterialsModule,
        AsyncPipe,
        JsonPipe,
        RouterLink, NgbPagination], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class UtilsModule {}
