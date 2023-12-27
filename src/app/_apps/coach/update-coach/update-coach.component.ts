import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CreneauCoachService} from "../../../services/creneau-coach.service";
import {CiviliteService} from "../../../services/civilite.service";
import {CouleurYeuxService} from "../../../services/couleur-yeux.service";
import {NationaliteService} from "../../../services/nationalite.service";
import {CommuneService} from "../../../services/commune.service";
import {CoachService} from "../../../services/coach.service";
import {TailleService} from "../../../services/taille.service";
import {PoidService} from "../../../services/poid.service";
import {ToastService} from "../../../services/toast.service";
import {catchError, Observable, throwError} from "rxjs";
import {Civilite, Commune, Couleurs, CreneaucoachDTO, Nationalite, Poids, Taille} from "../../../models/coaching.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-update-coach',
  templateUrl: './update-coach.component.html',
  styleUrls: ['./update-coach.component.css']
})
export class UpdateCoachComponent implements OnInit{

    Path = {
        user : "assets/img/user.jpeg"
    }

    coachForm: FormGroup | any ;

    public imagePath : any ;
    imageURL : any ;
    useFile : any ;
    Errormessage ? : String = "" ;
    submitted = false;
    coach_id :Number | any ;

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
                private activdRouter : ActivatedRoute,
                private fb : FormBuilder) {
       this.coach_id = this.activdRouter.snapshot.params["id"];
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
            nom_coach: [""],
            telephone : [""],
            telephone1 : [""],
            email : [""],
            danais : [""],
            lieu_naissance : [""],
            nationalite : ["",],
            taille : [""],
            poids : [""],
            experience_pro : [""],
            couleurYeux : [""],
            sexe : [""],
            civilite : [""],
            imageUpload : [""],
            joursD : [""],
            heureD : [""],
            heureF : [""],
            quartier : [""],
            commune : [""],
            avenue : [""],
            numero : [""],
        });

        this.editerCoach();
    }

    createCoach() {

    }

    editerCoach() {
        this.coachService.getCoach(this.coach_id).subscribe({
            next : (data) => {
                this.coachForm.patchValue({
                    nom_coach : data.nom_coach,
                    telephone : data.telephone,
                    telephone1: data.telephone1,
                    email : data.email,
                    danais : data.danais,
                    lieu_naissance : data.lieu_naissance,
                    nationalite : data.nationalite.nationalite,
                    taille : data.taille.taille,
                    poids : data.poids,
                    experience_pro : data.experience_pro,
                    couleurYeux : data.couleurYeux.nom,
                    sexe : data.sexe,
                    civilite : data.civilite.nom,
                    joursD : data.creneau.joursDisponible,
                    heureD : data.creneau.heureDebut,
                    heureF : data.creneau.heureFin,
                    quartier : data.quartier,
                    commune : data.commune.commune,
                    avenue : data.avenue,
                    numero : data.numero
                });
                console.log(data);
            },
            error : (err) => {
                console.log(err);
            }
        })
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
}
