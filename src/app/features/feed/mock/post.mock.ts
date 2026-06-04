import { Post } from '../../../shared/interfaces/post.interface';

export const MOCK_POSTS: Post[] = [
  {
    id: crypto.randomUUID(),
    author: 'Joel',
    content: 'Mi primer post en Angular SSR 🚀',
    likes: 12,
    createdAt: new Date(),
    comments: []
  },
  {
    id: crypto.randomUUID(),
    author: 'Ana',
    content: 'Signals son increíbles 🔥',
    likes: 5,
    createdAt: new Date(),
    comments: []
  }
];