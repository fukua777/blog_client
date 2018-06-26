import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRouterModule } from './app-router.module';
import { AppIntercerptor } from './app.interceptor';

// 组件
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';

// 模块
import { SharedModule } from './shared/shared.module';

import { HomeModule } from './home/home.module';
import { KnowledgeModule } from './knowledge/knowledge.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    HomeModule,
    KnowledgeModule,
    AppRouterModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AppIntercerptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
