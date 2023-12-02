import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AlquranPageComponent} from './pages/alquran-page/alquran-page.component'

const routes: Routes = [
  { path: '', component: AlquranPageComponent }
 ]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlquranRoutingModule { }
