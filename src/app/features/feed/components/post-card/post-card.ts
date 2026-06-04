import { Component, inject, input, output } from '@angular/core';
import { PostsStore } from '../../store/posts.store';
import { AuthStore } from '../../../auth/store/auth.store.service';
import { Router } from '@angular/router';
import { Post } from '../../../../shared/interfaces/post.interface';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-post-card',
  imports: [DatePipe],
  templateUrl: './post-card.html',
  styleUrl: './post-card.css',
})
export class PostCard {

  post = input.required<Post>();

  eventToggleLike = output<string>();

  toggleLike(postId: string) {
    this.eventToggleLike.emit(postId)
  }

}
