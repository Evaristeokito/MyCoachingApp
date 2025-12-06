import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './card-dashboard.component.html',
  styleUrl: './card-dashboard.component.css'
})
export class CardDashboardComponent {

  @Input() title!: string;
  @Input() value!: number;
  @Input() icon!: string;
  @Input() color: string = 'primary';
}
