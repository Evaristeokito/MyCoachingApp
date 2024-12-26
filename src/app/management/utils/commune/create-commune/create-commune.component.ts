import {Component, Inject, OnInit} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogClose,
  MatDialogConfig,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import {NgIf} from "@angular/common";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Observable} from "rxjs";
import {ICommune} from "../../../../shared/models/commune";
import {UtilsService} from "../../utils.service";
import {ToastService} from "../../../../shared/services/toast.service";
import {SnackbarService} from "../../../../shared/services/snackbar.service";

@Component({
  selector: 'app-create-commune',
  standalone: true,
  imports: [
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle,
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './create-commune.component.html',
  styleUrl: './create-commune.component.css'
})
export class CreateCommuneComponent implements OnInit {

  communeForm: FormGroup | any;
  loading : boolean = false ;
  errorMessage: String = "";

  constructor(private service : UtilsService,
              private fb:FormBuilder,
              private toast : ToastService,

              private dialogRef: MatDialogRef<CreateCommuneComponent>,
              private snackbarService: SnackbarService,
              @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.communeForm = this.fb.group({
      id: [data ? data.id : null],
      commune : [data ? data.commune : [Validators.required]],
      district : [data ? data.district : [Validators.required]],
    });
  }


  ngOnInit(): void {}

  getCommunes() {
    this.service.getCommunes().subscribe({
      next : (data) => {

      },
      error : (error :any) => {
        console.log(error.error.message);
      }
    })
  }

  onSubmit() {
    this.loading=true
    if(this.data.id){
      if (this.communeForm.valid){
        this.service.updateICommune(this.communeForm.value,this.data.id).subscribe({
          next: (data) => {
            setTimeout(()=> {
              this.snackbarService.showSuccessMessage("Commune is updated successfully")
              this.communeForm.reset();
              this.dialogRef.close();
              this.loading=false;
              this.dialogRef.afterClosed().subscribe((res)=> {
                if(res){
                  this.getCommunes()
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
      if (this.communeForm.valid){
        this.service.createICommune(this.communeForm.value).subscribe({
          next: (data) => {
            setTimeout(()=> {
              this.snackbarService.showSuccessMessage("Commune is created successfully")
              this.communeForm.reset();
              this.dialogRef.close();
              this.communeForm.reset();
            },2000)
          },
          error: (err) => {
            console.log(err.error.message);
          },
        });
      }
    }
  }


  get commune(){
    return this.communeForm.controls["commune"];
  }

  get district(){
    return this.communeForm.controls["district"];
  }

}
