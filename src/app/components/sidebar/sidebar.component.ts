import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  sidebars:string[]=['Car','Brand','Color','Rent','User'];
  
  currentSidebar:string= 'Car';

  constructor() { }

  ngOnInit(): void {
  }

  setCurrentSidebar(sidebar:string){
    this.currentSidebar = sidebar; 
  }

  getCurrentSidebar(sidebar:string) {
    if (sidebar == this.currentSidebar) {
      return 'list-group-item list-group-item-warning active'; //Her sidebar için döndürürken onu active eder.
    } else {
      return 'list-group-item list-group-item-warning';
    }
  }

  getAllSidebarClass(){
    if(!this.currentSidebar){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }
}