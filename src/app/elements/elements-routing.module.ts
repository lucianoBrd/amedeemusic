import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DownloadComponent } from './download/download.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'about-me',
        component: AboutComponent,
         data: {
          
        }
      },
      {
        path: 'download/:file',
        component: DownloadComponent,
         data: {
          
        }
      },
      {
        path: 'contact',
        component: ContactComponent,
         data: {
          
        }
      },
      {
        path: '404',
        component: PageNotFoundComponent,
         data: {
          
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElementsRoutingModule { }
