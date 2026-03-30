import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  type OnInit,
} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UtilsService } from '../../utils.service';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogContent,
} from '@angular/material/dialog';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';
import { NgIf } from '@angular/common';
import { ICompetences } from 'src/app/shared/models/agents';


@Component({
  selector: 'app-create-competence',
  standalone: true,
  imports: [MatDialogContent, NgIf , ReactiveFormsModule],
  templateUrl: './create-competence.html',
  styleUrl: './create-competence.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateCompetence implements OnInit {

  competenceForm: FormGroup | any;
  competenceDATA: ICompetences[] = [];
  loading: boolean = false;
  errorMessage: String = '';

  constructor(
    private service: UtilsService,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<CreateCompetence>,
    private snackbarService: SnackbarService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.competenceForm = this.fb.group({
      id: [data ? data.id : null],
      name: [data ? data.name : [Validators.required]],
      level : [data ? data.level : [Validators.required]],
      description: [data ? data.description : [Validators.required]],
    });
  }

  ngOnInit(): void {}

  getCompetences() {
    this.service.getCompetences().subscribe({
      next:(data) => {
        this.competenceDATA = data;
      },
      error : (err) => {
        console.log(err.message);
      }
    })
  }

  onSubmit() {
    this.loading = true;
    if (this.data.id) {
      if (this.competenceForm.valid) {
        this.service
          .updateCompetence(this.data.id, this.competenceForm.value)
          .subscribe({
            next: (data) => {
              setTimeout(() => {
                this.snackbarService.showSuccessMessage(
                  'Competence is updated successfully',
                );
                this.competenceForm.reset();
                this.dialogRef.close();
                this.loading = false;
                this.dialogRef.afterClosed().subscribe((res) => {
                  if (res) {
                    this.getCompetences();
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
      if (this.competenceForm.valid) {
        this.service.createCompetences(this.competenceForm.value).subscribe({
          next: (data) => {
            setTimeout(() => {
              this.snackbarService.showSuccessMessage(
                'Competence is created successfully',
              );
              this.competenceForm.reset();
              this.dialogRef.close();
              this.competenceForm.reset();
            }, 2000);
          },
          error: (err) => {
            console.log(err.error.message);
          },
        });
      }
    }
  }

  get name() {
    return this.competenceForm.controls['name'];
  }

  get observation() {
    return this.competenceForm.controls['observation'];
  }

  get level() {
    return this.competenceForm. controls['level'];
  }
}
