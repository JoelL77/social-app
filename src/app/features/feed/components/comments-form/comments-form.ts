import { Component, inject, input, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Post } from '../../../../shared/interfaces/post.interface';
import { PostsStore } from '../../store/posts.store';

@Component({
  selector: 'app-comments-form',
  imports: [ReactiveFormsModule],
  templateUrl: './comments-form.html',
  styleUrl: './comments-form.css',
})
export class CommentsForm implements OnInit {


  form!: FormGroup

  post = input.required<Post>();

  postsStore = inject(PostsStore);


  ngOnInit(): void {
    this.form = new FormGroup({
      comment: new FormControl("", [Validators.required])
    })

  }

  sendComment() {
    const postId = this.post().id;

    const message = this.form.get('comment')?.value;

    this.postsStore.addComment(
      postId,
      message
    );

    this.form.reset();
  }



}
