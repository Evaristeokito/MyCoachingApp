import { AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit,AfterViewInit  {

  @ViewChild('mainsidebar', { static: false }) mainSidebar: any;
  @Output() mainSidebarHeight: EventEmitter<any> = new EventEmitter<any>();

  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
    this.mainSidebarHeight.emit(this.mainSidebar.nativeElement.offsetHeight)
  }



  imgPath = {
    logo: "assets/img/logo.png",
    user : "assets/img/user.jpeg"
  }
  ngOnInit(): void {
    this.imgPath
  }



}
