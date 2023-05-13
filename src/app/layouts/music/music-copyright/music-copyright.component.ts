import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject, takeUntil } from 'rxjs';
import { ConfigDB } from 'src/app/shared/data/config';
import { Language } from 'src/app/shared/models/language.interface';
import { List } from 'src/app/shared/models/list.interface';
import { Menu } from 'src/app/shared/models/menu.interface';
import { Politic } from 'src/app/shared/models/politic.interface';
import { Social } from 'src/app/shared/models/social.interface';
import { DataService } from 'src/app/shared/service/data.service';
import { LanguageService } from 'src/app/shared/service/language.service';
import { NavService } from 'src/app/shared/service/nav.service';
import { SocialService } from 'src/app/shared/service/social.service';
import { TextService } from 'src/app/shared/service/text.service';

@Component({
  selector: 'app-music-copyright',
  templateUrl: './music-copyright.component.html',
  styleUrls: ['./music-copyright.component.scss']
})
export class MusicCopyrightComponent implements OnInit {
  public menuItems: Menu[];
  public socials: Social[];
  public politic: Politic;
  public language: Language;
  public appName: string = ConfigDB.data.appName;
  public year: number = new Date().getFullYear();

  destroy$: Subject<boolean> = new Subject<boolean>();
  
  constructor(
    public navServices: NavService,
    private socialService: SocialService,
    private dataService: DataService, 
    private modalService: NgbModal, 
    private textService: TextService,
  ) { 
    this.language = this.textService.getTextByLocal();
  }

  ngOnInit() {
    this.navServices.items.subscribe(menuItems => {
      this.menuItems = menuItems
    });
    this.socialService.loadedSocials$.subscribe((data: Social[]) => {
      this.socials = data;
    });
    this.dataService.sendGetRequest('/api/politics?local.local=' + LanguageService.getLanguageCodeOnly()).pipe(takeUntil(this.destroy$)).subscribe((data: List<Politic>) => {
      let politics: Politic[] = data['hydra:member'];

      if (politics) {
        this.politic = politics[politics.length - 1];
      } else {
        this.politic = null;
      }
      
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true, size: 'lg' });
  }

}
