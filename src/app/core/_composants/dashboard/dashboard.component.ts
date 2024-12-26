import { Component, OnInit } from '@angular/core';
import {ApexOptions} from "ng-apexcharts";
import {ChartDataset, ChartOptions, ChartType} from "chart.js";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  errorMessage! :String ;

  public barChartOptions: ChartOptions = {
    responsive: true,
  };

  public barChartLabels: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  public barChartType: ChartType = 'bar';

  public barChartLegend = true;

  public barChartData: ChartDataset[] = [
    {
      data: [65, 59, 80, 81, 56, 55, 40],
      label: 'Series A',
    },
    {
      data: [28, 48, 40, 19, 86, 27, 90],
      label: 'Series B',
    },
  ];

  constructor(){
  }

  ngOnInit(): void {
  }


}
