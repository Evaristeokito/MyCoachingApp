export interface IAgent {
  id: string;
  numeroDossier : String;
  resume_professionnel: string;
  date_creation: string;
  version: string;
  status: boolean;
  agent: Agent;
}

export interface Agent {
  id: string;
  matricule: string;
  name: string;
  firstname: string;
  lastname: string;
  sex: string;
  etatCivil: string;
  birthdate: string;
  placeBirth: string;
  nationality: string;
  email: string;
  phoneNumber: string;
  phoneNumber1: string;
  fonction: string;
  filiation: string;
  service: string;
  status: boolean;
  createdAt: string;
  competences: Competence[];
  languages: Language [];
  experiences: Experience[];
  formations: Formation[];
}

export interface Competence {
  id: string;
  name: string;
  level: string;
  description: string;
}

export interface Language {
  id: string;
  name: string;
  level: string;
  observation: string;
}

export interface Experience {
  id: string;
  startdate: string;
  enddate: string;
  title: string;
  company: string;
  descriptions: string[];
}

export interface Formation {
  id: string;
  startDate: string;
  endDate: string;
  title: string;
  options: string;
  faculty: string;
  ecole: string;
}
