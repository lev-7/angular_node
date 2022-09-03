import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../model/post.model';
import { PostService } from '../posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  // posts = [
  //   { title:'First Post',content:'This is the First post\'s content'},
  //   { title:'Second Post',content:'This is the Second post\'s content'},
  //   { title:'Third Post',content:'This is the Third post\'s content'},
  // ]
  //@Input()  posts:Post[] = [];
  posts:Post[] = [];

  constructor(private postService:PostService) { }

  ngOnInit(): void {
    this.posts = this.postService.getPosts()
  }

}
