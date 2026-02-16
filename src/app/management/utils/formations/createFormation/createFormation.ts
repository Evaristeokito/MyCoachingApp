import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogContent } from '@angular/material/dialog';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';
import { CreateCompetence } from '../../competence/create-competence/create-competence';
import { UtilsService } from '../../utils.service';
import { IFormation } from 'src/app/shared/models/coach';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-create-formation',
  standalone: true,
  imports: [MatDialogContent,
    ReactiveFormsModule,
    NgIf],
  templateUrl: './createFormation.html',
  styleUrl: './createFormation.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateFormation implements OnInit {

  formationForm: FormGroup | any;
    formationDATA: IFormation[] = [];
    loading: boolean = false;
    errorMessage: String = '';
  
    constructor(
      private service: UtilsService,
      private fb: FormBuilder,
      private dialogRef: MatDialogRef<CreateCompetence>,
      private snackbarService: SnackbarService,
      @Inject(MAT_DIALOG_DATA) public data: any,
    ) {
      this.formationForm = this.fb.group({
        id: [data ? data.id : null],
        title: [data ? data.title : [Validators.required]],
        Ecole: [data ? data.Ecole : [Validators.required]],
        Faculty: [data ? data.Faculty : [Validators.required]],
        startDate: [data ? data.startDate : [Validators.required]],
        endDate : [data ? data.endDate : [Validators.required]],
        Options : [data ? data.Options : [Validators.required]]
      });
    }
  
    ngOnInit(): void {}
  
    getCompetences() {
      this.service.getFormations().subscribe({
        next:(data) => {
          this.formationDATA = data;
        },
        error : (err) => {
          console.log(err.message);
        }
      })
    }
  
    onSubmit() {
      this.loading = true;
      if (this.data.id) {
        if (this.formationForm.valid) {
          this.service
            .updateFormation(this.data.id, this.formationForm.value)
            .subscribe({
              next: (data) => {
                setTimeout(() => {
                  this.snackbarService.showSuccessMessage(
                    'Formation is updated successfully',
                  );
                  this.formationForm.reset();
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
        if (this.formationForm.valid) {
          this.service.createFormation(this.formationForm.value).subscribe({
            next: (data) => {
              setTimeout(() => {
                this.snackbarService.showSuccessMessage(
                  'Formation is created successfully',
                );
                this.formationForm.reset();
                this.dialogRef.close();
                this.formationForm.reset();
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
      return this.formationForm.controls['title'];
    }
  
    get ecole() {
      return this.formationForm.controls['ecole'];
    }
  
    get options() {
      return this.formationForm. controls['options'];
    }
 }
