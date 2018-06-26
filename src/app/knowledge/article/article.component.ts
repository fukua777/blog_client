import { Component, OnInit } from '@angular/core';

import { ArticleService } from './article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  public dataList: Array<any> = null;
  constructor(
      private service: ArticleService
  ) { }

  ngOnInit() {
    this.getArticleList();
  }
  // 获取列表
  getArticleList() {
      this.service.getArticleList().subscribe( data => {
          this.dataList = data['data'];
      });
  }

}
