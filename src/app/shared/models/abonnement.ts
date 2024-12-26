import { ICustomers } from './customer';
import { IExercice } from './global.model';

export interface IAbonnement {
  id: Number;
  numeroAbonnement: String;
  numeroPaiement: String;
  dateAbonnement: Date;
  datePaiement: Date;
  dateFinAbonnement: Date;
  typeAbonnement: String;
  modePaiement: String;
  montantPaie: number;
  dureeAbonnement: String;
  client: ICustomers;
  exerciceDTO: IExercice;
}
