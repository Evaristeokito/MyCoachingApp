import {
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IExperience } from 'src/app/shared/models/agents';
import { UtilsService } from '../../utils.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogContent } from '@angular/material/dialog';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-create-experience',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
    MatDialogContent
],
  templateUrl: './createExperience.html',
  styleUrl: './createExperience.css',
})
export class CreateExperience implements OnInit {

  experienceForm: FormGroup | any;
  experienceDATA: IExperience[] = [];
  loading: boolean = false;
  errorMessage: String = '';

  constructor(
    private service: UtilsService,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<CreateExperience>,
    private snackbarService: SnackbarService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.experienceForm = this.fb.group({
      id: [data ? data.id : null],
      title: [data ? data.title : [Validators.required]],
      company: [data ? data.company : [Validators.required]],
      startdate: [data ? data.Faculty : [Validators.required]],
      enddate: [data ? data.startDate : [Validators.required]],
      description: [data ? data.endDate : [Validators.required]],
    });
  }

  ngOnInit(): void {}

  getExperiences() {
    this.service.getExperiences().subscribe({
      next: (data) => {
        this.experienceDATA = data;
      },
      error: (err) => {
        console.log(err.message);
      },
    });
  }

  onSubmit() {
    this.loading = true;
    if (this.data.id) {
      if (this.experienceForm.valid) {
        this.service
          .updateExperience(this.data.id, this.experienceForm.value)
          .subscribe({
            next: (data) => {
              setTimeout(() => {
                this.snackbarService.showSuccessMessage(
                  'Experience is updated successfully',
                );
                this.experienceForm.reset();
                this.dialogRef.close();
                this.loading = false;
                this.dialogRef.afterClosed().subscribe((res) => {
                  if (res) {
                    this.getExperiences();
                  }
                });
              }, 2000);
            },
            error: (err) => {
              console.log(err.error.message);
            },
          });
      }
    } else {
      if (this.experienceForm.valid) {
        this.service.createExperience(this.experienceForm.value).subscribe({
          next: (data) => {
            setTimeout(() => {
              this.snackbarService.showSuccessMessage(
                'Experience is created successfully',
              );
              this.experienceForm.reset();
              this.dialogRef.close();
              this.experienceForm.reset();
            }, 2000);
          },
          error: (err) => {
            console.log(err.error.message);
          },
        });
      }
    }
  }

  get title() {
    return this.experienceForm.controls['title'];
  }

  get ecole() {
    return this.experienceForm.controls['company'];
  }

  get options() {
    return this.experienceForm.controls['description'];
  }
}
