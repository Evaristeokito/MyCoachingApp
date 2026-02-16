import { NgModule } from '@angular/core';
import {AsyncPipe, CommonModule, JsonPipe} from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CommuneComponent } from './commune/commune.component';
import { MaterialsModule } from 'src/app/core/material/materials.module';
import { provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import {RouterLink} from "@angular/router";
import {NgbPagination} from "@ng-bootstrap/ng-bootstrap";

@NgModule({ declarations: [
        CommuneComponent
    ],
    exports: [
        CommuneComponent,
    ], imports: [CommonModule,
        ReactiveFormsModule,
        MaterialsModule,
        AsyncPipe,
        JsonPipe,
        RouterLink, NgbPagination], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class UtilsModule {}
