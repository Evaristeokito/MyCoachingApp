import { NgFor, NgIf, NgForOf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogContent, MatDialogRef } from "@angular/material/dialog";
import { IAgent, ILangues } from 'src/app/shared/models/agents';
import { UtilsService } from '../../utils.service';
import { ToastService } from 'src/app/shared/services/toast.service';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';
import { AgentService } from 'src/app/management/agents/agents.service';

@Component({
  selector: 'app-create-langue',
  standalone: true,
  imports: [
    MatDialogContent,
    NgIf,
    ReactiveFormsModule,
    NgFor
],
  templateUrl: './createLangue.html',
  styleUrl: './createLangue.css',
})
export class CreateLangue implements OnInit {

   langueForm: FormGroup | any;
    loading : boolean = false ;
    errorMessage: String = "";
    langueData : ILangues[] = [];
    agentData : IAgent [] = [];
  
    constructor(private service : UtilsService,
                private fb:FormBuilder,
                private toast : ToastService,
                private agentService : AgentService,
                private dialogRef: MatDialogRef<CreateLangue>,
                private snackbarService: SnackbarService,
                @Inject(MAT_DIALOG_DATA) public data: any,
    ) {
      this.langueForm = this.fb.group({
        id: [data ? data.id : null],
        name : [data ? data.name : [Validators.required]],
        level : [data ? data.level : [Validators.required]],
        idAgent  : [''],
        Observation : [data ? data.Observation : [Validators.required]],
      });
    }
  
  
    ngOnInit(): void {
      this.getAllAgents();
    }
 
    languesForms(){

    }
  
    getLangues() {
      this.service.getLangues().subscribe({
        next : (data) => {
         this.langueData = data;
        },
        error : (error :any) => {
          console.log(error.error.message);
        }
      })
    }

    getAllAgents() {
      this.agentService.getAgents().subscribe({
        next : data => {
          this.agentData = data;
          console.log("la liste des agents :" , this.agentData);
        },
        error : error => {
          console.log(error.error.message);
        }
      })
    }
  
    onSubmit() {
      this.loading=true
      if(this.data.id){
        if (this.langueForm.valid){
          this.service.updateLangue(this.data.id,this.langueForm.value).subscribe({
            next: (data) => {
              setTimeout(()=> {
                this.snackbarService.showSuccessMessage("Langue is updated successfully")
                this.langueForm.reset();
                this.dialogRef.close();
                this.loading=false;
                this.dialogRef.afterClosed().subscribe((res)=> {
                  if(res){
                    this.getLangues();
                  }
                })
              },2000)
            },
            error: (err) => {
              console.log(err.error.message);
            },
          });
        }
      }else {
        if (this.langueForm.valid){
          this.service.createLangue(this.langueForm.value).subscribe({
            next: (data) => {
              setTimeout(()=> {
                this.snackbarService.showSuccessMessage("Langue is created successfully")
                this.langueForm.reset();
                this.dialogRef.close();
                this.langueForm.reset();
              },2000)
            },
            error: (err) => {
              console.log(err.error.message);
            },
          });
        }
      }
    }
  
    get Name(){
      return this.langueForm.controls["name"];
    }
  
    get Level(){
      return this.langueForm.controls["level"];
    }
 }
