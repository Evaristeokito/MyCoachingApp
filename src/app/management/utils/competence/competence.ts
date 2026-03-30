import { Component, type OnInit } from '@angular/core';
import { NgbPagination } from "@ng-bootstrap/ng-bootstrap";
import { UtilsService } from '../utils.service';
import { ToastService } from 'src/app/shared/services/toast.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NgFor, NgIf, SlicePipe } from '@angular/common';
import { CreateCompetence } from './create-competence/create-competence';
import { ICompetences } from 'src/app/shared/models/agents';

@Component({
  selector: 'app-competence',
  standalone: true,
  imports: [NgbPagination, NgIf, NgFor, SlicePipe],
  templateUrl: './competence.html',
  styleUrl: './competence.css',
})
export class Competence implements OnInit {

  competenceDATA: ICompetences[] = [];

  errorMessage: String = '';
  handlerCompetenceSarch: FormGroup | any;

  pageSize: number = 5;
  page: number = 1;

  constructor(
    private service: UtilsService,
    private toast: ToastService,
    private fb: FormBuilder,
    private dialog: MatDialog,
  ) {}

  ngOnInit() {
    this.getCompetences();

    this.handlerCompetenceSarch = this.fb.group({
      keyword: ['', Validators.required],
    });
  }

  dialogColors(colorsData?: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '500px';
    dialogConfig.height = '400px';
    dialogConfig.position = { top: '8%' };
    dialogConfig.role = 'dialog';
    dialogConfig.data = { ...colorsData };

    const dialogRef = this.dialog.open(CreateCompetence, dialogConfig);

    dialogRef.afterClosed().subscribe((result) => {
      this.getCompetences();
    });
  }

  getCompetences() {
    this.service.getCompetences().subscribe({
      next: (data) => {
        this.competenceDATA = data;
      },
      error: (error: any) => {
        console.log(error.error.message);
      },
    });
  }
}
