import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home-right',
  templateUrl: './home-right.component.html',
  styleUrls: ['./home-right.component.scss']
})
export class HomeRightComponent implements OnInit {
  private dataList: Array<any>;
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.get_list();
  }
  // 获取列表
  public get_list() {
    this.http.get('/home/getTipsList').subscribe( data => {
      console.log(data);
      this.dataList = data['data'];
    });
  }
  // 发送
  public publish(textarea) {
    console.log(textarea.value);
    this.http.post('/home/postTip', { content: textarea.value}).subscribe( data => {
      console.log(data);
    });
  }

}
