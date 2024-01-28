import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { PageMaintenanceComponent } from "./page-maintenance/page-maintenance.component";
import { AuthGuarNotdMaintenance, AuthGuardMaintenance } from "./shared/service/permission.service";
import { RouterComponent } from "./router/router.component";

export const routes: Routes = [
  {
    path: '',
    component: RouterComponent,
    loadChildren: () => import('./router/router.module').then(m => m.RouterModule),
    canActivate: [AuthGuardMaintenance],
  },
  {
    path: '404',
    component: PageNotFoundComponent,
    canActivate: [AuthGuardMaintenance],
  },
  {
    path: 'maintenance',
    component: PageMaintenanceComponent,
    canActivate: [AuthGuarNotdMaintenance],
  },
  {
    path: ':locale',
    component: RouterComponent,
    loadChildren: () => import('./router/router.module').then(m => m.RouterModule),
    canActivate: [AuthGuardMaintenance],
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
