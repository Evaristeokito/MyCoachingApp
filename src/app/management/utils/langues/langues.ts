import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ILangues } from 'src/app/shared/models/coach';
import { UtilsService } from '../utils.service';
import { ToastService } from 'src/app/shared/services/toast.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CreateLangue } from './createLangue/createLangue';
import { NgbPagination } from "@ng-bootstrap/ng-bootstrap";
import { NgFor, NgIf, SlicePipe } from '@angular/common';

@Component({
  selector: 'app-langues',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgbPagination,
    NgFor,
    NgIf,
    SlicePipe
],
  templateUrl: './langues.html',
  styleUrl: './langues.css',
})
export class Langues implements OnInit { 

  langueDATA : ILangues[] = [];
    
      errorMessage: String = '';
      handlerCompetenceSarch: FormGroup | any;
    
      pageSize: number = 5;
      page: number = 1;
    
      constructor(
        private service: UtilsService,
        private toast: ToastService,
        private fb: FormBuilder,
        private dialog : MatDialog
      ) {}
    
      ngOnInit() {
  
        this.getLangues();
  
         this.handlerCompetenceSarch = this.fb.group({
           keyword: ['', Validators.required],
         });  
      }
  
    
      dialogColors(colorsData? : any ){
        const dialogConfig = new MatDialogConfig();
        dialogConfig.width = "530px";
        dialogConfig.height =  "420px";
        dialogConfig.position = {top : '8%'};
        dialogConfig.role = "dialog";
        dialogConfig.data = {...colorsData}
    
        const dialogRef = this.dialog.open(CreateLangue,dialogConfig);
    
        dialogRef.afterClosed().subscribe(result => {
          this.getLangues();
        })
      }
    
      getLangues(){
        this.service.getLangues().subscribe({
          next : (data) => {
            this.langueDATA = data;
          },
          error : (error : any) => {
            console.log(error.error.message);
          }
        })
      }
  

}
