import { Component, OnInit } from '@angular/core';
import { Blog } from '../model/bloghub';
import { blogs } from '../model/bloglist';

@Component({
  selector: 'app-bloglist',
  templateUrl: './bloglist.component.html',
  styleUrl: './bloglist.component.css'
})
export class BloglistComponent implements OnInit {
  blogs: Blog[] = [];

  constructor(){}
  ngOnInit() {
    this.blogs=blogs
    // this.blogs=[]
  }

}
