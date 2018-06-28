import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { HeaderComponent } from './header/header.component';  不能在这里导出？
import { LeftComponent } from './left/left.component';
// import { SanitizerDomPipe } from './pipe/sanitizer-dom.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ LeftComponent ],
  exports: [ LeftComponent ]
})
export class SharedModule { }
