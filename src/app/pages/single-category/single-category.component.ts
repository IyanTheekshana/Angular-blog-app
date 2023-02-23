import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPost } from 'src/app/models/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.css'],
})
export class SingleCategoryComponent implements OnInit {
  postsCategoryArray: IPost[] = [];
  categoryObj: any;

  constructor(
    private route: ActivatedRoute,
    private postService: PostsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((data) => {
      this.categoryObj = data;
      // console.log(data);
      this.postService.loadCategoryPost(data).subscribe((data) => {
        this.postsCategoryArray = data;
      });
    });
  }
}
