import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlquranRoutingModule } from './alquran-routing.module';
import { AlquranPageComponent } from './pages/alquran-page/alquran-page.component';


@NgModule({
  declarations: [
    AlquranPageComponent
  ],
  imports: [
    CommonModule,
    AlquranRoutingModule
  ]
})
export class AlquranModule { }
