import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {catchError, Observable, throwError} from "rxjs";
import {ITaille} from "../../../shared/models/global.model";
import {UtilsService} from "../utils.service";
import {ToastService} from "../../../shared/services/toast.service";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {CreateSizeComponent} from "./create-size/create-size.component";

@Component({
  selector: 'app-taille',
  templateUrl: './taille.component.html',
  styleUrls: ['./taille.component.css'],
})
export class TailleComponent  {
  tailleForm: FormGroup | any;
  handlerTailleSarch: FormGroup | any;
  tailleDATA!: Observable<Array<ITaille>>;

  sizeData : ITaille [] = [];
  errorMessage: String = '';
  page: number = 1;
  pageSize: number = 5;

  constructor(
    private service: UtilsService,
    private toast: ToastService,
    private fb: FormBuilder,
    private dialog : MatDialog
  ) {}

  ngOnInit(): void {
    this.tailleForm = this.fb.group({
      taille: ['', Validators.required],
      unite: [''],
    });

    this.handlerTailleSarch = this.fb.group({
      keyword: [''],
    });

    this.onGetData();
    this.getSizes();
  }

  onGetData() {
    this.tailleDATA = this.service.getTailles().pipe(
      catchError((err) => {
        this.errorMessage = err.message();
        return throwError(err);
      })
    );
  }

  getSizes() {
    this.service.getTailles().subscribe({
      next : (data) => {
        this.sizeData = data;
      },
      error : (error) => {
        console.log(error.error.message)
      }
    })
  }

  onsaveFn() {}

  onGetTaille(id: Number) {
    this.service.getTaille(id).subscribe({
      next: (data) => {
        this.tailleForm.patchValue({
          taille: data.taille,
          unite: data.unite,
        });
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  dialogSize(communeData? : any ){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "500px";
    dialogConfig.height =  "350px";
    dialogConfig.position = {top : '10%'};
    dialogConfig.role = "dialog";
    dialogConfig.data = {...communeData}

    const dialogRef = this.dialog.open(CreateSizeComponent,dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      this.getSizes();
    })
  }

  onDeleteTaille(id: Number) {}

  get taille() {
    return this.tailleForm.controls['taille'];
  }
}
