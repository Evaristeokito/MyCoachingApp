import {Component, OnInit} from '@angular/core';
import {DataTableLanguage} from 'src/app/languages/dataTablesLang';
import {Coach, ExerciceDTO} from 'src/app/models/coaching.model';
import {ExerciseService} from 'src/app/services/Exercise.service';
import {CoachService} from "../../services/coach.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {catchError, Observable, throwError} from "rxjs";

@Component({
  selector: 'app-exercice',
  templateUrl: './exercice.component.html',
  styleUrls: ['./exercice.component.css'],
})
export class ExerciceComponent implements OnInit {

  coachDATA!: Observable<Array<Coach>>;
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
          nom: data.nom_coach,
          telephone: data.telephone,
          experience_pro : data.experience_pro,
          sexe : data.sexe
        })
      },
      error : (err)=> {
        console.log(err);
      }
    })
  }

  onSaveExercice() {
    if (this.ExerciceForm.valid) {
      this.exerciceService.createExerciceSportif(this.ExerciceForm.value).subscribe({
        next: (data) => {
          alert("data inserted successfully")
          console.log(this.ExerciceForm.value);
        },
        error: (err) => {
          this.errorMessage = err.messages;
          alert(this.errorMessage);
        }
      })
    } else {
      console.log("form not valid");
    }
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
