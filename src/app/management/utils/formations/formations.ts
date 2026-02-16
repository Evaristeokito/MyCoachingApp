import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IFormation } from 'src/app/shared/models/coach';
import { UtilsService } from '../utils.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ToastService } from 'src/app/shared/services/toast.service';
import { NgFor, NgIf, SlicePipe } from '@angular/common';
import { NgbPagination } from '@ng-bootstrap/ng-bootstrap';
import { CreateFormation } from './createFormation/createFormation';

@Component({
  selector: 'app-formations',
  standalone: true,
  imports: [NgFor, NgIf, SlicePipe, NgbPagination],
  templateUrl: './formations.html',
  styleUrl: './formations.css',
})
export class Formations implements OnInit {
  formationForm: any;
  formationDATA: IFormation[] = [];

  errorMessage: String = '';
  handlerFormationSarch: FormGroup | any;

  pageSize: number = 5;
  page: number = 1;

  constructor(
    private service: UtilsService,
    private toast: ToastService,
    private fb: FormBuilder,
    private dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.formationForm = this.fb.group({
      nom: ['', Validators.required],
      observation: [''],
    });

    this.handlerFormationSarch = this.fb.group({
      keyword: ['', Validators.required],
    });
    this.getFormations();
  }

  onsaveFn() {
    if (this.formationForm.valid) {
      this.service.createFormation(this.formationForm.value).subscribe({
        next: (data) => {
          this.toast.toastSuccess(
            'success',
            'la couleur est ajoutée avec success',
          );
          this.formationForm.reset();
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }

  dialogColors(colorsData?: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '550px';
    dialogConfig.height = '600px';
    dialogConfig.position = { top: '5%' };
    dialogConfig.role = 'dialog';
    dialogConfig.data = { ...colorsData };

    const dialogRef = this.dialog.open(CreateFormation, dialogConfig);

    dialogRef.afterClosed().subscribe((result) => {
      this.getFormations();
    });
  }

  getFormations() {
    this.service.getFormations().subscribe({
      next: (data) => {
        this.formationDATA = data;
      },
      error: (error: any) => {
        console.log(error.error.message);
      },
    });
  }

  get name() {
    return this.formationForm.controls['name'];
  }
}
