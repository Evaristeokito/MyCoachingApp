import { Component, OnInit } from '@angular/core';
import { IAgent } from 'src/app/shared/models/agents';
import { AgentService } from '../agents.service';


@Component({
  selector: 'app-coach-table',
  templateUrl: './agents-table.component.html',
  styleUrls: ['./agents-table.component.css'],
})
export class AgentsTableComponent implements OnInit {
  agents: IAgent[] = [];
  filteredAgents: IAgent[] = [];
  searchTerm = '';
  isLoading = true;
  paginatedAgents: IAgent[] = [];

  currentPage = 1;
  pageSize = 3;
  totalPages = 1;

  openedMenuId: string | null = null;

  constructor(private agentListService: AgentService) {}

  ngOnInit(): void {
    this.loadAgents();
  }

  loadAgents(): void {
    this.agentListService.getAgents().subscribe({
      next: (data) => {
        this.agents = data;
        this.filteredAgents = data;
        this.updatePagination();
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Erreur chargement agents', error);
        this.isLoading = false;
      },
    });
  }

  searchAgents(): void {
    const term = this.searchTerm.toLowerCase().trim();

    this.filteredAgents = this.agents.filter(
      (agent) =>
        agent.name?.toLowerCase().includes(term) ||
        agent.firstname?.toLowerCase().includes(term) ||
        agent.lastname?.toLowerCase().includes(term),
    );

    this.currentPage = 1;
    this.updatePagination();
  }

  display(value?: string): string {
    return value && value.trim() !== '' ? value : 'Non renseigné';
  }

  updatePagination(): void {
    this.totalPages =
      Math.ceil(this.filteredAgents.length / this.pageSize) || 1;

    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;

    this.paginatedAgents = this.filteredAgents.slice(startIndex, endIndex);
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
}
