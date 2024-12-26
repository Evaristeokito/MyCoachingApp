import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {catchError, Observable, throwError} from "rxjs";
import { UtilsService } from '../utils.service';
import { ICommune } from 'src/app/shared/models/commune';
import { ToastService } from 'src/app/shared/services/toast.service';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {CreateCommuneComponent} from "./create-commune/create-commune.component";


@Component({
  selector: 'app-commune',
  templateUrl: './commune.component.html',
  styleUrls: ['./commune.component.css']
})
export class CommuneComponent implements OnInit{

  communeForm: FormGroup | any;
  handlerCommuneSarch : FormGroup | any ;
  communeArray : ICommune[] = [];

  page = 0;
  pageSize = 10 ;

  errorMessage: String = "";

  constructor(private service : UtilsService,
              private fb:FormBuilder,
              private toast : ToastService,
              private dialog : MatDialog
              ) {
  }


  ngOnInit(): void {

    this.communeForm = this.fb.group({
      commune : ["",Validators.required],
      district : ["",Validators.required]
    });

    this.handlerCommuneSarch = this.fb.group({
      keyword : ["",Validators.required]
    })

    this.getCommunes();
  }


  getCommunes(){
    this.service.getCommunes().subscribe({
      next : (data) => {
        this.communeArray= data;
      },
      error : (error) => {
        console.log(error.error.message);
      }
    })
  }

  dialogCommune(communeData? : any ){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "500px";
    dialogConfig.height =  "350px";
    dialogConfig.position = {top : '10%'};
    dialogConfig.role = "dialog";
    dialogConfig.data = {...communeData}

    const dialogRef = this.dialog.open(CreateCommuneComponent , dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      this.getCommunes()
    })
  }


  get commune(){
    return this.communeForm.controls["commune"];
  }

  get district(){
    return this.communeForm.controls["district"];
  }

}
