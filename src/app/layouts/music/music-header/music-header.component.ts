import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Language } from 'src/app/shared/models/language.interface';
import { Social } from 'src/app/shared/models/social.interface';
import { DataService } from 'src/app/shared/service/data.service';
import { SidebarService } from 'src/app/shared/service/sidebar.service';
import { TextService } from 'src/app/shared/service/text.service';

@Component({
  selector: 'app-music-header',
  templateUrl: './music-header.component.html',
  styleUrls: ['./music-header.component.scss']
})
export class MusicHeaderComponent implements OnInit {
  public socials: Social[];
  public imagePath: String;
  public language: Language;

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private dataService: DataService, 
    private textService: TextService, 
    private sidebarService: SidebarService
  ) {
    this.dataService.PAGE = '/api/socials';
    this.language = this.textService.getTextByLocal();
  }

  ngOnInit() {
    this.dataService.sendGetRequest().pipe(takeUntil(this.destroy$)).subscribe((data: Social[]) => {
      this.socials = data;
    })
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  sideBar(value) {
    this.sidebarService.sendClickEvent(value);
  }

}
