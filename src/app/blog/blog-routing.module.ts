import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogListComponent } from './blog-list/blog-list.component';
import { Language } from '../shared/models/language.interface';
import { TextService } from '../shared/service/text.service';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';

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
      {
        path: 'detail/:slug',
        component: BlogDetailComponent,
         data: {
          title: language.post,
          breadcrumb: language.post,         
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
