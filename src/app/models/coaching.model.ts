
export interface Coach {
  id: Number;
  nom_coach: String;
  sexe: String;
  danais: Date;
  lieu_naissance: String;
  experience_pro: String;
  telephone: String ;
  telephone1: String;
  email: String;
  photo: null,
  avenue: String;
  numero: String;
  quartier: String;
  creneau : CreneaucoachDTO;
  commune : Commune;
  civilite : Civilite;
  poids : Poids;
  nationalite: Nationalite;
  taille : Taille;
  couleurYeux : Couleurs;
}

export interface ClientDTO {
  id: Number;
  nom_client: String ;
  sexe : String ;
  telephone: String ;
  telephone1: String ;
  email: String ;
  photo: null,
  avenue: String;
  numero: String;
  quartier: String;
  creneauDTO : CreneaucoachDTO;
  communeDTO : Commune;
  nationaliteDTO : Nationalite;
  poidsDTO: Poids;
  tailleDTO : Taille;
  couleurYeuxDTO : Couleurs
}

export interface ExerciceDTO {
    id: Number ;
    nomexercise: String;
    caracteristique: String;
    experiencePro: String;
    coachDTO: Coach;
}

export interface AbonnementDTO {

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
    clientDTO: ClientDTO;
    exerciceDTO: ExerciceDTO;
}


export interface AbonnementSansCoachDTO {

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
    clientsDTO: ClientDTO;
    exerciceSansCoachDTO: ExerciceSansCoach;
}

export interface CreneaucoachDTO {
    id: Number ;
    heureDebut: Date;
    heureFin: Date;
    joursDisponible: String;
    etat : String;
}

export interface  Civilite {
  id : Number ;
  nom : String ;
  observation : String ;
}

export interface  Couleurs {
  id :Number ;
  nom : String ;
  observation : String ;
}

export interface Nationalite {
  id : Number ;
  nationalite : String ;
  libelle : String ;
}

export interface Commune {
  id : Number;
  commune : String ;
  district : String ;
}

export interface Taille {
    id : Number;
    taille :Number;
    unite : String ;
}

export interface Poids {
    id : Number;
    poids : Number ;
    unite :String ;
}

export interface ExerciceSansCoach {
  id : Number ;
  nomexercise : String;
  caracteristique: String;
  experiencePro : String;
  imageSport : String ;
}