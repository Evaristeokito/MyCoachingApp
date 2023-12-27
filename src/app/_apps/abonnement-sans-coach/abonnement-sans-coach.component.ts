import { Component, OnInit } from '@angular/core';
import { DataTableLanguage } from 'src/app/languages/dataTablesLang';
import { AbonnementSansCoachService } from 'src/app/services/abonnement-sans-coach.service';

@Component({
  selector: 'app-abonnement-sans-coach',
  templateUrl: './abonnement-sans-coach.component.html',
  styleUrls: ['./abonnement-sans-coach.component.css']
})
export class AbonnementSansCoachComponent implements OnInit {

  abonnement_sans_coach : any ;

  dtoptions : DataTables.Settings = {};

  constructor(private abonnement_sans_coach_service : AbonnementSansCoachService){}

  ngOnInit(): void {
    
    this.onGetData();

  }

  onGetData(){
    this.abonnement_sans_coach_service.getAbonnements().subscribe(res => {
       this.abonnement_sans_coach = res ;
    })
  }

}
