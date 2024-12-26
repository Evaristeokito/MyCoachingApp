import { ICoach } from './coach';

export interface IExercice {
  id: String;
  nomexercise: String;
  caracteristique: String;
  experiencePro: String;
  coachDTO: ICoach;
}

export interface INationalite {
  id : String
  name : string
  country : string
}

export interface ICivilite {
  id: String;
  name: String;
  observation: String;
}

export interface IColors {
  id: String;
  name: String;
  observation: String;
}

export interface ITaille {
  id: String;
  taille: Number;
  unite: String;
}

export interface IPoids {
  id: String;
  poids: Number;
  unite: String;
}

export interface IExerciceSansCoach {
  id: String;
  nomexercise: String;
  caracteristique: String;
  experiencePro: String;
  imageSport: String;
}
