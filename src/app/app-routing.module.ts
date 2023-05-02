import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MusicComponent } from "./layouts/music/music.component";
export const routes: Routes = [
  {
    path: '',
    component: MusicComponent,
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
