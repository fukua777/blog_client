import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KnowledgeRouterModule } from './knowledge-router.module';

import { KnowledgeComponent } from './knowledge.component';
import { ArticleComponent } from './article/article.component';
import { CollectComponent } from './collect/collect.component';

@NgModule({
  imports: [
    CommonModule,
    KnowledgeRouterModule
  ],
  declarations: [KnowledgeComponent, ArticleComponent, CollectComponent]
})
export class KnowledgeModule { }
