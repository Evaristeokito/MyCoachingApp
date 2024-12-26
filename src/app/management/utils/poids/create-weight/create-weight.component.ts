import {Component, Inject, OnInit} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import {NgIf} from "@angular/common";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {UtilsService} from "../../utils.service";
import {ToastService} from "../../../../shared/services/toast.service";
import {SnackbarService} from "../../../../shared/services/snackbar.service";
import {IPoids} from "../../../../shared/models/global.model";

@Component({
  selector: 'app-create-weight',
  standalone: true,
  imports: [
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle,
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './create-weight.component.html',
  styleUrl: './create-weight.component.css'
})
export class CreateWeightComponent implements OnInit {

  weightForm: FormGroup | any;
  loading : boolean = false ;
  errorMessage: String = "";
  weightData : IPoids[] = [];

  constructor(private service : UtilsService,
              private fb:FormBuilder,
              private toast : ToastService,

              private dialogRef: MatDialogRef<CreateWeightComponent>,
              private snackbarService: SnackbarService,
              @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.weightForm = this.fb.group({
      id: [data ? data.id : null],
      poids : [data ? data.poids : [Validators.required]],
      unite : [data ? data.unite : [Validators.required]],
    });
  }


  ngOnInit(): void {}

  getWeight() {
    this.service.getPoids().subscribe({
      next : (data) => {
       this.weightData =data;
      },
      error : (error :any) => {
        console.log(error.error.message);
      }
    })
  }

  onSubmit() {
    this.loading=true
    if(this.data.id){
      if (this.weightForm.valid){
        this.service.updatePoids(this.data.id,this.weightForm.value).subscribe({
          next: (data) => {
            setTimeout(()=> {
              this.snackbarService.showSuccessMessage("Weight is updated successfully")
              this.weightForm.reset();
              this.dialogRef.close();
              this.loading=false;
              this.dialogRef.afterClosed().subscribe((res)=> {
                if(res){
                  this.getWeight()
                }
              })
            },2000)
          },
          error: (err) => {
            console.log(err.error.message);
          },
        });
      }
    }else {
      if (this.weightForm.valid){
        this.service.createPoid(this.weightForm.value).subscribe({
          next: (data) => {
            setTimeout(()=> {
              this.snackbarService.showSuccessMessage("Weight is created successfully")
              this.weightForm.reset();
              this.dialogRef.close();
              this.weightForm.reset();
            },2000)
          },
          error: (err) => {
            console.log(err.error.message);
          },
        });
      }
    }
  }


  get Weight(){
    return this.weightForm.controls["poids"];
  }

  get Unit(){
    return this.weightForm.controls["unite"];
  }

}
