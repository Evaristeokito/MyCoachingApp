import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustormerService } from '../customer.service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css'],
})
export class CustomerDetailsComponent {
  Path = {
    user: 'assets/img/user.jpeg',
  };

  client_id: Number | any;
  nom_client!: String;
  sexe!: String;
  telephone!: String;
  telephone1!: String;
  email!: String;
  photo!: null;
  avenue!: String;
  numero!: String;
  quartier!: String;

  creneau!: any;
  commune!: any;
  poids!: any;
  nationalite!: any;
  taille!: any;
  couleurYeux!: any;
  constructor(
    private activeRouter: ActivatedRoute,
    private clientService: CustormerService
  ) {
    this.client_id = this.activeRouter.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.Path;
    console.log(this.client_id);
    this.getDetailClients();
  }

  getDetailClients() {
    this.clientService.getOneClient(this.client_id).subscribe({
      next: (data) => {
        this.nom_client = data.nom_client;
        this.sexe = data.sexe;
        this.telephone = data.telephone;
        this.telephone1 = data.telephone1;
        this.email = data.email;
        this.numero = data.numero;
        this.avenue = data.avenue;
        this.quartier = data.quartier;
        this.nationalite = data.nationaliteDTO;
      },
      error: (error) => {},
    });
  }
}
