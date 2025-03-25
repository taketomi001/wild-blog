import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ArticlePageComponent } from './pages/article-page/article-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { SignupFormPageComponent } from './pages/signup-form-page/signup-form-page.component';
import { ArticleThumbnailComponent } from './components/article-thumbnail/article-thumbnail.component';
// import { ArticlePageComponent } from './components/article-list';
// import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Accueil
  { path: 'article/:id', component: ArticlePageComponent }, // Détails d'un article
  { path: 'contact', component: ContactPageComponent }, // Détails d'un article
  { path: 'signup', component: SignupFormPageComponent }, 
  { path: 'articleThumbail', component: ArticleThumbnailComponent }, 
  { path: '**', component: NotFoundPageComponent } // Page 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
