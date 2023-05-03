import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MusicComponent } from './music/music.component';
import { ConfigDB } from '../shared/data/config';

const routes: Routes = [
  {
    path: '',
    component: MusicComponent,
    data: {
      title: ConfigDB.data.appName
    }
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutsRoutingModule { }
