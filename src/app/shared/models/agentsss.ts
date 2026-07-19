export interface DossierAgent {
  id?: number;
  agentId: number;
  numeroDossier: string;
  referenceDossier: string;
  versionDossier: string;
  resumeProfessionnel: string;
  statut: string;

  langues?: LangueAgent[];
  etudes?: EtudeAgent[];
  competences?: CompetenceAgent[];
  formations?: FormationAgent[];
  experiences?: ExperienceProfessionnelle[];
}

export interface LangueAgent {
  id?: number;
  langue: string;
  niveauParle: string;
  niveauEcrit: string;
  niveauLecture: string;
}

export interface EtudeAgent {
  id?: number;
  niveau: string;
  etablissement: string;
  domaine: string;
  diplome: string;
  anneeDebut: number;
  anneeFin: number;
}

export interface CompetenceAgent {
  id?: number;
  competence: string;
  niveau: string;
  description: string;
}

export interface FormationAgent {
  id?: number;
  intitule: string;
  organisme: string;
  dateDebut: string;
  dateFin: string;
  certificat: string;
}

export interface ExperienceProfessionnelle {
  id?: number;
  poste: string;
  entreprise: string;
  lieu: string;
  dateDebut: string;
  dateFin?: string;
  posteActuel: boolean;
  description: string;
}

export interface Agentsss {
  id?: number;
  nom: string;
  postNom: string;
  prenom: string;
  sexe: string;
  dateNaissance: string;
  lieuNaissance: string;
  etatCivil: string;
  nationalite: string;
  telephone1: string;
  telephone2?: string;
  email?: string;
  matricule?: string;
  fonction?: string;
  service?: string;
  attachement?: string;
  district?: string;
  commune?: string;
  quartier?: string;
  avenue?: string;
  photoUrl?: string;
}