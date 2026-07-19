import { NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CompetenceAgent, EtudeAgent, ExperienceProfessionnelle, FormationAgent, LangueAgent } from 'src/app/shared/models/agentsss';
import { DossierWizardService } from 'src/app/shared/services/dossier-wizard';

@Component({
  selector: 'app-agent-premium',
  standalone: true,
  imports: [NgIf, NgFor, FormsModule, ReactiveFormsModule],
  templateUrl: './agent-premium.html',
  styleUrl: './agent-premium.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AgentPremium {
  form!: FormGroup;
  currentStep = 0;

  agentId?: number;
  dossierId?: number;

  steps = [
    'Agent',
    'Dossier',
    'Langues',
    'Études',
    'Compétences',
    'Formations',
    'Expériences',
    'Validation',
  ];

  langues: LangueAgent[] = [];
  etudes: EtudeAgent[] = [];
  competences: CompetenceAgent[] = [];
  formations: FormationAgent[] = [];
  experiences: ExperienceProfessionnelle[] = [];

  constructor(
    private fb: FormBuilder,
    private wizardService: DossierWizardService,
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      nom: ['', Validators.required],
      postNom: ['', Validators.required],
      prenom: ['', Validators.required],
      sexe: ['', Validators.required],
      dateNaissance: ['', Validators.required],
      lieuNaissance: [''],
      telephone1: ['', Validators.required],
      email: [''],
      matricule: [''],

      numeroDossier: ['', Validators.required],
      referenceDossier: ['', Validators.required],
      versionDossier: ['', Validators.required],
      resumeProfessionnel: ['', Validators.required],
    });
  }

  nextStep(): void {
    this.currentStep++;
  }

  previousStep(): void {
    this.currentStep--;
  }

  goToStep(index: number): void {
    this.currentStep = index;
  }

  addLangue(): void {
    this.langues.push({
      langue: '',
      niveauParle: '',
      niveauEcrit: '',
      niveauLecture: '',
    });
  }

  removeLangue(index: number): void {
    this.langues.splice(index, 1);
  }

  addEtude(): void {
    this.etudes.push({
      niveau: '',
      etablissement: '',
      domaine: '',
      diplome: '',
      anneeDebut: new Date().getFullYear(),
      anneeFin: new Date().getFullYear(),
    });
  }

  removeEtude(index: number): void {
    this.etudes.splice(index, 1);
  }

  addCompetence(): void {
    this.competences.push({
      competence: '',
      niveau: '',
      description: '',
    });
  }

  removeCompetence(index: number): void {
    this.competences.splice(index, 1);
  }

  addFormation(): void {
    this.formations.push({
      intitule: '',
      organisme: '',
      dateDebut: '',
      dateFin: '',
      certificat: '',
    });
  }

  removeFormation(index: number): void {
    this.formations.splice(index, 1);
  }

  addExperience(): void {
    this.experiences.push({
      poste: '',
      entreprise: '',
      lieu: '',
      dateDebut: '',
      dateFin: '',
      posteActuel: false,
      description: '',
    });
  }

  removeExperience(index: number): void {
    this.experiences.splice(index, 1);
  }

  submitAll(): void {
    const agentFormData = new FormData();

    agentFormData.append('nom', this.form.value.nom);
    agentFormData.append('postNom', this.form.value.postNom);
    agentFormData.append('prenom', this.form.value.prenom);
    agentFormData.append('sexe', this.form.value.sexe);
    agentFormData.append('dateNaissance', this.form.value.dateNaissance);
    agentFormData.append('lieuNaissance', this.form.value.lieuNaissance);
    agentFormData.append('telephone1', this.form.value.telephone1);
    agentFormData.append('email', this.form.value.email);
    agentFormData.append('matricule', this.form.value.matricule);

    this.wizardService.createAgent(agentFormData).subscribe({
      next: (agent) => {
        this.agentId = agent.id;

        this.wizardService
          .createDossier({
            agentId: agent.id!,
            numeroDossier: this.form.value.numeroDossier,
            referenceDossier: this.form.value.referenceDossier,
            versionDossier: this.form.value.versionDossier,
            resumeProfessionnel: this.form.value.resumeProfessionnel,
            statut: 'BROUILLON',
          })
          .subscribe({
            next: (dossier) => {
              this.dossierId = dossier.id!;
              this.saveDetails(dossier.id!);
            },
          });
      },
    });
  }

  saveDetails(dossierId: number): void {
    this.wizardService.addLangues(dossierId, this.langues).subscribe();
    this.wizardService.addEtudes(dossierId, this.etudes).subscribe();
    this.wizardService.addCompetences(dossierId, this.competences).subscribe();
    this.wizardService.addFormations(dossierId, this.formations).subscribe();
    this.wizardService.addExperiences(dossierId, this.experiences).subscribe();

    this.wizardService.validerDossier(dossierId).subscribe({
      next: () => {
        alert('Dossier enregistré avec succès.');
      },
    });
  }

  @ViewChild('video') video?: ElementRef<HTMLVideoElement>;
  @ViewChild('canvas') canvas?: ElementRef<HTMLCanvasElement>;

  photoPreview: string | ArrayBuffer | null = null;
  photoFile?: File;
  cameraActive = false;
  stream?: MediaStream;

  ngOnDestroy(): void {
    this.closeCamera();
  }

  onPhotoSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (!input.files || input.files.length === 0) return;

    this.photoFile = input.files[0];

    const reader = new FileReader();
    reader.onload = () => (this.photoPreview = reader.result);
    reader.readAsDataURL(this.photoFile);
  }

  async openCamera(): Promise<void> {
    this.cameraActive = true;

    this.stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: false,
    });

    setTimeout(() => {
      if (this.video?.nativeElement && this.stream) {
        this.video.nativeElement.srcObject = this.stream;
      }
    });
  }

  capturePhoto(): void {
    if (!this.video || !this.canvas) return;

    const video = this.video.nativeElement;
    const canvas = this.canvas.nativeElement;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const context = canvas.getContext('2d');
    context?.drawImage(video, 0, 0, canvas.width, canvas.height);

    canvas.toBlob((blob) => {
      if (!blob) return;

      this.photoFile = new File([blob], 'photo-agent.png', {
        type: 'image/png',
      });

      this.photoPreview = canvas.toDataURL('image/png');
      this.closeCamera();
    }, 'image/png');
  }

  closeCamera(): void {
    this.cameraActive = false;

    if (this.stream) {
      this.stream.getTracks().forEach((track) => track.stop());
      this.stream = undefined;
    }
  }
}
