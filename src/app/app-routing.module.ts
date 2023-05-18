import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PagesComponent } from './pages/pages.component';
import { Language } from "./shared/models/language.interface";
import { TextService } from "./shared/service/text.service";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { MusicComponent } from "./music/music.component";

const language: Language = TextService.getTextByLocal();
export const routes: Routes = [
  {
    path: '',
    component: MusicComponent,
  },
  {
    path: '404',
    component: PageNotFoundComponent,
  },
  {
    path: 'page',
    component: PagesComponent,
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
    data: {
      breadcrumb: language.pages,
    }
  },
  {
    path: '**',
    redirectTo: '/404',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // preloadingStrategy: PreloadAllModules,
      anchorScrolling: "enabled",
      scrollPositionRestoration: "enabled",
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
