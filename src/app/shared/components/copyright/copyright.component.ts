import { Component, OnDestroy, OnInit } from '@angular/core';
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
import { PoliticService } from '../../service/politic.service';

@Component({
  selector: 'app-copyright',
  templateUrl: './copyright.component.html',
  styleUrls: ['./copyright.component.scss']
})
export class CopyrightComponent implements OnInit, OnDestroy {
  public menuItems: Menu[];
  public socials: Social[];
  public politic: Politic;
  public language: Language;
  public appName: string = ConfigDB.data.appName;
  public year: number = new Date().getFullYear();

  private destroy$: Subject<boolean> = new Subject<boolean>();
  
  constructor(
    public navServices: NavService,
    private socialService: SocialService,
    private politicService: PoliticService,
    private dataService: DataService, 
    private modalService: NgbModal, 
  ) { 
    this.language = TextService.getTextByLocal();
  }

  ngOnInit() {
    this.navServices.items.pipe(takeUntil(this.destroy$)).subscribe(menuItems => {
      let mi: Menu[] = [];
      menuItems.forEach(menuItem => {
        if (menuItem && (menuItem.type == 'link' || menuItem.type == 'extLink' || menuItem.type == 'extTabLink')) {
          mi.push(menuItem);
        }
      });
      this.menuItems = mi;
    });
    this.dataService.sendGetRequest('/api/socials').pipe(takeUntil(this.destroy$)).subscribe(
      (data: List<Social>) => {
        let socials: Social[] = data['hydra:member'];
        socials.sort((a, b) => a.fa.localeCompare(b.fa));
        this.socials = socials;
        this.socialService.setSocials(this.socials);
      },
      (error) => {
        this.socials = [];
        this.socialService.setSocials(this.socials);
      }
    );
    this.dataService.sendGetRequest('/api/politics?local.local=' + LanguageService.getLanguageCodeOnly()).pipe(takeUntil(this.destroy$)).subscribe(
      (data: List<Politic>) => {
        let politics: Politic[] = data['hydra:member'];

        if (politics) {
          this.politic = politics[politics.length - 1];
          this.politicService.setPolitic(this.politic);
        } else {
          this.politic = null;
          this.politicService.setPolitic(null);
        }
        
      },
      (error) => {
        this.politic = null;
        this.politicService.setPolitic(null);
      }
    );
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true, size: 'lg' });
  }

}
