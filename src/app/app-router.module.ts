import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { KnowledgeComponent } from './knowledge/knowledge.component';

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
        component: KnowledgeComponent
    },
];

@NgModule({
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [ RouterModule ]
})
export class AppRouterModule { }
