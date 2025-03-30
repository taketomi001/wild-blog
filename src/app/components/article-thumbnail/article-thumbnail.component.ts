import { Component, EventEmitter, Input, Output } from '@angular/core';
// import { ArticleListComponent } from '../article-list/article-list.component';

import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Article } from '../../model/article.model';

@Component({
  selector: 'app-article-thumbnail',
  imports: [CommonModule, RouterLink],
  templateUrl: './article-thumbnail.component.html',
  styleUrl: './article-thumbnail.component.scss',
})
export class ArticleThumbnailComponent {
  @Input() article!: Article;
  @Output() notifyParent: EventEmitter<string> = new EventEmitter<string>();
  sendNotification() {
    this.article.isLiked = !this.article.isLiked;
    this.article.isLiked ? this.notifyParent.emit("déja liker") : this.notifyParent.emit("") ;

  }
}
