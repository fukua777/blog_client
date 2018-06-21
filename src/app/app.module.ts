import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRouterModule } from './app-router.module';

// 组件
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
// import { KnowledgeComponent } from './knowledge/knowledge.component';

// 模块
import { SharedModule } from './shared/shared.module';

import { HomeModule } from './home/home.module';
import { KnowledgeModule } from './knowledge/knowledge.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    // KnowledgeComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HomeModule,
    KnowledgeModule,
    AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
