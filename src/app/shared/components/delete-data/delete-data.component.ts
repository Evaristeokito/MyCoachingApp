import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {CiviliteService} from "../../../management/utils/civilite/civilite.service";

@Component({
  selector: 'app-delete-data',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule
  ],
  templateUrl: './delete-data.component.html',
  styleUrl: './delete-data.component.css'
})
export class DeleteDataComponent {

  constructor(
    private service : CiviliteService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onCancel(): void {
    /*this.data.dialogRef.close(false);*/
  }

  onConfirm(civility?: any): void {
    this.service.deleteCivility(civility).subscribe({
      next: () => {
        alert("Delete is successfully");
      },
      error: (err) => {
        console.log("Error when you are deleting")
      },
    })
  }
}
