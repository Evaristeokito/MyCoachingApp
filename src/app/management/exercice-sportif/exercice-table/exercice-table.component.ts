import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ExerciseService} from "../Exercise.service";
import {IExercice} from "../../../shared/models/iexercice";

@Component({
  selector: 'app-exercice-tables',
  templateUrl: './exercice-table.component.html',
  styleUrls: ['./exercice-table.component.css'],
})
export class ExerciceTableComponent implements OnInit {

  exerciceData : IExercice[] = [];
  page : number = 1;
  pageSize : number = 5;

  constructor(
    private route : Router,
    private service : ExerciseService
  ){}

  ngOnInit(): void {
    this.getExercices()
  }

  getExercices() {
    this.service.getExercices().subscribe({
      next : (data) => {
        this.exerciceData = data;
      },
      error : (error : Error) => {
        console.log(error.message);
      }
    })
  }


}
