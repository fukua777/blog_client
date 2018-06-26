import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class HomeRightService {
    constructor(
        public http: HttpClient
    ) {}

    // 获取列表
    public get_list() {
        return this.http.get('/home/getTipsList');
    }
    // 发布
    public publish(textarea) {
        return this.http.post('/home/postTip', { content: textarea.value });
    }
}
