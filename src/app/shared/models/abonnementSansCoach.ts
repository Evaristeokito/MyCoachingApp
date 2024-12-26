import { ICustomers } from './customer';
import { IExerciceSansCoach } from './global.model';

export interface IAbonnementSansCoach {
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
  clientsDTO: ICustomers;
  exerciceSansCoachDTO: IExerciceSansCoach;
}
