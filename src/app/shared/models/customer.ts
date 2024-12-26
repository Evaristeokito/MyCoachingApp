import { ICommune } from './commune';
import { ICreneau } from './creneau';
import { IColors, INationalite, IPoids, ITaille } from './global.model';

export interface ICustomers {
  id: Number;
  nom_client: String;
  sexe: String;
  telephone: String;
  telephone1: String;
  email: String;
  photo: null;
  avenue: String;
  numero: String;
  quartier: String;
  creneau: ICreneau;
  commune: ICommune;
  nationaliteDTO: INationalite;
  poids: IPoids;
  taille: ITaille;
  couleurYeux: IColors;
}
