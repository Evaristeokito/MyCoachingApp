import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {catchError, Observable, throwError} from "rxjs";
import Swal from "sweetalert2";
import {UtilsService} from '../utils.service';
import {ToastService} from 'src/app/shared/services/toast.service';
import {INationalite} from 'src/app/shared/models/global.model';


@Component({
  selector: 'app-adresse',
  templateUrl: './nationalite.component.html',
  styleUrls: ['./nationalite.component.css']
})
export class NationaliteComponent implements OnInit {


  nationaliteForm: FormGroup | any;
  searchNationalite: FormGroup | any;
  nationaliteDATA !: Observable<Array<INationalite>>;
  errorMessage: String = "";


  constructor(
  //  private service: UtilsService,
    private fb: FormBuilder,
    private toast: ToastService
  ) {
  }

  ngOnInit(): void {

    this.nationaliteForm = this.fb.group({
      nationalite: ["", [Validators.required]],
      libelle: [""],
    });

    this.searchNationalite = this.fb.group({
      keyword: [""],
    })

  //  this.onGetNationalites();
  }


 /* onsaveFn() {
    if (this.nationaliteForm.valid) {
      this.service.createNationalite(this.nationaliteForm.value).subscribe({
        next: (data) => {
          this.toast.toastSuccess("success", "la nationalié a été ajouté avec success");
        },
        error: err => {
          console.log(err)
        }
      })
    }
  }*/

 /* onGetNationalites() {
    this.nationaliteDATA = this.service.getNationalites().pipe(
      catchError(err => {
        this.errorMessage = err.message();
        return throwError(err);
      })
    )
  }*/

/*  onGetNationalite(id: any) {
    this.service.getOneNationalite(id).subscribe({
      next: (data) => {
        this.nationaliteForm.patchValue({
          nationalite: data.nationalite,
          libelle: data.libelle
        })
      },
      error: (err) => {
        console.log(err)
      },
    })
  }*/

 /* onDeleteNationalite(id: any) {

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
        this.service.deleteNationalite(id).subscribe({
          next: () => {
            this.toast.toastSuccess(
              'Deleted !',
              'Creneau is deleted successfully'
            );
            this.onGetNationalites();
          },
          error: (err) => {
            this.toast.toastFailure('Error', 'Erreur lors de la suppression');
          },
        });
      }
    })
  }*/

  get nationalite() {
    return this.nationaliteForm.controls["nationalite"];
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
}
