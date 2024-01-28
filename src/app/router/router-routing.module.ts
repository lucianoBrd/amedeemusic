import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PagesComponent } from '../pages/pages.component';
import { Language } from "../shared/models/language.interface";
import { TextService } from "../shared/service/text.service";
import { MusicComponent } from "../music/music.component";
import { BlogComponent } from "../blog/blog.component";
import { AuthGuardMaintenance } from "../shared/service/permission.service";

const language: Language = TextService.getTextByLocal();
const routes: Routes = [
  {
    path: '',
    component: MusicComponent,
    canActivate: [AuthGuardMaintenance],
  },
  {
    path: 'page',
    component: PagesComponent,
    loadChildren: () => import('../pages/pages.module').then(m => m.PagesModule),
    data: {
      breadcrumb: language.pages,
    },
    canActivate: [AuthGuardMaintenance],
  },
  {
    path: 'blog',
    component: BlogComponent,
    loadChildren: () => import('../blog/blog.module').then(m => m.BlogModule),
    data: {
      breadcrumb: language.blog,
      path: '/blog/list',
    },
    canActivate: [AuthGuardMaintenance],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RouterRoutingModule { }
