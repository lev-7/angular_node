import { Component, Input, OnInit,OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from '../model/post.model';
import { PostService } from '../posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
  // posts = [
  //   { title:'First Post',content:'This is the First post\'s content'},
  //   { title:'Second Post',content:'This is the Second post\'s content'},
  //   { title:'Third Post',content:'This is the Third post\'s content'},
  // ]
  //@Input()  posts:Post[] = [];
  posts:Post[] = [];
  private postsSub:Subscription;

  constructor(private postService:PostService) { }

  ngOnInit(): void {
    this.postService.getPosts()
    this.postsSub = this.postService.getPostUpdateListener()
        .subscribe((posts: Post[])=>{
          this.posts = posts;
        });// new data emitted,error is emmited, observable is completed no more values expected
  }

  ngOnDestroy(){
    this.postsSub.unsubscribe();
  }

}
