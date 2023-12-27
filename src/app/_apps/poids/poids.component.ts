import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PoidService} from "../../services/poid.service";
import {ToastService} from "../../services/toast.service";
import {catchError, Observable, throwError} from "rxjs";
import {Poids} from "../../models/coaching.model";

@Component({
  selector: 'app-poids',
  templateUrl: './poids.component.html',
  styleUrls: ['./poids.component.css']
})
export class PoidsComponent implements OnInit {

  poidsForm: FormGroup | any;
  handlerPoidSarch: FormGroup | any;
  poidDATA!: Observable<Array<Poids>>;
  errorMessage: any;

  constructor(private servicePoids : PoidService,
              private toast:ToastService,
              private fb : FormBuilder
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

    this. onGetPoids();

  }


  onsaveFn() {

  }

  onGetPoids(){
   this.poidDATA = this.servicePoids.getPoids().pipe(
       catchError(err => {
         this.errorMessage = err.message();
         return throwError(err);
       })
   )
  }

  get poids(){
    return this.poidsForm.controls["poids"];
  }


  onGetPoid(id: Number) {

  }

  onDeletePoid(id: Number) {

  }
}
