import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ArticlePageComponent } from './pages/article-page/article-page.component';
// import { ArticlePageComponent } from './components/article-list';
// import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Accueil
  { path: 'article/:id', component: ArticlePageComponent }, // Détails d'un article
//   { path: '**', component: NotFoundPageComponent } // Page 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
