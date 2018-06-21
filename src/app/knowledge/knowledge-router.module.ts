import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticleComponent } from './article/article.component';
import { CollectComponent } from './collect/collect.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/article',
        pathMatch: 'full'
    },
    {
        path: 'article',
        component: ArticleComponent
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
