import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  public dataList: Array<any> = null;
  public dataDetail: any;
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.getArticleList();
    this.getArticleDetail();
  }
  // 获取列表
  getArticleList() {
    this.http.get('/article/getList').subscribe( data => {
      // console.log(data);
      this.dataList = data['result'];
      // console.log(this.dataList);
    });
  }
  // 获取详情
  getArticleDetail() {
    this.http.get('/article/getDetail?id=3').subscribe( data => {
      console.log(data);
      this.dataDetail = data['result'][0];
      console.log(this.dataDetail);
    });
  }

}
