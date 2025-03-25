import { Component, Input } from '@angular/core';
// import { ArticleListComponent } from '../article-list/article-list.component';
import { Article } from '../../model/article.model';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-article-thumbnail',
  imports: [CommonModule, RouterLink],
  templateUrl: './article-thumbnail.component.html',
  styleUrl: './article-thumbnail.component.scss'
})
export class ArticleThumbnailComponent {
  @Input()
  article!: Article;

}
