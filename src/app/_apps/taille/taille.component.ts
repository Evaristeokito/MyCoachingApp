import {Component, OnInit} from '@angular/core';
import {TailleService} from "../../services/taille.service";
import {ToastService} from "../../services/toast.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {catchError, Observable, throwError} from "rxjs";
import {Taille} from "../../models/coaching.model";


@Component({
  selector: 'app-taille',
  templateUrl: './taille.component.html',
  styleUrls: ['./taille.component.css']
})
export class TailleComponent implements OnInit{

    tailleForm: FormGroup | any ;
    handlerTailleSarch: FormGroup | any;
    tailleDATA!: Observable<Array<Taille>> ;
    errorMessage: String = "";

    constructor(private tailleService : TailleService, private toast : ToastService, private fb : FormBuilder) {
    }

    ngOnInit(): void {

        this.tailleForm = this.fb.group({
            taille : ["",Validators.required],
            unite : [""]
        })

        this.handlerTailleSarch = this.fb.group({
            keyword : [""]
        })

        this.onGetData();
    }

    onGetData(){
        this.tailleDATA = this.tailleService.getTailles().pipe(
            catchError(err => {
                this.errorMessage = err.message();
               return  throwError(err)
            })
        )
    }

    onsaveFn() {

    }

    onGetTaille(id : Number) {
      this.tailleService.getOneTaille(id).subscribe({
          next : (data) => {
              this.tailleForm.patchValue({
                  taille : data.taille,
                  unite : data.unite
              })
          },
          error : (error => {
              console.log(error)
          })
      })
    }

    onDeleteTaille(id : Number) {

    }

    get taille(){
        return this.tailleForm.controls["taille"];
    }


}
