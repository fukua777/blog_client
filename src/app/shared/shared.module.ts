import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { HeaderComponent } from './header/header.component';  不能在这里导出？
import { LeftComponent } from './left/left.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ LeftComponent ],
  exports: [ LeftComponent ]
})
export class SharedModule { }
