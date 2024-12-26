import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {IPoids} from "../../../shared/models/global.model";
import {UtilsService} from "../utils.service";
import {ToastService} from "../../../shared/services/toast.service";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {CreateCommuneComponent} from "../commune/create-commune/create-commune.component";
import {CreateWeightComponent} from "./create-weight/create-weight.component";

@Component({
  selector: 'app-poids',
  templateUrl: './poids.component.html',
  styleUrls: ['./poids.component.css']
})
export class PoidsComponent implements OnInit {

  poidsForm: FormGroup | any;
  handlerPoidSarch: FormGroup | any;

  weightData : IPoids[] = [];

  errorMessage: any;
  page: number = 1;
  pageSize: number = 5;

  constructor(private service : UtilsService,
              private toast:ToastService,
              private fb : FormBuilder,
              private dialog : MatDialog
              ) {
  }

  ngOnInit(): void {

    this.poidsForm = this.fb.group({
      poids : ["",Validators.required],
      unite : [""]
    });

    this.handlerPoidSarch = this.fb.group({
      keyword : [""]
    })

    this.getWeight()
  }

  getWeight(){
    this.service.getPoids().subscribe({
      next : (data) => {
        this.weightData = data;
      },
      error : (error) => {
        console.log(error.error.message);
      }
    })
  }

  dialogWeight(communeData? : any ){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "500px";
    dialogConfig.height =  "350px";
    dialogConfig.position = {top : '10%'};
    dialogConfig.role = "dialog";
    dialogConfig.data = {...communeData}

    const dialogRef = this.dialog.open(CreateWeightComponent , dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      this.getWeight()
    })
  }

  get poids(){
    return this.poidsForm.controls["poids"];
  }

}
