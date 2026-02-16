import {Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IExperience } from 'src/app/shared/models/coach';
import { UtilsService } from '../utils.service';
import { ToastService } from 'src/app/shared/services/toast.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CreateExperience } from './createExperience/createExperience';
import { NgFor, NgIf, SlicePipe } from '@angular/common';
import { NgbPagination } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    SlicePipe,
    NgbPagination
],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience implements OnInit {

     experienceDATA: IExperience[] = [];

     experienceDATA2 : IExperience | any ;

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
       this.getFormations();
     }


     dialogColors(colorsData?: any) {
       const dialogConfig = new MatDialogConfig();
       dialogConfig.width = '550px';
       dialogConfig.height = '600px';
       dialogConfig.position = { top: '5%' };
       dialogConfig.role = 'dialog';
       dialogConfig.data = { ...colorsData };

       const dialogRef = this.dialog.open(CreateExperience, dialogConfig);

       dialogRef.afterClosed().subscribe((result) => {
         this.getFormations();
       });
     }

     getFormations() {
       this.service.getExperiences().subscribe({
         next: (data) => {
           this.experienceDATA = data;
         },
         error: (error: any) => {
           console.log(error.error.message);
         },
       });
     }

 }
