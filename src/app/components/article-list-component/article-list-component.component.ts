import { Component } from '@angular/core';
import { Article } from '../model/article.model';
@Component({
  selector: 'app-article-list-component',
  imports: [],
  templateUrl: './article-list-component.component.html',
  styleUrl: './article-list-component.component.scss'
})
export class ArticleListComponentComponent {


    article: Article = {
      title: 'Titre de l\'article',
      content: 'Voici le contenu de l\'article.',
      image: 'https://placehold.co/150x150',
      createdAt: new Date(),
      isPublished: false,
      likeCount: 0,
      categoryName: 'Angular',
    };
  }

