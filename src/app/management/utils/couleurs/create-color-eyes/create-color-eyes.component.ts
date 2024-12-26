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
import {IColors} from "../../../../shared/models/global.model";

@Component({
  selector: 'app-create-color-eyes',
  standalone: true,
  imports: [
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle,
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './create-color-eyes.component.html',
  styleUrl: './create-color-eyes.component.css'
})
export class CreateColorEyesComponent implements OnInit {

  colorsForm: FormGroup | any;
  colorsEyes: IColors [] = [];
  loading : boolean = false ;
  errorMessage: String = "";

  constructor(private service : UtilsService,
              private fb:FormBuilder,
              private dialogRef: MatDialogRef<CreateColorEyesComponent>,
              private snackbarService: SnackbarService,
              @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.colorsForm = this.fb.group({
      id: [data ? data.id : null],
      name : [data ? data.name : [Validators.required]],
      observation : [data ? data.observation : [Validators.required]],
    });
  }


  ngOnInit(): void {}

  getColors() {
    this.service.getCouleursYeux().subscribe({
      next : (data) => {
        this.colorsEyes = data ;
      },
      error : (error :any) => {
        console.log(error.error.message);
      }
    })
  }

  onSubmit() {
    this.loading=true
    if(this.data.id){
      if (this.colorsForm.valid){
        this.service.updateCouleurs(this.data.id,this.colorsForm.value).subscribe({
          next: (data) => {
            setTimeout(()=> {
              this.snackbarService.showSuccessMessage("Colors is updated successfully")
              this.colorsForm.reset();
              this.dialogRef.close();
              this.loading=false;
              this.dialogRef.afterClosed().subscribe((res)=> {
                if(res){
                  this.getColors()
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
      if (this.colorsForm.valid){
        this.service.createCouleurs(this.colorsForm.value).subscribe({
          next: (data) => {
            setTimeout(()=> {
              this.snackbarService.showSuccessMessage("Colors is created successfully")
              this.colorsForm.reset();
              this.dialogRef.close();
              this.colorsForm.reset();
            },2000)
          },
          error: (err) => {
            console.log(err.error.message);
          },
        });
      }
    }
  }

  get name(){
    return this.colorsForm.controls["name"];
  }

  get observation(){
    return this.colorsForm.controls["observation"];
  }
}
