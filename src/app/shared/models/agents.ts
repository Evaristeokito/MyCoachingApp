import { Agent } from "./dossiers";

export interface IAgent {
  birthdate: Date;
  email: string;
  firstname: string;
  id: string;
  lastname: string;
  matricule: string;
  name: string;
  nationality: any;
  phoneNumber: string;
  phoneNumber1: string;
  placeBirth: string;
  sex: string;
  etatCivil: String;
  fonction: String;
  filiation: String;
  service: String;
  status: boolean;
}

export interface ILangues {
  id: string;
  name: string;
  level: string;
  Observation: string;
  agent : Agent
}

export interface IFormation {
  id: string;
  startDate: Date;
  endDate: Date;
  title: string;
  options: string;
  faculty: string;
  ecole: string;
  agent : Agent;
}

export interface IExperience {
  id: string;
  startdate: string;
  enddate: string;
  title: string;
  company: string;
  descriptions: string[];
  agent : Agent;
}

export interface ICompetences {
  id: string;
  name: string;
  level: string;
  description: string;
  agent: IAgent;
}