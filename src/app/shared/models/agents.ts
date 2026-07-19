import { Agent } from "./dossiers";



export type LookupValue =
  | string
  | number
  | null
  | undefined
  | {
      libelle?: string | null;
      label?: string | null;
      nom?: string | null;
      name?: string | null;
      designation?: string | null;
    };

export interface IAgent {
  birthdate: Date;
  email: string;
  firstname: string;
  id: string;
  lastname: string;
  matricule: string;
  name: string;
  nationality: string;
  phoneNumber: string;
  phoneNumber1: string;
  placeBirth: string ;
  sex: string;
  etatCivil: string;
  service?: LookupValue;
  fonction?: LookupValue;
  filiation?: string;
  filliation?: string;
  addresse: string;
  status: boolean;
  photoUrl?: string;
  avatarUrl?: string;
  photo?: string;
}


export interface AgentCardInstitution {
  country?: string;
  ministry?: string;
  title?: string;
  regionCode?: string;
  serialLabel?: string;
  issueDate?: string | Date | null;
  expiryDate?: string | Date | null;
  verificationBaseUrl?: string;
}

export interface ILangues {
  id: string;
  name: string;
  level: string;
  Observation: string;
  agent : Agent
}

export interface RootFormation {
  id: string;
  formations: IFormation[];
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
  id: String;
  name: string;
  level: string;
  description: string;
  agent: IAgent;
}