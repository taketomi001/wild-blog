// app/models/article.model.ts

export interface Article {
  id: number;            // Ajout de la propriété id
  title: string;
  content: string;
  image: string;
  createdAt: Date;
  isPublished: boolean;
  likeCount: number;
  categoryName: string;
  isLiked: boolean;      // Ajout de la propriété isLiked
}
