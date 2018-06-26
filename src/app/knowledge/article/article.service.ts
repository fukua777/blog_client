import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class ArticleService {
    constructor(
        public http: HttpClient
    ) {}

    // 获取列表
    // 获取列表
    getArticleList() {
        return this.http.get('/article/getList');
        // this.http.get('/article/getList').subscribe( data => {
        // // console.log(data);
        // this.dataList = data['result'];
        // // console.log(this.dataList);
        // });
    }
    // 获取详情
    getArticleDetail(id) {
        return this.http.get(`/article/getDetail?id=${id}`);
        // this.http.get('/article/getDetail?id=3').subscribe( data => {
        // console.log(data);
        // this.dataDetail = data['result'][0];
        // console.log(this.dataDetail);
        // });
    }
}
