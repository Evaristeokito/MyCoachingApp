import { Component, OnInit } from '@angular/core';
import {CreneauCoachService} from "../../services/creneau-coach.service";
import {catchError, Observable, throwError} from "rxjs";
import {Civilite, Commune,
  Couleurs,
  CreneaucoachDTO,
  Nationalite,
  Poids,
  Taille} from "../../models/coaching.model";
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {CiviliteService} from "../../services/civilite.service";
import {CouleurYeuxService} from "../../services/couleur-yeux.service";
import {NationaliteService} from "../../services/nationalite.service";
import {CoachService} from "../../services/coach.service";
import {ToastService} from "../../services/toast.service";
import {CommuneService} from "../../services/commune.service";
import {TailleService} from "../../services/taille.service";
import {PoidService} from "../../services/poid.service";
import Validation from "../../utils/validation";

@Component({
  selector: 'app-coach',
  templateUrl: './coach.component.html',
  styleUrls: ['./coach.component.css']
})
export class CoachComponent implements OnInit {

  Path = {
    user : "assets/img/user.jpeg"
  }

  isLinear = false;
 public coachForm:FormGroup  | any ;
 public coachForm1:FormGroup | any ;
 public coachForm2:FormGroup | any ;
 public coachForm3:FormGroup | any ;
 public coachForm4:FormGroup | any ;

  public imagePath : any ;
  imageURL : any ;
  useFile : any ;
  Errormessage ? : String = "" ;
  submitted = false;

  CreneauDatas! : Observable<Array<CreneaucoachDTO>>
  CivilitesData! : Observable<Array<Civilite>>
  CouleurData ! : Observable<Array<Couleurs>>
  NationalitesData ! : Observable<Array<Nationalite>>
  PoidsData! : Poids | any;
  TailleData! : Taille | any ;
  communeData! : Commune | any ;

  constructor(private creneauService : CreneauCoachService,
              private civiliteService : CiviliteService,
              private couleurService : CouleurYeuxService,
              private nationaliteService : NationaliteService,
              private communeService : CommuneService,
              private coachService : CoachService,
              private tailleService : TailleService,
              private poidService : PoidService,
              private toast : ToastService,
              private fb : FormBuilder
  ){
  }

  ngOnInit(): void {

    this.Path;
    this.onGetCreneauData();
    this. getSelectedCivilites();
    this. getSelectedCouleursYeux();
    this.getNationalites();
    this.onGetCommune();
    this.onGetPoids();
    this.onGetTaille();

    this.coachForm = this.fb.group({
      nom_coach: ["",[Validators.required,Validators.min(5),Validators.max(30)]],
      danais : ["" , Validators.required],
      lieu_naissance : ["",Validators.required],
      nationalite : ["",Validators.required],
      taille : ["",Validators.required],
      poids : ["",Validators.required],
      experience_pro : ["" ,Validators.required],
      couleurYeux : ["",Validators.required],
    });

    this.coachForm1 = this.fb.group({
      civilite : ["",Validators.required],
      sexe : ["",Validators.required],
      quartier : [""],
      commune : ["",[Validators.required]],
      avenue : ["",[Validators.required]],
      numero : ["",[Validators.required]],
      nom_epoux : [""],
      nombre_enfant : [""],
    });

    this.coachForm2 = this.fb.group({
      telephone : ["" , Validators.required,Validators.max(13)],
      telephone1 : ["" , Validators.required,Validators.max(13)],
      email : ["" , Validators.email],
      imageUpload : [""],
    });

    this.coachForm3 = this.fb.group({
      joursD : [""],
      heureD : [""],
      heureF : [""],
    });

    this.onActivatedValue();
    console.log(this.onActivatedValue());
  }

  onActivatedValue(){
   return this.coachForm1.controls.civilite.value == "marié";
  }

  onGetCreneauData(){
    this.CreneauDatas = this.creneauService.getCreneauCoach().pipe(
      catchError(err => {
        this.Errormessage = err.message();
        console.log(err.message());
        return throwError (err);
      })
    )
  }

  onSelectFile(event:any){
    if(event.target.files.length > 0){
      const file = event.target.files[0];
      this.useFile = file;
      var mimeType = event.target.files[0].type;

      if (mimeType.match(/image\/*/) == null){
        this.Errormessage ="Only image are not supported";
        return ;
      }

      var reader = new FileReader();
      this.imagePath=File;
      reader.readAsDataURL(file);
      reader.onload=(_event)=>{
        this.imageURL = reader.result;
      }
    }
  }
  fileName : String = "";
  onFileInput(e:any){
    this.fileName = e.target.files[0].name;
  }

    getOneCreneau(id: Number) {
        this.creneauService.getOneCreneau(id).subscribe({
          next: (data) => {
            this.coachForm.patchValue({
              heureD : data.heureDebut,
              heureF : data.heureFin,
              joursD : data.joursDisponible
            })
          },
          error: (err) => {
            console.log(err);
          }
        })
    }

    createClient() {}

    getSelectedCivilites(){
     this.CivilitesData = this.civiliteService.getCivilites().pipe(
        catchError(err => {
          this.Errormessage = err.message();
          return throwError(err);
        })
      )
    }

    getSelectedCouleursYeux() {
     this.CouleurData = this.couleurService.getCouleursYeux().pipe(
       catchError(err => {
         this.Errormessage = err.message();
        return  throwError(err);
       })
     )
    }

    getNationalites(){
   this.NationalitesData = this.nationaliteService.getNationalites().pipe(
     catchError(err => {
       this.Errormessage = err.message();
      return throwError(err)
     })
   )
    }

    onGetCommune(){
    this.communeService.getCommunes().subscribe({
      next : (data) => {
        this.communeData = data;
      },
      error : (err => {
        console.log(err.message())
      })
    })
    }

    onGetPoids(){
      this.poidService.getPoids().subscribe({
        next : (data) => {
          this.PoidsData = data;
        },
        error: (err => {
          console.log(err.message)
        })
      })
    }

    onGetTaille(){
     this.tailleService.getTailles().subscribe({
       next : (data) => {
         this.TailleData = data;
       },
       error : (err => {
         console.log(err)
       })
     })
    }

  createCoach() {
    if(this.coachForm.valid){
      console.log(this.coachForm.value);
    }
  }

  get f():{[key : string]:AbstractControl}{
    return this.coachForm.controls;
  }

  get nom_coach() {
    return this.coachForm.controls["nom_coach"];
  }
  get telephone() {
    return this.coachForm.controls["telephone"];
  }

  get telephone1(){
    return this.coachForm.controls["telephone1"]
  }

  get email () {
    return this.coachForm.controls["email"]
  }

  get danais () {
    return this.coachForm.controls["danais"]
  }
  get lieu_naissance() {
    return this.coachForm.controls["lieu_naissance"];
  }

  get nationalite() {
    return this.coachForm.controls["nationalite"];
  }

  get taille() {
    return this.coachForm.controls["taille"];
  }

  get poids() {
    return this.coachForm.controls["poids"];
  }
  get experience_pro() {
    return this.coachForm.controls["experience_pro"];
  }
  get couleurYeux () {
    return this.coachForm.controls["couleurYeux"];
  }

  get sexe() {
    return this.coachForm.controls["sexe"];
  }

  get civilite() {
    return this.coachForm.controls["civilite"];
  }

  get commune() {
    return this.coachForm.controls["commune"]
  }

  get quartier() {
    return this.coachForm.controls["quartier"]
  }

  get avenue() {
    return this.coachForm.controls["avenue"];
  }

  get numero() {
    return this.coachForm.controls["numero"];
  }

}
