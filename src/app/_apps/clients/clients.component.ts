import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ClientsService} from "../../services/Clients.service";
import {catchError, Observable, throwError} from "rxjs";
import {Civilite, Commune, Couleurs, CreneaucoachDTO, Nationalite, Poids, Taille} from "../../models/coaching.model";
import {CreneauCoachService} from "../../services/creneau-coach.service";
import {CiviliteService} from "../../services/civilite.service";
import {CouleurYeuxService} from "../../services/couleur-yeux.service";
import {NationaliteService} from "../../services/nationalite.service";
import {CommuneService} from "../../services/commune.service";
import {CoachService} from "../../services/coach.service";
import {TailleService} from "../../services/taille.service";
import {PoidService} from "../../services/poid.service";
import {ToastService} from "../../services/toast.service";

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  Path = {
    user : "assets/img/user.jpeg"
  }

  clientForm : FormGroup | any ;

  public imagePath : any ;
  imageURL : any ;
  useFile : any ;
  Errormessage ? : String = "" ;

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
              private fb : FormBuilder) {
  }

  ngOnInit(): void {
    this.Path;

    this.Path;
    this.onGetCreneauData();
    this. getSelectedCivilites();
    this. getSelectedCouleursYeux();
    this.getNationalites();
    this.onGetCommune();
    this.onGetPoids();
    this.onGetTaille();

    this.clientForm = this.fb.group({
      nom : ["",[Validators.required]],
      telephone : ["" , Validators.required],
      email : ["" , Validators.email],
      danais : ["" , Validators.required],
      lieu_naissance : ["",Validators.required],
      nationalite : ["",Validators.required],
      taille : ["",Validators.required],
      poids : ["",Validators.required],
      experience_pro : ["" ,Validators.required],
      couleur_des_yeux : ["",Validators.required],
      sexe : ["",Validators.required],
      civilite : ["",Validators.required],
      imageUpload : [""],
      joursD : [""],
      heureD : [""],
      heureF : [""],
      quartier : [""],
      commune : [""],
      avenue : [""],
      numero : [""],
    })

  }

  onSaveClient(){}

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
        this.clientForm.patchValue({
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

  createClient(){

  }

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
          return throwError(this.Errormessage);
        })
    )
  }

  getNationalites(){
    this.NationalitesData = this.nationaliteService.getNationalites().pipe(
        catchError(err => {
          this.Errormessage = err.message() ;
          return throwError(this.Errormessage)
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



}
