import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {
  MAT_DIALOG_DATA,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import {NgForOf, NgIf} from "@angular/common";
import {UtilsService} from "../../utils.service";
import {ToastService} from "../../../../shared/services/toast.service";
import {SnackbarService} from "../../../../shared/services/snackbar.service";
import {ICreneau} from "../../../../shared/models/creneau";

@Component({
  selector: 'app-new-creneau',
  standalone: true,
  imports: [
    FormsModule,
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle,
    NgIf,
    ReactiveFormsModule,
    NgForOf
  ],
  templateUrl: './new-creneau.component.html',
  styleUrl: './new-creneau.component.css'
})
export class NewCreneauComponent implements OnInit {

  creneauForm: FormGroup | any;
  loading : boolean = false ;
  errorMessage: String = "";
  creneau : ICreneau[] = [] ;

  itemDay = [
    { id: 1, name: 'Lundi' },
    { id: 2, name: 'Mardi' },
    { id: 3, name: 'Mercredi' },
    { id: 4, name: 'Jeudi' },
    { id: 5, name: 'Vendredi' },
    { id: 6, name: 'Dimanche' },
  ];

  selectedValues: number[] = [];


  constructor(private service : UtilsService,
              private fb:FormBuilder,
              private toast : ToastService,
              private dialogRef: MatDialogRef<NewCreneauComponent>,
              private snackbarService: SnackbarService,
              @Inject(MAT_DIALOG_DATA) public data: ICreneau | any
  ) {
    this.creneauForm = this.fb.group({
      id: [data ? data.id : null],
      startTime : [data ? data.startTime : [Validators.required]],
      endTime : [data ? data.endTime : [Validators.required]],
      day : [[] ,data ? data.day : [Validators.required]],
      state : [data ? data.state : [Validators.required]],
      description : [data ? data.description : [Validators.required]],
    });
  }


  ngOnInit(): void {
    this.getCreneau();
  }

  getCreneau() {
    this.service.getCreneaux().subscribe({
      next : (data) => {
        this.creneau = data;
      },
      error : (error :any) => {
        console.log(error.error.message);
      }
    })
  }

  onSubmit() {
    this.loading=true
    if(this.data.id){
      if (this.creneauForm.valid){
        this.service.updateCreneau(this.creneauForm.value,this.data.id).subscribe({
          next: (data) => {
            setTimeout(()=> {
              this.snackbarService.showSuccessMessage("Time slot is updated successfully")
              this.creneauForm.reset();
              this.dialogRef.close();
              this.loading=false;
              this.dialogRef.afterClosed().subscribe((res)=> {
                if(res){
                  this.getCreneau()
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
      if (this.creneauForm.valid){
        this.service.createCreneau(this.creneauForm.value).subscribe({
          next: (data) => {
            setTimeout(()=> {
              this.snackbarService.showSuccessMessage("Time slot is created successfully")
              this.creneauForm.reset();
              this.dialogRef.close();
              this.creneauForm.reset();
            },2000)
          },
          error: (err) => {
            console.log(err.error.message);
          },
        });
      }
    }
  }

  get startTime(){
    return this.creneauForm.controls["startTime"];
  }

  get endTime(){
    return this.creneauForm.controls["endTime"];
  }

  get day() {
    return this.creneauForm.controls["day"];
  }

  get state() {
    return this.creneauForm.controls["state"];
  }

  get duration() {
    return this.creneauForm.controls["duration"];
  }
}
