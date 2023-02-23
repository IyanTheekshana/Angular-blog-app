import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPost } from 'src/app/models/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css'],
})
export class SinglePostComponent implements OnInit {
  post: any;
  posts: IPost[] = [];
  constructor(
    private route: ActivatedRoute,
    private postService: PostsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((data) => {
      // console.log(data['id']);
      this.postService.loadSinglePost(data['id']).subscribe((data) => {
        // console.log(data);
        this.post = data;
        this.loadSimilarPost(this.post.category.categoryId);
      });
    });
  }

  formatDate(dateAt: any) {
    let seconds = dateAt.seconds * 1000;
    return seconds;
  }

  loadSimilarPost(catId: any) {
    this.postService.loadSimilarCatePost(catId).subscribe((data) => {
      this.posts = data;
    });
  }
}
