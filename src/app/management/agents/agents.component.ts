import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AgentService } from './agents.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-coach',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.css'],
})
export class AgentsComponent implements OnInit {
  @ViewChild('video') video?: ElementRef<HTMLVideoElement>;
  @ViewChild('canvas') canvas?: ElementRef<HTMLCanvasElement>;

  form!: FormGroup;

  // nationalites: SelectOption[] = [];
  // districts: SelectOption[] = [];
  // communes: SelectOption[] = [];

  photoPreview: string | ArrayBuffer | null = null;
  photoFile?: File;
  cameraActive = false;
  stream?: MediaStream;

  isSubmitting = false;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private agentService: AgentService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      nom: ['', Validators.required],
      postNom: ['', Validators.required],
      prenom: ['', Validators.required],
      lieuNaissance: [''],
      dateNaissance: ['', Validators.required],
      sexe: ['', Validators.required],
      etatCivil: ['', Validators.required],
      nationaliteId: ['', Validators.required],
      telephone1: ['', Validators.required],
      telephone2: [''],
      email: ['', [Validators.email]],
      matricule: [''],
      fonction: [''],
      service: [''],
      attachement: [''],
      districtId: ['', Validators.required],
      communeId: ['', Validators.required],
      quartier: [''],
      avenue: [''],
    });

    this.loadInitialData();

    // this.form.get('districtId')?.valueChanges.subscribe((districtId) => {
    //   if (districtId) {
    //     this.agentService.getCommunesByDistrict(districtId).subscribe({
    //       next: (data) => (this.communes = data),
    //     });
    //   } else {
    //     this.communes = [];
    //   }
    // });
  }

  loadInitialData(): void {
    // this.agentService.getNationalites().subscribe({
    //   next: (data) => (this.nationalites = data),
    // });

    // this.agentService.getDistricts().subscribe({
    //   next: (data) => (this.districts = data),
    // });
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

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const formData = new FormData();

    Object.keys(this.form.value).forEach((key) => {
      formData.append(key, this.form.value[key] ?? '');
    });

    if (this.photoFile) {
      formData.append('photo', this.photoFile);
    }

    this.isSubmitting = true;
    this.errorMessage = '';

    this.agentService.createAgent(formData).subscribe({
      next: () => {
        this.isSubmitting = false;
        this.router.navigate(['/admin/agents']);
      },
      error: () => {
        this.errorMessage = 'Erreur lors de l’enregistrement de l’agent.';
        this.isSubmitting = false;
      },
    });
  }

  isInvalid(field: string): boolean {
    const control = this.form.get(field);
    return !!control && control.invalid && control.touched;
  }

  ngOnDestroy(): void {
    this.closeCamera();
  }
}
