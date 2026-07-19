import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { IAgent } from 'src/app/shared/models/dossiers';
import { DossierService } from './DossierService';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-dossiers',
  standalone: true,
  imports: [NgFor, NgIf, ReactiveFormsModule,RouterLink,FormsModule,NgClass],
  templateUrl: './dossiers.html',
  styleUrl: './dossiers.css',
})
export class Dossiers implements OnInit {

  dossiers: IAgent[] = [];
  filteredDossiers: IAgent[] = [];
  paginatedDossiers: IAgent[] = [];

  searchTerm = '';
  isLoading = true;

  currentPage = 1;
  pageSize = 5;
  totalPages = 1;

  openedMenuId: string | null = null;

  constructor(private dossierListService: DossierService) {}

  ngOnInit(): void {
    this.loadDossiers();
  }

  loadDossiers(): void {
    this.dossierListService.getAllDossiers().subscribe({
      next: (data) => {
        this.dossiers = data;
        this.filteredDossiers = data;
        this.updatePagination();
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Erreur chargement dossiers', error);
        this.isLoading = false;
      },
    });
  }

  searchDossiers(): void {
    const term = this.searchTerm.toLowerCase().trim();

    this.filteredDossiers = this.dossiers.filter(
      (dossier) =>
        dossier.numeroDossier?.toLowerCase().includes(term) ||
        dossier.agent.name.toLowerCase().includes(term) ||
        dossier.agent.matricule?.toLowerCase().includes(term),
    );

    this.currentPage = 1;
    this.updatePagination();
  }

  updatePagination(): void {
    this.totalPages =
      Math.ceil(this.filteredDossiers.length / this.pageSize) || 1;

    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;

    this.paginatedDossiers = this.filteredDossiers.slice(startIndex, endIndex);
  }

  goToPage(page: number): void {
    if (page < 1 || page > this.totalPages) return;

    this.currentPage = page;
    this.updatePagination();
  }

  nextPage(): void {
    this.goToPage(this.currentPage + 1);
  }

  previousPage(): void {
    this.goToPage(this.currentPage - 1);
  }

  getPages(): number[] {
    return Array.from({ length: this.totalPages }, (_, index) => index + 1);
  }

  toggleMenu(id: string): void {
    this.openedMenuId = this.openedMenuId === id ? null : id;
  }

  display(value?: String): String {
    return value && value.trim() !== '' ? value : 'À définir';
  }
}
