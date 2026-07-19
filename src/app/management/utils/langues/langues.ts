import { Component, OnInit } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import { ILangues } from 'src/app/shared/models/agents';
import { NgClass, NgFor, NgIf, SlicePipe } from '@angular/common';
import { UtilsService } from '../utils.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-langues',
  standalone: true,
  imports: [ReactiveFormsModule, 
    NgFor, NgIf, 
    FormsModule,NgClass,RouterLink],
  templateUrl: './langues.html',
  styleUrl: './langues.css',
})
export class Langues implements OnInit {
  langues: ILangues[] = [];

  filteredLangues: ILangues[] = [];
  paginatedLangues: ILangues[] = [];

  searchTerm = '';
  isLoading = true;

  currentPage = 1;
  pageSize = 3;
  totalPages = 1;

  openedMenuId: string | null = null;

  constructor(private serivce : UtilsService) {}

  ngOnInit(): void {
    this.loadDossiers();
  }

  loadDossiers(): void {
    this.serivce.getLangues().subscribe({
      next: (data) => {
        this.langues = data;
        this.filteredLangues = data;
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

    this.filteredLangues = this.langues.filter(
      (lang) =>
        lang.agent.name?.toLowerCase().includes(term) ||
        lang.agent.lastname.toLowerCase().includes(term) ||
        lang.name.toLowerCase().includes(term) ||
        lang.agent.matricule?.toLowerCase().includes(term),
    );

    this.currentPage = 1;
    this.updatePagination();
  }

  updatePagination(): void {
    this.totalPages =
      Math.ceil(this.filteredLangues.length / this.pageSize) || 1;

    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;

    this.paginatedLangues = this.filteredLangues.slice(startIndex, endIndex);
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
