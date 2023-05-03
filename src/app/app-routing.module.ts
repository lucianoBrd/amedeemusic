import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MusicComponent } from "./layouts/music/music.component";
import { ElementsComponent } from './elements/elements.component';
export const routes: Routes = [
  {
    path: '',
    component: MusicComponent,
  },
  {
    path: '',
    component: ElementsComponent,
    loadChildren: () => import('./elements/elements.module').then(m => m.ElementsModule),
    data: {

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
