import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('../app/modules/home/home.module').then(m => m.HomeModule) },
  { path: 'books', loadChildren: () => import('../app/modules/books/books.module').then(m => m.BooksModule) },
  { path: 'media', loadChildren: () => import('../app/modules/media/media.module').then(m => m.MediaModule) },
  { path: 'alquran', loadChildren: () => import('../app/modules/alquran/alquran.module').then(m => m.AlquranModule) },
  { path: 'stickers', loadChildren: () => import('../app/modules/stickers/stickers.module').then(m => m.StickersModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
