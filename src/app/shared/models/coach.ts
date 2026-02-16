import { ICommune } from './commune';
import { ICreneau } from './creneau';
import { ICivilite, INationalite, ITaille } from './global.model';

export interface ICoach {
  id: string;
  name: string;
  lastname: string;
  firstname: string;
  sex: string;
  dateOfBirt: Date;
  placeOfBirt: string;
  professionalExp: string;
  phoneNumber: string;
  phoneNumber1: string;
  email: string;
  photo: any;
  addressLine: string;
  addressLine1: string;
  creneau: ICreneau[];
  nationalite: INationalite;
  civilite: ICivilite;
  commune: ICommune;
  taille: ITaille;
}

export interface IAgent {
  id: string
  name: string
  firstname: string
  lastname: string
  sexe: string
  birthdate: string
  placeBirth: string
  email: string
  phone: string
  phone1: string
  competence: string
  langue: ILangues
  experience: IExperience
  formation: IFormation
  nationality: string
}

export interface ILangues {
  id: string;
  name: string;
  level: string;
  Observation: string;
}

export interface Creneau {
  id: string;
  startTime: string;
  endTime: string;
  day: string[];
  duration: string;
  state: string;
  status: string;
  description: any;
}


export interface Commune {
  id: string;
  commune: string;
  district: string;
}

export interface IFormation {
  id: string;
  startDate: Date;
  endDate: Date;
  title: string;
  Options: string;
  Faculty: string;
  Ecole: string;
}

export interface IExperience {
  id: string;
  startdate: string;
  enddate: string;
  title: string;
  company: string;
  descriptions: string[];
}
