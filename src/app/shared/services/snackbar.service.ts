import { Injectable } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackBar : MatSnackBar) { }

  showSuccessMessage(msg : any) {
    this.snackBar.open( msg , 'Success',
      {
      duration: 3000, // 5 seconds
      verticalPosition : "top",
      horizontalPosition : "end",
      panelClass: ['success-snackbar']
    });
  }

  // Show error message
  showErrorMessage() {
    this.snackBar.open('Something went wrong!', 'Success', {
      duration: 3000, // 3 seconds
      panelClass: ['error-snackbar'] // Optional: add a class to style the snackbar
    });
  }


}
