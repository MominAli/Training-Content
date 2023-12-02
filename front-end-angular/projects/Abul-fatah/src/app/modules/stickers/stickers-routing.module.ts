import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StickersPageComponent } from './pages/stickers-page/stickers-page.component';

const routes: Routes = [
  { path: '', component:StickersPageComponent }
 ]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StickersRoutingModule { }
