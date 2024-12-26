import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exercice-single',
  templateUrl: './exercice-single.component.html',
  styleUrls: ['./exercice-single.component.css']
})
export class ExerciceSingleComponent implements OnInit {

  public exerciceID! : Number

  nomexercise!: String;
  caracteristique!: String;
  experiencePro!: String;
  // coachDTO!: Coach;

  constructor(private activatedRoute : ActivatedRoute){
    this.exerciceID = this.activatedRoute.snapshot.params["id"];
  }

  Path = {
    user : "assets/img/user.jpeg"
  }

  ngOnInit(): void {

    this.Path
    
    // this.exerciseService.getExercice(this.exerciceID).subscribe({
    //   next : (data) => {
    //       this.nomexercise = data.nomexercise;
    //       this.caracteristique = data.caracteristique;
    //       this.experiencePro = data.experiencePro;
    //       this.coachDTO = data.coachDTO;
    //   },
    //   error : (error) => {
    //     console.log(error);
    //   }
    // })

  }



}
