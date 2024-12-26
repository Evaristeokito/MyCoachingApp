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

@Component({
  selector: 'app-create-size',
  standalone: true,
  imports: [
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle,
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './create-size.component.html',
  styleUrl: './create-size.component.css'
})
export class CreateSizeComponent implements OnInit {

  sizeForm: FormGroup | any;
  loading : boolean = false ;
  errorMessage: String = "";

  constructor(private service : UtilsService,
              private fb:FormBuilder,
              private toast : ToastService,

              private dialogRef: MatDialogRef<CreateSizeComponent>,
              private snackbarService: SnackbarService,
              @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.sizeForm = this.fb.group({
      id: [data ? data.id : null],
      taille : [data ? data.taille : [Validators.required]],
      unite : [data ? data.unite : [Validators.required]],
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
      if (this.sizeForm.valid){
        this.service.updateTaille(this.data.id,this.sizeForm.value).subscribe({
          next: (data) => {
            setTimeout(()=> {
              this.snackbarService.showSuccessMessage("Size is updated successfully")
              this.sizeForm.reset();
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
      if (this.sizeForm.valid){
        this.service.createTaille(this.sizeForm.value).subscribe({
          next: (data) => {
            setTimeout(()=> {
              this.snackbarService.showSuccessMessage("Size is created successfully")
              this.sizeForm.reset();
              this.dialogRef.close();
              this.sizeForm.reset();
            },2000)
          },
          error: (err) => {
            console.log(err.error.message);
          },
        });
      }
    }
  }


  get size(){
    return this.sizeForm.controls["taille"];
  }

  get unite(){
    return this.sizeForm.controls["unite"];
  }
}
