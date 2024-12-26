import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public sidebarMenuopened = true;
  @ViewChild('contentWrapper', { static: false }) contentwrapper: any;
   constructor(private rendered : Renderer2){}

   
  ngOnInit(){
    
    this.rendered.removeClass(document.querySelector('app-root'), 'login-page');
    this.rendered.removeClass(document.querySelector('app-root'), 'login-page');
  }


  mainSiderHeight(height: any) {
    
  }


  toggleMenuSiderBar() {

    if (this.sidebarMenuopened) {

      this.rendered.removeClass(document.querySelector('app-root'), 'login-page');
      this.rendered.addClass(document.querySelector('app-root'), 'sidebar-collapse');
      this.sidebarMenuopened = false
    } else {
      this.rendered.removeClass(document.querySelector('app-root'), 'sidebar-collapse');
      this.rendered.addClass(document.querySelector('app-root'), 'sidebar-open');
      this.sidebarMenuopened = true
    }
  }

}
