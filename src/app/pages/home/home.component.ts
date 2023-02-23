import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/models/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  // featuredArray: Array<object> = [];
  featuredArray: IPost[] = [];
  latestArray: IPost[] = [];
  constructor(private postService: PostsService) {}

  ngOnInit(): void {
    this.postService.loadFeatured().subscribe((data) => {
      this.featuredArray = data;
    });

    this.postService.loadLatest().subscribe((data) => {
      this.latestArray = data;
    });
  }
}
