import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticleComponent } from './article/article.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { CollectComponent } from './collect/collect.component';

const routes: Routes = [
    {
        path: 'article',
        component: ArticleComponent
    },
    {
        path: 'article/:id',
        component: ArticleDetailComponent
    },
    {
        path: 'collect',
        component: CollectComponent
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ],
    providers: [],
})
export class KnowledgeRouterModule {}
