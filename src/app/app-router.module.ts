import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { KnowledgeComponent } from './knowledge/knowledge.component';

import { ArticleComponent } from './knowledge/article/article.component';
import { CollectComponent } from './knowledge/collect/collect.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'knowledge',
        component: KnowledgeComponent,
        children: [
            {
                path: '',
                redirectTo: 'article',
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
        ]
    },
];

@NgModule({
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [ RouterModule ]
})
export class AppRouterModule { }
