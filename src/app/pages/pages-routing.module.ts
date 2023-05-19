import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageContactComponent } from './page-contact/page-contact.component';
import { PagePrivacyPolicyComponent } from './page-privacy-policy/page-privacy-policy.component';
import { PageGalleryComponent } from './page-gallery/page-gallery.component';
import { Language } from '../shared/models/language.interface';
import { TextService } from '../shared/service/text.service';
import { PageProjectComponent } from './page-project/page-project.component';
import { PageAboutComponent } from './page-about/page-about.component';
import { PageEventComponent } from './page-event/page-event.component';

const language: Language = TextService.getTextByLocal();
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'contact',
        component: PageContactComponent,
         data: {
          title: language.contact,
          breadcrumb: language.contact,         
        }
      },
      {
        path: 'project',
        component: PageProjectComponent,
         data: {
          title: language.myProjects,
          breadcrumb: language.myProjects,         
        }
      },
      {
        path: 'about',
        component: PageAboutComponent,
         data: {
          title: language.about,
          breadcrumb: language.about,         
        }
      },
      {
        path: 'event',
        component: PageEventComponent,
         data: {
          title: language.listOfEvents,
          breadcrumb: language.listOfEvents,         
        }
      },
      {
        path: 'privacy-policy',
        component: PagePrivacyPolicyComponent,
         data: {
          title: language.privacyPolicy,
          breadcrumb: language.privacyPolicy, 
        }
      },
      {
        path: 'gallery',
        component: PageGalleryComponent,
         data: {
          title: language.gallery,
          breadcrumb: language.gallery, 
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
