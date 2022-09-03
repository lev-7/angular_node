import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Subject } from "rxjs";
import { Post } from "./model/post.model";


@Injectable({providedIn: 'root'})
export class PostService{
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  constructor(private http:HttpClient){}

  getPosts(){
    this.http.get<{message: string,posts: Post[]}>('http://localhost:3000/api/posts')
    .subscribe((postData)=>{
      this.posts = postData.posts;
      this.postsUpdated.next([...this.posts]);
    }); 
    //return [...this.posts];
  }

  getPostUpdateListener(){
    return this.postsUpdated.asObservable();
  }

  addPost(title:string,content:string){
    const post: Post = { id: null, title: title, content: content };
    this.posts.push(post);
    console.log("SERVICE--PostService--addPost");
    console.log(this.posts);
    this.postsUpdated.next([...this.posts ]);
  }
}
