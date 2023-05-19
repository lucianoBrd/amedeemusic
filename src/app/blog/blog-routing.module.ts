import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogListComponent } from './blog-list/blog-list.component';
import { Language } from '../shared/models/language.interface';
import { TextService } from '../shared/service/text.service';

const language: Language = TextService.getTextByLocal();
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list',
        component: BlogListComponent,
         data: {
          title: language.articleList,
          breadcrumb: language.articleList,         
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
