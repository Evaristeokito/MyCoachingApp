import { AfterViewInit, 
  Component, 
  EventEmitter, OnInit, 
  Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit, AfterViewInit {
  @ViewChild('mainsidebar', { static: false }) mainSidebar: any;
  @Output() mainSidebarHeight: EventEmitter<any> = new EventEmitter<any>();

  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
    this.mainSidebarHeight.emit(this.mainSidebar.nativeElement.offsetHeight);
  }

  constructor(private router: Router) {}

  isDashboardMenuActive(): boolean {
    return this.router.url.startsWith('/');
  }

  isAgentMenuActive(): boolean {
    return this.router.url.startsWith('/management/agents');
  }

  isDossierMenuActive(): boolean {
    return this.router.url.startsWith('/management/dossiers');
  }

  isFormationMenuActive(): boolean {
    return this.router.url.startsWith('/management/formations');
  }

  isLangueMenuActive(): boolean {
    return this.router.url.startsWith('/management/langues');
  }

  isCompetenceMenuActive(): boolean {
    return this.router.url.startsWith('/management/competences');
  }

  isExperienceMenuActive(): boolean {
    return this.router.url.startsWith('/management/experience');
  }

  isMenuActive(route: string): boolean {
    return this.router.url.startsWith(route);
  }

  imgPath = {
    logo: 'assets/img/logo.png',
    user: 'assets/img/user.jpeg',
  };
  ngOnInit(): void {
    this.imgPath;
  }
}
