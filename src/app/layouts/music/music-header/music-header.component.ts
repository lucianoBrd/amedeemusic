import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/shared/service/sidebar.service';

@Component({
  selector: 'app-music-header',
  templateUrl: './music-header.component.html',
  styleUrls: ['./music-header.component.scss']
})
export class MusicHeaderComponent implements OnInit {
  constructor(private sidebarService: SidebarService) { }

  ngOnInit() {
  }

  sideBar(value) {
    this.sidebarService.sendClickEvent(value);
  }

}
