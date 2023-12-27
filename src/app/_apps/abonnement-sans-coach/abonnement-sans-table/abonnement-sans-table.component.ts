import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbonnementSansCoachService } from 'src/app/services/service.index';

@Component({
  selector: 'app-abonnement-sans-table',
  templateUrl: './abonnement-sans-table.component.html',
  styleUrls: ['./abonnement-sans-table.component.css']
})
export class AbonnementSansTableComponent implements OnInit {


  abonnement_sans_coach : any ;

  dtoptions : DataTables.Settings = {};

  constructor(private abonnement_sans_coach_service : AbonnementSansCoachService,private router :Router){}

  ngOnInit(): void {
    
    this.onGetData();

  }

  onGetData(){
    this.abonnement_sans_coach_service.getAbonnements().subscribe(res => {
       this.abonnement_sans_coach = res ;
    })
  }

  getAbonnementSansCoach(id: Number) {
    this.router.navigateByUrl("/abonnement-sans/abonnement-sans-coach-single/" + id )
 }



}
