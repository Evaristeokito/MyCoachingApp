import {Component, OnInit} from '@angular/core';
import {CiviliteService} from "../../services/civilite.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {catchError, Observable, throwError} from "rxjs";
import {Civilite} from "../../models/coaching.model";
import {ToastService} from "../../services/toast.service";
import Swal from "sweetalert2";

// @ts-ignore
@Component({
  selector: 'app-creneau-sportif',
  templateUrl: './civilite.component.html',
  styleUrls: ['./civilite.component.css']
})
export class CiviliteComponent implements OnInit{

  constructor(
    private civiliteService : CiviliteService,
    private fb :FormBuilder,
    private toast : ToastService
  ) {
  }

  civiliteForm : FormGroup | any;
  civiliteDATA! : Observable<Array<Civilite>>;
  errorMessage : String = "";

  ngOnInit(): void {

    this.civiliteForm = this.fb.group({
      nom : ["", [Validators.required]],
      observation : [""]
    });

    this.getAllCiviites();

  }

  getAllCiviites(){
    this.civiliteDATA = this.civiliteService.getCivilites().pipe(
      catchError(err => {
        this.errorMessage = err.message();
        return throwError(err);
      })
    )
  }

  onsaveFn() {

    this.civiliteService.createCivilite(this.civiliteForm.value).subscribe({
      next : (data) => {
        this.toast.toastSuccess("Success", "La civilité à été enregistré avec success");
        this.getAllCiviites();
        this.civiliteForm.reset()
      },
      error : (error) => {
        console.log(error);
      }
    })

  }

  onDeleteCivilite(id :any){

    this.swalDeleted.fire({
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
    }).then((result) => {
      if (result.isConfirmed) {
        this.civiliteService.deleteCivilite(id).subscribe({
          next : () => {
            this.toast.toastSuccess("Deleted !","Creneau is deleted successfully")
            this.getAllCiviites();
          },
          error : (err) => {
            this.toast.toastFailure("Error", "Erreur lors de la suppression");
          }
        })
      }
    })
  }

  swalDeleted = Swal.mixin({
    customClass: {
      confirmButton: 'btn-swal-success',
      cancelButton: 'btn-swal-cancel',
      popup: 'swal-heigh-dialog',
      icon: 'swal-icon',
    },
    buttonsStyling: false
  })

  get nom() {
    return this.civiliteForm.controls["nom"];
  }


  onGetCivilite(id: any) {
    this.civiliteService.getOneCivilite(id).subscribe({
      next : (data) => {
        this.civiliteForm.patchValue({
          nom : data.nom,
          observation : data.observation
        })
      },
      error : (err) => {
        console.log(err);
      }
    })
  }

}
