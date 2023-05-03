import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/navigation/menu/menu.component';
import { TapToTopComponent } from './components/tap-to-top/tap-to-top.component';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { LoaderComponent } from './components/loader/loader.component';
import { LoaderBisWhiteComponent } from './components/loader-bis-white/loader-bis-white.component';
import { LoaderBisComponent } from './components/loader-bis/loader-bis.component';

@NgModule({
  declarations: [MenuComponent, TapToTopComponent, LoaderComponent, LoaderBisComponent, LoaderBisWhiteComponent],
  exports: [
    MenuComponent,
    LoaderComponent,
    LoaderBisComponent,
    LoaderBisWhiteComponent,
    TapToTopComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ToastrModule.forRoot()
  ]
})
export class SharedModule { }
