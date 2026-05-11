import {Component, OnInit} from '@angular/core';
import {NgClass, NgForOf} from "@angular/common";

@Component({
  selector: 'app-dash-top-card',
  standalone: true,
  imports: [
    NgClass,
    NgForOf
  ],
  templateUrl: './dash-top-card.component.html',
  styleUrl: './dash-top-card.component.css'
})
export class DashTopCardComponent implements OnInit {

    ngOnInit(): void {
        
    }

    constructor() {
    }

  stats = [
    { title: "Dossiers", value: 10, icon: "fas fa-light fa-folders", color: "bg-info" },
    { title: "Personnel", value: 15, icon: "fas fa-thin fa-users", color: "bg-success" },
    { title: "Congés", value: 20, icon: "fas fa-light fa-bell-slash", color: "bg-warning" },
    { title: "Presences", value: 5, icon: "fas fa-light fa-bell", color: "bg-danger"}
  ];

}
