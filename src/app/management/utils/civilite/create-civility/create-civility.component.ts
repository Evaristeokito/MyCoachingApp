import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {CiviliteService} from "../civilite.service";
import {ToastService} from "../../../../shared/services/toast.service";
import {NgIf} from "@angular/common";
import {SnackbarService} from "../../../../shared/services/snackbar.service";

@Component({
  selector: 'app-create-civility',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './create-civility.component.html',
  styleUrl: './create-civility.component.css'
})
export class CreateCivilityComponent implements OnInit {

  civilityForm: FormGroup | any;
  loading: boolean = false;
  civilityData: any;

  ngOnInit(): void {
  }

  constructor(
    private fb: FormBuilder,
    private service: CiviliteService,
    private dialogRef: MatDialogRef<CreateCivilityComponent>,
    private snackbarService: SnackbarService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.civilityForm = this.fb.group({
      id: [data ? data.id : null],
      name: [data ? data.name : [Validators.required]],
      observation: [data ? data.observation : ''],
    });
  }

  loadCivility() {
    this.service.getCivilities().subscribe({
      next: value => {
        this.civilityData = value;
      },
      error: err => {
        console.log(err.error.message);
      }
    })
  }

  onSubmit() {
    this.loading = true
    if (this.data.id) {
      this.service.updateICivility(this.civilityForm.value, this.data.id).subscribe({
        next: (data) => {
          setTimeout(()=> {
            this.snackbarService.showSuccessMessage("Civility is updated successfully")
            this.loading = false;
            this.civilityForm.reset();
            this.dialogRef.close();
            this.dialogRef.afterClosed().subscribe((result) => {
              this.loadCivility()
            })
          },2000)
        },
        error: (error) => {
          console.log(error);
          this.loading = false;
        },
      });
    } else {
      this.service.createCivility(this.civilityForm.value).subscribe({
        next: (data) => {
          setTimeout(() => {
            this.snackbarService.showSuccessMessage("Civility is successfully created")
            this.loadCivility();
            this.loading = false;
            this.civilityForm.reset();
            this.dialogRef.close()
          },2000)
        },
        error: (error) => {
          console.log(error);
          this.loading = false;
        },
      });
    }
  }


  get name() {
    return this.civilityForm.controls['name'];
  }


}
