import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {catchError, Observable, throwError} from "rxjs";
import {Commune} from "../../models/coaching.model";
import {CommuneService} from "../../services/commune.service";
import {ToastService} from "../../services/toast.service";

@Component({
  selector: 'app-commune',
  templateUrl: './commune.component.html',
  styleUrls: ['./commune.component.css']
})
export class CommuneComponent implements OnInit{

  communeForm: FormGroup | any;
  handlerCommuneSarch : FormGroup | any ;
  communeDATA: Observable<Array<Commune>> | any;
  errorMessage: String = "";

  constructor(private communeService : CommuneService,
              private fb:FormBuilder,
              private toast : ToastService
              ) {
  }


  ngOnInit(): void {

    this.communeForm = this.fb.group({
      commune : ["",Validators.required],
      district : ["",Validators.required]
    });

    this.handlerCommuneSarch = this.fb.group({
      keyword : ["",Validators.required]
    })

    this.onGetCommunes();
  }


  onsaveFn() {
    if (this.communeForm.valid){
      this.communeService.createCommune(this.communeForm.value).subscribe({
        next : (data) => {
          this.toast.toastSuccess("Success","La commune est ajouté avec success");
          this.onGetCommunes();
          this.communeForm.reset()
        },
        error : (err) => {
          this.toast.toastFailure("erreur","Cette commune existe déjà");
        }
      })
    }
  }


  onGetCommunes(){
    this.communeDATA = this.communeService.getCommunes().pipe(
      catchError(err => {
        this.errorMessage = err.message();
        return throwError(err);
      })
    )
  }
  onGetCommune(id:number) {
    this.communeService.getOneCommune(id).subscribe({
      next : data => {
        this.communeForm.patchValue({
           commune : data.commune,
           district : data.district
        })
      }
    })
  }

  onDeleteCommune(id:number) {
    this.communeService.deleteCommune(id).subscribe({
      next: (resp => {
        this.toast.toastSuccess("delete","data is deleted successfully");
      })
    })
  }


  get commune(){
    return this.communeForm.controls["commune"];
  }

  get district(){
    return this.communeForm.controls["district"];
  }

}
