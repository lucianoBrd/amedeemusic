import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageContactComponent } from './page-contact/page-contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PagePrivacyPolicyComponent } from './page-privacy-policy/page-privacy-policy.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'contact',
        component: PageContactComponent,
         data: {
          
        }
      },
      {
        path: 'privacy-policy',
        component: PagePrivacyPolicyComponent,
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
