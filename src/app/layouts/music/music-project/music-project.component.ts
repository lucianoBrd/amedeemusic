import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/shared/service/sidebar.service';

@Component({
  selector: 'app-music-project',
  templateUrl: './music-project.component.html',
  styleUrls: ['./music-project.component.scss']
})
export class MusicProjectComponent implements OnInit {

  constructor(private sidebarService: SidebarService) { }

  ngOnInit() {
  }

  sideBar(value) {
    this.sidebarService.sendClickEvent(value);
  }

  projects = [
    { 
      img:"assets/images/music/project/1.png",
      name:"decorner",
      musician:"musician",
    },
    { 
      img:"assets/images/music/project/album.jpg",
      name:"decorner",
      musician:"musician",
    },
    { 
      img:"assets/images/music/project/3.png",
      name:"decorner",
      musician:"musician",
    }
  ]
  
  artistscarouselOptions= {
    items: 3,
    margin: 60,
    nav: false,
    dots:false,
    autoplay: false,
    slideSpeed: 300,
    paginationSpeed: 400,
    loop: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        992: {
            items: 3,
            margin: 30
        },
        1600: {
            margin: 30
        }
    }
  }

}
