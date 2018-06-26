import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

import { ArticleService } from '../article/article.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {
  public dataDetail: any;
  constructor(
    private service: ArticleService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.getArticleDetail(this.activatedRoute.snapshot.paramMap.get('id'));
  }
  // 获取详情
  getArticleDetail(id) {
    this.service.getArticleDetail(id).subscribe( data => {
        this.dataDetail = data['data'][0];
    });
  }
}
