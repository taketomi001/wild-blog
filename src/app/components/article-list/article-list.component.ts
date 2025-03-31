import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { Article } from '../../model/article.model';
import { ArticleThumbnailComponent } from '../article-thumbnail/article-thumbnail.component';

@Component({
  selector: 'app-article-list',
  imports: [ArticleThumbnailComponent],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.scss',
})
export class ArticleListComponent {
  
  articles: Article[] = [
    
    {
      id: 1,
      title: 'Premier article',
      content: 'Voici le contenu du premier article.',
      image: 'https://placehold.co/150x150',
      createdAt: new Date('2025-02-01'),
      isPublished: true,
      likeCount: 250,
      categoryName: 'Angular',
      isLiked: false
    },
    {
      id: 2,
      title: 'Deuxième article',
      content: 'Voici le contenu du deuxième article.',
      image: 'https://placehold.co/150x150',
      createdAt: new Date('2025-03-10'),
      isPublished: true,
      likeCount: 150,
      categoryName: 'React',
      isLiked: true
    },
    {
      id: 3,
      title: 'Article non publié',
      content: 'Voici un article non publié.',
      image: 'https://placehold.co/150x150',
      createdAt: new Date('2025-01-15'),
      isPublished: false,
      likeCount: 30,
      categoryName: 'Vue.js',
      isLiked: false
    }
  ];
  // messageFromChild: string = '';
  // handleNotification(message: string) {
  //   this.messageFromChild = message;
    
  // }
  updateLikeStatus(articleId: number) {
    const article = this.articles.find(a => a.id === articleId);
    if (article) {
      article.isLiked = !article.isLiked;  
    }
  }  
}

