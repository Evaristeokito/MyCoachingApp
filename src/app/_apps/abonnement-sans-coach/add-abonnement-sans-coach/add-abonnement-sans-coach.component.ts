import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-abonnement-sans-coach',
  templateUrl: './add-abonnement-sans-coach.component.html',
  styleUrls: ['./add-abonnement-sans-coach.component.css']
})
export class AddAbonnementSansCoachComponent implements OnInit {

  constructor(){}


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  Path = {
    logo: "assets/img/logo.png",
    user : "assets/img/user.jpeg"
  }

}
