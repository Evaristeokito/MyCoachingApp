import { Component, OnInit } from '@angular/core';
import {IColors} from "../../../shared/models/global.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UtilsService} from "../utils.service";
import {ToastService} from "../../../shared/services/toast.service";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {CreateColorEyesComponent} from "./create-color-eyes/create-color-eyes.component";

@Component({
  selector: 'app-couleur',
  templateUrl: './couleur.component.html',
  styleUrls: ['./couleur.component.css'],
})
export class CouleurComponent implements OnInit {

  couleurForm: any;
  colorsEyes : IColors[] = [];

  errorMessage: String = '';
  handlerCouleurSarch: FormGroup | any;

  pageSize: number = 5;
  page: number = 1;

  constructor(
    private service: UtilsService,
    private toast: ToastService,
    private fb: FormBuilder,
    private dialog : MatDialog
  ) {}

  ngOnInit(): void {
    this.couleurForm = this.fb.group({
      nom: ['', Validators.required],
      observation: [''],
    });

    this.handlerCouleurSarch = this.fb.group({
      keyword: ['', Validators.required],
    });
    this.getColorsEyes();
  }

  onsaveFn() {
    if (this.couleurForm.valid) {
      this.service.createCouleurs(this.couleurForm.value).subscribe({
        next: (data) => {
          this.toast.toastSuccess(
            'success',
            'la couleur est ajoutée avec success'
          );
          this.couleurForm.reset();
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }

  dialogColors(colorsData? : any ){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "500px";
    dialogConfig.height =  "350px";
    dialogConfig.position = {top : '10%'};
    dialogConfig.role = "dialog";
    dialogConfig.data = {...colorsData}

    const dialogRef = this.dialog.open(CreateColorEyesComponent , dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      this.getColorsEyes();
    })
  }

  /*onGetCouleurs() {
    this.couleurDATA = this.service.getCouleursYeux().pipe(
      catchError((err) => {
        this.errorMessage = err.message();
        return throwError(err.message());
      })
    );
  }
*/
  getColorsEyes(){
    this.service.getCouleursYeux().subscribe({
      next : (data) => {
        this.colorsEyes = data;
      },
      error : (error : any) => {
        console.log(error.error.message);
      }
    })
  }

 /* onGetCouleur(id: Number) {
    this.service.getOneCouleur(id).subscribe({
      next: (data) => {
        this.couleurForm.patchValue({
          nom: data.name,
          observation: data.observation,
        });
      },
      error: (err) => {
        console.log(err);
      },
    });
  }*/

 /* onDeleteCouleur(id: any) {
    this.swalDeleted
      .fire({
        title: "<h3 class='swal-title'> Confirmez-vous la suppression ? </h3>",
        html: `<p class='swal-content'>L\'action de suppression est irréversible</p>`,
        icon: 'question',
        showCancelButton: true,
        cancelButtonText: 'Annuler',
        confirmButtonText: 'Supprimer',
        iconColor: '#C62828',
        reverseButtons: true,
        width: '25%',
        showClass: {
          popup: 'animate__animated animate__fadeInRight',
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutLeft',
        },
      })
      .then((result) => {
        if (result.isConfirmed) {
          this.service.deleteCouleur(id).subscribe({
            next: () => {
              this.toast.toastSuccess(
                'Deleted !',
                'Creneau is deleted successfully'
              );
              this.onGetCouleurs();
            },
            error: (err) => {
              this.toast.toastFailure('Error', 'Erreur lors de la suppression');
            },
          });
        }
      });
  }*/

  get nom() {
    return this.couleurForm.controls['nom'];
  }

}
