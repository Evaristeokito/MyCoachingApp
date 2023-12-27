import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { CreneauCoachService } from 'src/app/services/creneau-coach.service';
import {CreneaucoachDTO} from "../../models/coaching.model";
import {catchError, Observable, throwError} from "rxjs";
import {ToastService} from "../../services/toast.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-creneau-coach',
  templateUrl: './creneau.component.html',
  styleUrls: ['./creneau.component.css']
})
export class CreneauComponent implements OnInit {

  constructor(private fb: FormBuilder,
              private servicecreneau : CreneauCoachService,
              private toastService : ToastService
  ){}

  CreneauForm : FormGroup | any ;
  searchCreneauHandler : FormGroup | any;

  CreneauData! : Observable<Array<CreneaucoachDTO>>;
  errorMessage! : String ;


  Path = {
    logo: "assets/img/logo.png",
    user : "assets/img/user.jpg"
  }

  ngOnInit(): void {

    this.Path;

    this.searchCreneauHandler = this.fb.group({
      search : ['']
    })

    this.CreneauForm = this.fb.group({
      heureDebut : ['',[Validators.required]],
      heureFin : ['', [Validators.required]],
      joursDisponible : ['',[Validators.required]],
      etat : ['']
    });

    this.onGetData();
  }

  onGetData(){
    this.CreneauData = this.servicecreneau.getCreneauCoach().pipe(
      catchError(err => {
        this.errorMessage = err.message();
        return throwError(err);
      })
    )
  }

  onsaveFn(){
     if (this.CreneauForm.valid){
        this.servicecreneau.createCoachCreneau(this.CreneauForm.value).subscribe({
          next : (data) => {
            this.toastService.toastSuccess("Creneau created","creneau is created successfully");
            this.onGetData();
            this.CreneauForm.reset();
          },
          error : (err) => {
            this.toastService.toastFailure("Pas de doublons","creneau existe déjà");
            this.CreneauForm.reset();
          }
        })
    }
  }

  onClearForms(){

  }

  onGetCreneau(id : any){
    this.servicecreneau.getOneCreneau(id).subscribe(data => {
      this.CreneauForm.patchValue({
        heureDebut : data.heureDebut,
        heureFin : data.heureFin,
        joursDisponible : data.joursDisponible,
        etat : data.etat[0]
      })
    })
  }

onDeleteCreneau(id :any){

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
      this.servicecreneau.deleteCreneau(id).subscribe({
        next : () => {
          this.toastService.toastSuccess("Deleted !","Creneau is deleted successfully")
          this.onGetData();
        },
        error : (err) => {
          this.toastService.toastFailure("Error", "Erreur lors de la suppression");
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

  searchHandler(){
    return null ;
  }

  get heureDebut(){
    return this.CreneauForm.controls["heureDebut"];
  }

  get heureFin() {
    return this.CreneauForm.controls["heureFin"];
  }

  get joursDisponible(){
    return this.CreneauForm.controls["joursDisponible"];
  }

  get etat(){
    return this.CreneauForm.controls["etat"];
  }

}
