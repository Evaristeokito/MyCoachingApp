import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AgentsComponent } from './agents.component';
import { MaterialsModule } from 'src/app/core/material/materials.module';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AgentsRoutingModule } from './agents-routing.module';
import { AgentsTableComponent } from './agents-table/agents-table.component';
import { UpdateAgentsComponent } from './update-agents/update-agents.component';
import { AgentsSingleComponent } from './agents-details/agents-single.component';

@NgModule({ declarations: [
        AgentsComponent,
        UpdateAgentsComponent,
        AgentsTableComponent,
        AgentsSingleComponent
    ],
    exports: [
        AgentsComponent,
        UpdateAgentsComponent,
        AgentsTableComponent,
        AgentsSingleComponent
    ], imports: [CommonModule,
        ReactiveFormsModule,
        AgentsRoutingModule,
        MaterialsModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AgentsModule {}
