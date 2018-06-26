import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './home.component';
import { HomeRightComponent } from './home-right/home-right.component';

import { HomeRightService } from './home-right/home-right.service';

@NgModule({
  imports: [
      CommonModule,
      SharedModule
  ],
  declarations: [HomeComponent, HomeRightComponent],
  providers: [
      HomeRightService
  ]
})
export class HomeModule { }
