import { ICommune } from './commune';
import { ICreneau } from './creneau';
import { ICivilite, IColors, INationalite, ITaille } from './global.model';

export interface ICoach {
  id: string
  name: string
  lastname: string
  firstname: string
  sex: string
  dateOfBirt: Date
  placeOfBirt: string
  professionalExp: string
  phoneNumber: string
  phoneNumber1: string
  email: string
  photo: any
  addressLine: string
  addressLine1: string
  creneau: ICreneau[];
  nationalite: INationalite
  civilite: ICivilite
  couleurYeux: IColors
  commune: ICommune
  taille: ITaille
}


export interface Creneau {
  id: string
  startTime: string
  endTime: string
  day: string[]
  duration: string
  state: string
  status: string
  description: any
}

export interface Nationalite {
  id: string
  name: string
  country: string
}

export interface Civilite {
  id: string
  name: string
  observation: string
}

export interface CouleurYeux {
  id: string
  name: string
  observation: string
}

export interface Commune {
  id: string
  commune: string
  district: string
}

export interface Taille {
  id: string
  taille: number
  unite: string
}

