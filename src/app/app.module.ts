import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MaterialsModule} from './core/material/materials.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2';
import {DashboardComponent, FooterComponent, HeaderComponent, MainComponent, NavbarComponent} from './core/_composants';
import {provideHttpClient, withInterceptorsFromDi} from "@angular/common/http";
import {AsyncPipe, JsonPipe} from "@angular/common";
import {UtilsModule} from "./management/utils/utils.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ChartComponent, NgApexchartsModule} from "ng-apexcharts";
import {BaseChartDirective} from "ng2-charts";


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
        SweetAlert2Module,
        AsyncPipe,
        JsonPipe,
        UtilsModule,
        NgbModule,
        ChartComponent,
        NgApexchartsModule, BaseChartDirective, // Importing NgApexchartsModule
    ],
  providers: [provideHttpClient(withInterceptorsFromDi())]
})
export class AppModule {
}
