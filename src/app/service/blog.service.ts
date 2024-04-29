import { Injectable } from '@angular/core';
import { Blog } from '../model/bloghub';
import { blogs } from '../model/bloglist';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  blogs: Blog[] = [];
  constructor() { 
    this.blogs=blogs
  }
  addBlog(blog:Blog){
    let id=blogs.length;
    blog.id=id+1;
    
    blogs.unshift(new Blog(blog.id,blog.title,blog.description,blog.category));
    console.log(this.blogs)
  }
}
