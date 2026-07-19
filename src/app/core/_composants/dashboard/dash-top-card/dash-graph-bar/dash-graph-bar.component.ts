import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { ApexAxisChartSeries, ApexChart, ApexXAxis, ApexYAxis, ApexStroke, ApexMarkers, ApexDataLabels, ApexFill, ApexGrid, ApexTooltip, ChartComponent } from 'ng-apexcharts';
import { PresenceStat, UtilsService } from 'src/app/management/utils/utils.service';


export type PresenceChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  stroke: ApexStroke;
  markers: ApexMarkers;
  dataLabels: ApexDataLabels;
  fill: ApexFill;
  grid: ApexGrid;
  tooltip: ApexTooltip;
  colors: string[];
};

@Component({
  selector: 'app-dash-graph-bar',
  standalone: true,
  imports: [NgIf, ChartComponent],
  templateUrl: './dash-graph-bar.component.html',
  styleUrl: './dash-graph-bar.component.css',
})
export class DashGraphBarComponent implements OnInit {
  isLoading = true;

  chartOptions: PresenceChartOptions = {
    series: [
      {
        name: 'Présences',
        data: [],
      },
    ],
    chart: {
      type: 'line',
      height: 280,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      animations: {
        enabled: true,
        speed: 800,
      },
    },
    colors: ['#2563eb'],
    stroke: {
      curve: 'smooth',
      width: 4,
    },
    markers: {
      size: 5,
      colors: ['#2563eb'],
      strokeColors: '#ffffff',
      strokeWidth: 2,
      hover: {
        size: 7,
      },
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: 'solid',
      opacity: 0.12,
    },
    grid: {
      borderColor: '#e5e7eb',
      strokeDashArray: 0,
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    xaxis: {
      categories: [],
      labels: {
        style: {
          colors: '#374151',
          fontSize: '14px',
        },
      },
      axisBorder: {
        color: '#d1d5db',
      },
      axisTicks: {
        color: '#d1d5db',
      },
    },
    yaxis: {
      min: 0,
      max: 6,
      tickAmount: 6,
      labels: {
        style: {
          colors: '#374151',
          fontSize: '13px',
        },
      },
    },
    tooltip: {
      theme: 'dark',
      y: {
        formatter: (value: number) => `${value} présence(s)`,
      },
    },
  };

  constructor(private dashboardService: UtilsService) {}

  ngOnInit(): void {
    this.loadPresencePersonnelStats();
  }

  loadPresencePersonnelStats(): void {
    this.dashboardService.getPresenceStats().subscribe({
      next: (data: PresenceStat[]) => {
        const mois = data.map((item) => item.mois);
        const presences = data.map((item) => item.presences);
        const maxValue = Math.max(...presences, 6);

        this.chartOptions = {
          ...this.chartOptions,
          series: [
            {
              name: 'Présences',
              data: presences,
            },
          ],
          xaxis: {
            ...this.chartOptions.xaxis,
            categories: mois,
          },
          yaxis: {
            ...this.chartOptions.yaxis,
            max: maxValue,
          },
        };

        this.isLoading = false;
      },
      error: (error) => {
        console.error('Erreur chargement présence des personnels', error);
        this.isLoading = false;
      },
    });
  }
}
