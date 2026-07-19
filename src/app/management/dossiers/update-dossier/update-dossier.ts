import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IAgent } from 'src/app/shared/models/dossiers';
import { DossierService, UpdateDossierRequest } from '../DossierService';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-update-dossier',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, NgIf, RouterLink],
  templateUrl: './update-dossier.html',
  styleUrl: './update-dossier.css',
})
export class UpdateDossier {

  dossiers: IAgent[] = [];
  filteredDossiers: IAgent[] = [];

  selectedDossier?: IAgent;
  searchTerm = '';
  openedMenuId: number | null = null;

  isLoading = true;
  isSaving = false;
  errorMessage = '';
  successMessage = '';


  form!: FormGroup;
  dossier?: IAgent;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private dossierService: DossierService,
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      numeroDossier: ['', Validators.required],
      referenceDossier: ['', Validators.required],
      versionDossier: ['', Validators.required],
      resumeProfessionnel: [
        '',
        [Validators.required, Validators.minLength(10)],
      ],
    });

    const id = this.route.snapshot.paramMap.get('id');
    this.loadDossier(id);
  }

  loadDossier(id: any): void {
    this.isLoading = true;

    this.dossierService.getDossier(id).subscribe({
      next: (data) => {
        this.dossier = data;

        this.form.patchValue({
          numeroDossier: data.numeroDossier,
          referenceDossier: data.numeroDossier,
          versionDossier: data.version,
          resumeProfessionnel: data.resume_professionnel,
        });

        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = 'Impossible de charger le dossier.';
        this.isLoading = false;
      },
    });
  }

  submit(): void {
    if (!this.dossier) return;

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.isSaving = true;
    this.errorMessage = '';

    this.dossierService
      .updateDossier(this.dossier.id, this.form.value)
      .subscribe({
        next: () => {
          this.successMessage = 'Dossier mis à jour avec succès.';
          this.isSaving = false;

          setTimeout(() => {
            this.router.navigate(['/management/dossiers/show']);
          }, 900);
        },
        error: () => {
          this.errorMessage = 'Erreur lors de la mise à jour du dossier.';
          this.isSaving = false;
        },
      });
  }

  cancel(): void {
    this.router.navigate(['/management/dossiers/show']);
  }

  isInvalid(field: string): boolean {
    const control = this.form.get(field);
    return !!control && control.invalid && control.touched;
  }
}
