import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StickersRoutingModule } from './stickers-routing.module';
import { StickersPageComponent } from './pages/stickers-page/stickers-page.component';


@NgModule({
  declarations: [
    StickersPageComponent
  ],
  imports: [
    CommonModule,
    StickersRoutingModule
  ]
})
export class StickersModule { }
