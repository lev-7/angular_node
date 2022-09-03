//import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from '../model/post.model';
import { PostService } from '../posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  enteredContent;
  enteredTitle;
  //@Output() postCreated = new EventEmitter<Post>();

  constructor(private postService:PostService) { }

  ngOnInit(): void {
  }

  onAddPost(form:NgForm){
    if(form.invalid){
      return;
    }
    // const post:Post = {
    //   title: form.value.title,//this.enteredTitle,
    //   content: form.value.content//this.enteredContent
    // }
    //this.postCreated.emit(post);
    console.log("Form Contents");
    console.log(form.value.title);
    console.log(form.value.content);



    this.postService.addPost(form.value.title,form.value.content);
    form.resetForm();
  }

}
