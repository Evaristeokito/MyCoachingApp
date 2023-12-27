import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientDTO, ExerciceSansCoach } from 'src/app/models/coaching.model';
import { AbonnementSansCoachService } from 'src/app/services/abonnement-sans-coach.service';

@Component({
  selector: 'app-abonnement-sans-single',
  templateUrl: './abonnement-sans-single.component.html',
  styleUrls: ['./abonnement-sans-single.component.css']
})
export class AbonnementSansSingleComponent implements OnInit {


    id: Number | any;
    numeroAbonnement: String | any;
    numeroPaiement: String | any;
    dateAbonnement: Date | any;
    datePaiement: Date | any;
    dateFinAbonnement: Date | any;
    typeAbonnement: String | any;
    modePaiement: String | any;
    montantPaie: String | any;
    dureeAbonnement: String | any;
    status: any;
    clientDTO!: ClientDTO;
    exerciceSansCoachDTO!: ExerciceSansCoach;

    path! : String ;

    abonnementSansCoachID! : Number;

  constructor(private abonneSansCoachService : AbonnementSansCoachService, private activatedRouter : ActivatedRoute){
    this.abonnementSansCoachID = activatedRouter.snapshot.params['id'];
  }

  Path = {
    logo : "assets/img/user.jpeg"
  }

  
  ngOnInit(): void {
   
    this.abonneSansCoachService.getAbonnement(this.abonnementSansCoachID).subscribe({
      next : (data) => {
        this.numeroAbonnement = data.numeroAbonnement,
        this.numeroPaiement = data.numeroAbonnement,
        this.dateAbonnement = data.dateAbonnement,
        this.datePaiement = data.datePaiement,
        this.dateFinAbonnement = data.dateFinAbonnement,
        this.typeAbonnement = data.typeAbonnement,
        this.montantPaie = data.montantPaie,
        this.modePaiement = data.modePaiement,
        this.status = data.status,
        this.dureeAbonnement = data.dureeAbonnement,
        this.clientDTO = data.clientsDTO,
        this.exerciceSansCoachDTO = data.exerciceSansCoachDTO
      },
      error : (err) => {
        console.log(err)
      }
    });

   this.path;
  }



  

}
