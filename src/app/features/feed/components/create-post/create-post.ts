import { Component, inject } from '@angular/core';
import { PostsStore } from '../../store/posts.store';
import { AuthStore } from '../../../auth/store/auth.store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-post',
  imports: [],
  templateUrl: './create-post.html',
  styleUrl: './create-post.css',
})
export class CreatePost {

  postsStore = inject(PostsStore);

  authStore = inject(AuthStore);

  router = inject(Router);

  createPost(content: string) {

    if (!content.trim()) return;

    this.postsStore.createPost(content);
  }


}
