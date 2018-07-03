import { Component, OnInit } from '@angular/core';

import { HomeRightService } from './home-right.service';

@Component({
  selector: 'app-home-right',
  templateUrl: './home-right.component.html',
  styleUrls: ['./home-right.component.scss']
})
export class HomeRightComponent implements OnInit {
  public dataList: Array<any>;
  constructor(
    private service: HomeRightService
  ) { }

  ngOnInit() {
      this.getList();
  }
  // 获取列表
  public getList() {
      this.service.get_list().subscribe( data => {
          this.dataList = data['data'];
      });
  }
  // 发布
  publish(textarea) {
      if (!textarea || !textarea.value) {
            return;
      }
      this.service.publish(textarea).subscribe( data => {
          if (data && data['status']) {
              this.getList();
              alert('发布成功');
              textarea.value = null;
          }
      });
  }

}
