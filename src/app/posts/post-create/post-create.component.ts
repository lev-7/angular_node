import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  boundValue
  newPost

  constructor() { }

  ngOnInit(): void {
  }

  onAddPost(){
    console.log("Add post button clicked");
    this.newPost = this.boundValue;
    console.dir(this.newPost);
  }

}