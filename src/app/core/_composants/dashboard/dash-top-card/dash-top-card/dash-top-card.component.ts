import {Component, OnInit} from '@angular/core';
import {NgClass, NgForOf} from "@angular/common";
import { UtilsService } from 'src/app/management/utils/utils.service';
import { RouterLink } from '@angular/router';


interface DashboardCard {
  label: string;
  value: number;
  icon: string;
  color: string;
  route: string;
}

@Component({
  selector: 'app-dash-top-card',
  standalone: true,
  imports: [NgClass, NgForOf, RouterLink],
  templateUrl: './dash-top-card.component.html',
  styleUrl: './dash-top-card.component.css',
})
export class DashTopCardComponent implements OnInit {
  cards: DashboardCard[] = [];

  ngOnInit(): void {
    this.loadDashboardCards();
  }

  constructor(private utilsService: UtilsService) {}

  loadDashboardCards(): void {
    this.utilsService.getDashboardData().subscribe({
      next: (stats: any) => {
        this.cards = [
          {
            label: 'Dossiers',
            value: stats.dossiers,
            icon: 'far fa-folder-open',
            color: 'card-dossiers',
            route: '/dossiers',
          },
          {
            label: 'Nombre de Personnel',
            value: stats.personnel,
            icon: 'fas fa-user-friends',
            color: 'card-personnel',
            route: '/personnel',
          },
          {
            label: 'Personnel en Congés',
            value: stats.conges,
            icon: 'far fa-calendar-times',
            color: 'card-conges',
            route: '/conges',
          },
          {
            label: 'Presences de Personnel',
            value: stats.presences,
            icon: 'far fa-bell',
            color: 'card-presences',
            route: '/presences',
          },
        ];
      },
      error: (error) => {
        console.error('Erreur lors du chargement des cards dashboard', error);
      },
    });
  }
}
