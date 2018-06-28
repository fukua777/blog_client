import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KnowledgeRouterModule } from './knowledge-router.module';

import { KnowledgeComponent } from './knowledge.component';
import { ArticleComponent } from './article/article.component';
import { CollectComponent } from './collect/collect.component';

// 引入dom安全管道
import { SanitizerDomPipe } from '../shared/pipe/sanitizer-dom.pipe';

import { ArticleService } from './article/article.service';
import { ArticleDetailComponent } from './article-detail/article-detail.component';

@NgModule({
  imports: [
    CommonModule,
    KnowledgeRouterModule
  ],
  declarations: [ KnowledgeComponent, ArticleComponent, CollectComponent, ArticleDetailComponent, SanitizerDomPipe ],
  providers: [
    ArticleService
  ]
})
export class KnowledgeModule { }
