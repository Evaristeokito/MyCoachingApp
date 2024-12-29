import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  errorMessage! :String ;

  coachList = [
    {
      name : "Evariste",
      lastname : "Mbuka",
      firstname : "Okito",
      sexe : "Masculin",
      etat : "Celibataire",
      email : "mbuka40@gmail.com",
      phone : "0123456789",
      picture : "https://fakefaceapi.com/face1.jpg"
    },
    {
      name : "Mambu",
      lastname : "Mukwa",
      firstname : "Pericles",
      sexe : "Masculin",
      etat : "Celibataire",
      email : "mambu@gmail.com",
      phone : "0123456789",
      picture : "https://fakefaceapi.com/face1.jpg"
    },
    {
      name : "Kilem",
      lastname : "Ndoy",
      firstname : "Yannick",
      sexe : "Masculin",
      etat : "Marié",
      email : "yannick@gmail.com",
      phone : "0123456789",
      picture : "https://fakefaceapi.com/face1.jpg"
    },
    {
      name : "Patrick",
      lastname : "Lubia",
      firstname : "Patrick",
      sexe : "Masculin",
      etat : "Marié",
      email : "patrick@gmail.com",
      phone : "0123456789",
      picture : "https://fakefaceapi.com/face1.jpg"
    }
  ]

  constructor(){
  }

  ngOnInit(): void {
  }


}
