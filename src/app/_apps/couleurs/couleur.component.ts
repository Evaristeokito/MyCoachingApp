import {Component, OnInit} from '@angular/core';
import {catchError, Observable, throwError} from "rxjs";
import {Couleurs} from "../../models/coaching.model";
import {CouleurYeuxService} from "../../services/couleur-yeux.service";
import {ToastService} from "../../services/toast.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import Swal from "sweetalert2";


@Component({
  selector: 'app-couleur',
  templateUrl: './couleur.component.html',
  styleUrls: ['./couleur.component.css']
})
export class CouleurComponent implements OnInit{

  couleurForm: any;
  couleurDATA!: Observable<Array<Couleurs>>;
  errorMessage: String = "";
  handlerCouleurSarch: FormGroup | any;

  constructor(private couleurService : CouleurYeuxService,
              private toast : ToastService ,
              private fb : FormBuilder) {
  }
  ngOnInit(): void {

    this.couleurForm = this.fb.group({
      nom : ["", Validators.required],
      observation : [""]
    });

    this.handlerCouleurSarch = this.fb.group({
      keyword : ["",Validators.required]
    });

    this.onGetCouleurs()
  }

  onsaveFn() {
    if (this.couleurForm.valid){
      this.couleurService.createCouleurs(this.couleurForm.value).subscribe({
        next : (data) => {
          this.toast.toastSuccess("success", "la couleur est ajoutée avec success");
          this.onGetCouleurs();
          this.couleurForm.reset();
        },
        error : (err) => {
          console.log(err);
        }
      })
    }
  }

  onGetCouleurs(){
    this.couleurDATA = this.couleurService.getCouleursYeux().pipe(
      catchError( err => {
        this.errorMessage = err.message();
        return throwError(err.message());
      })
    )
  }

  onGetCouleur(id : Number) {
    this.couleurService.getOneCouleur(id).subscribe({
      next : (data) => {
        this.couleurForm.patchValue({
          nom : data.nom,
          observation : data.observation
        })
      },
      error : (err) => {
        console.log(err);
      }
    })
  }
  onDeleteCouleur(id : any) {

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
        this.couleurService.deleteCouleur(id).subscribe({
          next : () => {
            this.toast.toastSuccess("Deleted !","Creneau is deleted successfully")
            this.onGetCouleurs();
          },
          error : (err) => {
            this.toast.toastFailure("Error", "Erreur lors de la suppression");
          }
        })
      }
    })
  }

  get nom(){
    return this.couleurForm.controls["nom"];
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
