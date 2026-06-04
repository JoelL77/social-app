import {
  effect,
  inject,
  Injectable,
  PLATFORM_ID,
  signal
} from '@angular/core';

import { isPlatformBrowser } from '@angular/common';

import { Post } from '../../../shared/interfaces/post.interface';

import { Comment } from '../../../shared/interfaces/comment.interface';
import { MOCK_POSTS } from '../mock/post.mock';
import { AuthStore } from '../../auth/store/auth.store.service';


@Injectable({
  providedIn: 'root'
})
export class PostsStore {

  private platformId = inject(PLATFORM_ID);

  posts = signal<Post[]>([]);

  authStore = inject(AuthStore)

  constructor() {

    if (isPlatformBrowser(this.platformId)) {

      const savedPosts = localStorage.getItem('posts');

      if (savedPosts) {

        this.posts.set(JSON.parse(savedPosts));

      } else {

        this.posts.set(MOCK_POSTS);

      }

      effect(() => {

        localStorage.setItem(
          'posts',
          JSON.stringify(this.posts())
        );

      });

    } else {

      // SSR fallback

      this.posts.set(MOCK_POSTS);

    }
  }

  createPost(content: string) {

    const newPost: Post = {
      id: crypto.randomUUID(),
      author: this.authStore.user()?.name || 'Current User',
      content,
      likes: 0,
      createdAt: new Date(),
      comments: []
    };

    this.posts.update(posts => [
      newPost,
      ...posts
    ]);
  }

  addComment(
    postId: string,
    message: string
  ) {

    const comment: Comment = {
      id: crypto.randomUUID(),
      postId,
      author: this.authStore.user()?.name || 'Current User',
      message,
      createdAt: new Date()
    };

    this.posts.update(posts =>
      posts.map(post => {

        if (post.id === postId) {

          return {
            ...post,
            comments: [
              ...post.comments,
              comment
            ]
          };
        }

        return post;
      })
    );
  }

  toggleLike(postId: string) {

    this.posts.update(posts =>
      posts.map(post => {

        if (post.id === postId) {

          return {
            ...post,
            likes: post.likes + 1
          };
        }

        return post;
      })
    );
  }
}