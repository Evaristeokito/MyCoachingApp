import { Component, OnInit } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { IFormation } from 'src/app/shared/models/agents';
import { UtilsService } from '../utils.service';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-formations',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    RouterLink,
    ReactiveFormsModule,
    FormsModule,
    NgClass
  ],
  templateUrl: './formations.html',
  styleUrl: './formations.css',
})
export class Formations implements OnInit {
  formations: IFormation[] = [];

  filteredFormation: IFormation[] = [];
  paginatedFormation: IFormation[] = [];

  searchTerm = '';
  isLoading = true;

  currentPage = 1;
  pageSize = 3;
  totalPages = 1;

  openedMenuId: string | null = null;

  constructor(private serivce: UtilsService) {}

  ngOnInit(): void {
    this.loadFormations();
  }

  loadFormations(): void {
    this.serivce.getFormations().subscribe({
      next: (data) => {
        this.formations = data;
        this.filteredFormation = data;
        this.updatePagination();
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Erreur chargement de la formation', error);
        this.isLoading = false;
      },
    });
  }

  searchFormations(): void {
    const term = this.searchTerm.toLowerCase().trim();

    this.filteredFormation = this.formations.filter(
      (fm) =>
        fm.agent.name?.toLowerCase().includes(term) ||
        fm.agent.lastname.toLowerCase().includes(term) ||
        fm.agent.firstname.toLowerCase().includes(term) ||
        fm.ecole.toLowerCase().includes(term) ||
        fm.options.toLowerCase().includes(term) ||
        fm.faculty.toLowerCase().includes(term) ||
        fm.agent.matricule?.toLowerCase().includes(term),
    );

    this.currentPage = 1;
    this.updatePagination();
  }

  updatePagination(): void {
    this.totalPages =
      Math.ceil(this.filteredFormation.length / this.pageSize) || 1;

    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;

    this.paginatedFormation = this.filteredFormation.slice(startIndex, endIndex);
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
