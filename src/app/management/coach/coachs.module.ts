import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoachsRoutingModule } from './coachs-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CoachComponent } from './coach.component';
import { UpdateCoachComponent } from './update-coach/update-coach.component';
import { CoachTableComponent } from './coach-table/coach-table.component';
import { CoachSingleComponent } from './coach-details/coach-single.component';
import { MaterialsModule } from 'src/app/core/material/materials.module';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

@NgModule({ declarations: [
        CoachComponent,
        UpdateCoachComponent,
        CoachTableComponent,
        CoachSingleComponent,
        CoachSingleComponent,
    ],
    exports: [
        CoachComponent,
        UpdateCoachComponent,
        CoachTableComponent,
        CoachSingleComponent,
        CoachSingleComponent,
    ], imports: [CommonModule,
        ReactiveFormsModule,
        CoachsRoutingModule,
        MaterialsModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class CoachsModule {}
