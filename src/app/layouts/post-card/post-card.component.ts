import { Component, Input, OnInit } from '@angular/core';
import { IPost } from 'src/app/models/post';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css'],
})
export class PostCardComponent implements OnInit {
  constructor() {}

  @Input('postData') post!: IPost;

  ngOnInit() {}
  formatDate(dateAt: any) {
    let seconds = dateAt.seconds * 1000;
    return seconds;
  }
}
