import { Component, inject, input } from '@angular/core';
import { PostsStore } from '../../store/posts.store';
import { AuthStore } from '../../../auth/store/auth.store.service';
import { Router } from '@angular/router';
import { Post } from '../../../../shared/interfaces/post.interface';

@Component({
  selector: 'app-post-card',
  imports: [],
  templateUrl: './post-card.html',
  styleUrl: './post-card.css',
})
export class PostCard {

  postsStore = inject(PostsStore);

  authStore = inject(AuthStore);

  router = inject(Router);

  post = input.required<Post>();

}
