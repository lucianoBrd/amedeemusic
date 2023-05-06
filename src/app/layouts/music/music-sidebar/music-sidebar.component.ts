import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/shared/service/sidebar.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-music-sidebar',
  templateUrl: './music-sidebar.component.html',
  styleUrls: ['./music-sidebar.component.scss']
})
export class MusicSidebarComponent implements OnInit {
  clickEventsubscription: Subscription;
  sideBarDispaly: string = "none";

  constructor(private sidebarService: SidebarService) { 
    this.clickEventsubscription =    
    this.sidebarService.getClickEvent().subscribe(()=>{
      this.sideBar();
    })
  }

  ngOnInit() {
  }

  sideBar(){
    (this.sideBarDispaly=='none')?this.sideBarDispaly='block':this.sideBarDispaly='none'
  }

}
