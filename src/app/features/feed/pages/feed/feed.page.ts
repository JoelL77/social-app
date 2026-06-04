import { Component, inject } from '@angular/core';
import { AuthStore } from '../../../auth/store/auth.store.service';
import { PostsStore } from '../../store/posts.store';
import { Router } from '@angular/router';
import { Navbar } from "../../components/navbar/navbar";
import { CreatePost } from "../../components/create-post/create-post";
import { PostCard } from "../../components/post-card/post-card";
import { NgClass } from "../../../../../../node_modules/@angular/common/types/_common_module-chunk";
import { CommentsItem } from "../../components/comments-item/comments-item";
import { CommentsForm } from "../../components/comments-form/comments-form";

@Component({
  selector: 'app-feed.page',
  imports: [Navbar, CreatePost, PostCard, CommentsItem, CommentsForm],
  templateUrl: './feed.page.html',
  styleUrl: './feed.page.css',
})
export class FeedPage {

  postsStore = inject(PostsStore);

  authStore = inject(AuthStore);

  router = inject(Router);

  createPost(content: string) {

    if (!content.trim()) return;

    this.postsStore.createPost(content);
  }

  addComment(
    postId: string,
    message: string
  ) {

    if (!message.trim()) return;

    this.postsStore.addComment(
      postId,
      message
    );
  }

  logout() {

    this.authStore.logout();

    this.router.navigate(['/']);
  }

}
