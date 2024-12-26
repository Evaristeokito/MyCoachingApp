import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {catchError, Observable, throwError} from "rxjs";
import Swal from "sweetalert2";
import { ICivilite } from 'src/app/shared/models/global.model';
import { ToastService } from 'src/app/shared/services/toast.service';
import {CiviliteService} from "./civilite.service";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {CreateCivilityComponent} from "./create-civility/create-civility.component";
import {DeleteDataComponent} from "../../../shared/components/delete-data/delete-data.component";

@Component({
  selector: 'app-civility',
  templateUrl: './civilite.component.html',
  styleUrls: ['./civilite.component.css'],
})
export class CiviliteComponent implements OnInit {

  constructor(
    private service : CiviliteService,
    private fb: FormBuilder,
    private toaster : ToastService,
    private dialog : MatDialog
  ) {}


  civilityDATA!: Observable<Array<ICivilite>>;
  civilityArray : ICivilite[] = [];

  errorMessage: String = '';
  filteredData : any;

  searchText: string = '';
  page = 1;
  pageSize = 5;

  ngOnInit(): void {
    this.getCivilities();
  }

  getAllCiviites() {
    this.civilityDATA = this.service.getCivilities().pipe(
      catchError((err) => {
        this.errorMessage = err.message();
        return throwError(err);
      })
    );
  }

  getCivilities() {
    this.service.getCivilities().subscribe({
      next : (data) => {
        this.civilityArray = data;
      },
      error : err => {
        console.log(err.error.message);
      }
    })
  }

  filterTable() {}

  dialogCivility(civilityData? : any ){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "500px";
    dialogConfig.height =  "350px";
    dialogConfig.position = {top : '10%'};
    dialogConfig.role = "dialog";
    dialogConfig.data = {...civilityData}

   const dialogRef = this.dialog.open(CreateCivilityComponent , dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      this.getCivilities();
    })
  }

  openDeleteDialog(civility : any): void {
    const dialogRef = this.dialog.open(DeleteDataComponent, {
      data: { message: 'Are you sure you want to delete this item?' }
    })
      dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.service.deleteCivility(civility).subscribe({
          next: () => {
            this.toaster.toastSuccess (
              'Deleted !',
              'Creneau is deleted successfully'
            );
            this.getAllCiviites();
          },
          error: (err) => {
            this.toaster.toastFailure('Error', 'Erreur lors de la suppression');
          },
        })
      } else {
        console.log('Delete action canceled');
      }
    });
  }

}
