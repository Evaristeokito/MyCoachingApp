import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {catchError, Observable, throwError} from "rxjs";
import { CoachService } from '../coach/coach.service';
import { ExerciseService } from './Exercise.service';

@Component({
  selector: 'app-exercice',
  templateUrl: './exercice.component.html',
  styleUrls: ['./exercice.component.css'],
})
export class ExerciceComponent implements OnInit {

  coachDATA!: Observable<Array<any>>;
  ExerciceForm: FormGroup | any;
  errorMessage!: String;

  public imagePath : any ;
  imageURL : any ;
  useFile : any ;
  Errormessage ? : String = "" ;

  constructor(
    private fb: FormBuilder,
    private exerciceService: ExerciseService,
    private serviceCoach: CoachService
  ) {
  }


  Path = {
    user : "assets/img/user.jpeg"
  }


  ngOnInit(): void {

    this.Path;

    this.ExerciceForm = this.fb.group({
      nomexercise: [""],
      caracteristique: [""],
      experiencePro: [""],
      id: [""],
      nom: [""],
      telephone: [""],
      experience_pro : [""],
      sexe : [""],
    })


    this.onGetCoach();
  }

  onGetCoach() {
    this.coachDATA = this.serviceCoach.getCoachs().pipe(
      catchError(err => {
        this.errorMessage = err.message();
        return throwError(err);
      })
    )
  }

  onGetOneCoach(id: any) {
    this.serviceCoach.getCoach(id).subscribe({
      next: (data) => {
        this.ExerciceForm.patchValue({
          idcoach: data.id,
          nom: data.name,
          telephone: data.phoneNumber,
          experience_pro : data.professionalExp,
          sexe : data.sex
        })
      },
      error : (err)=> {
        console.log(err);
      }
    })
  }

  onSaveExercice() {
    //
  }

  onSelectFile(event:any){
    if(event.target.files.length > 0){
      const file = event.target.files[0];
      this.useFile = file;
      var mimeType = event.target.files[0].type;

      if (mimeType.match(/image\/*/) == null){
        this.Errormessage ="Only image are not supported";
        return ;
      }

      var reader = new FileReader();
      this.imagePath=File;
      reader.readAsDataURL(file);
      reader.onload=(_event)=>{
        this.imageURL = reader.result;
      }
    }
  }

}
