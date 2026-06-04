import { Comment } from './comment.interface';

export interface Post {
  id: string;
  author: string;
  content: string;
  image?: string;
  likes: number;
  createdAt: Date;
  comments: Comment[];
}