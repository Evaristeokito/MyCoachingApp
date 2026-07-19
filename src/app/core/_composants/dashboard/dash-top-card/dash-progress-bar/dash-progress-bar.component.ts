import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { UtilsService } from 'src/app/management/utils/utils.service';

interface ProgressItem {
  label: string;
  value: number;
  max: number;
  color: string;
}

@Component({
  selector: 'app-dash-progress-bar',
  standalone: true,
  imports: [NgFor,NgClass],
  templateUrl: './dash-progress-bar.component.html',
  styleUrl: './dash-progress-bar.component.css',
})
export class DashProgressBarComponent {
  progressItems: ProgressItem[] = [];

  constructor(private dashboardService: UtilsService) {}

  ngOnInit(): void {
    this.loadProgressData();
  }

  loadProgressData(): void {
    this.dashboardService.getDashboardData().subscribe({
      next: (stats) => {
        this.progressItems = [
          {
            label: 'Dossiers',
            value: stats.dossiers,
            max: 100,
            color: 'bg-primary',
          },
          {
            label: 'Personnel',
            value: stats.personnel,
            max: 100,
            color: 'bg-success',
          },
          {
            label: 'Congés',
            value: stats.conges,
            max: 100,
            color: 'bg-warning',
          },
          {
            label: 'Présences',
            value: stats.presences,
            max: 100,
            color: 'bg-danger',
          },
          {
            label: 'Dossiers',
            value: stats.dossiers,
            max: 100,
            color: 'bg-primary',
          },
          {
            label: 'Personnel',
            value: stats.personnel,
            max: 100,
            color: 'bg-success',
          }
        ];
      },
      error: (error) => {
        console.error('Erreur chargement progress dashboard', error);
      },
    });
  }

  getPercent(item: ProgressItem): number {
    return Math.min((item.value / item.max) * 100, 100);
  }
}
