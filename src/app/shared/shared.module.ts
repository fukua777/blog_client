import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { HeaderComponent } from './header/header.component';  不能在这里导出？
import { LeftComponent } from './left/left.component';
// 引入dom安全管道
import { SanitizerDomPipe } from '../shared/pipe/sanitizer-dom.pipe';
// 时间处理管道
import { MomentPipe } from '../shared/pipe/moment.pipe';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ LeftComponent, SanitizerDomPipe, MomentPipe],
  exports: [ LeftComponent, SanitizerDomPipe, MomentPipe ]
})
export class SharedModule { }
