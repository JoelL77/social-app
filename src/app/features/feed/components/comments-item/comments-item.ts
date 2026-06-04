import { Component, input } from '@angular/core';
import { Post } from '../../../../shared/interfaces/post.interface';
import { Comment } from '../../../../shared/interfaces/comment.interface';

@Component({
  selector: 'app-comments-item',
  imports: [],
  templateUrl: './comments-item.html',
  styleUrl: './comments-item.css',
})
export class CommentsItem {

  comment = input.required<Comment>();

}
