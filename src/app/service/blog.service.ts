import { Injectable } from '@angular/core';
import { Blog } from '../model/bloghub';
import { blogs } from '../model/bloglist';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BlogService {
  blogs: Blog[] = [];
  private url = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private httpClient: HttpClient) { 
    this.blogs=blogs
  }
  addBlog(blog:Blog){
    let id=blogs.length;
    blog.id=id+1;
    
    blogs.unshift(new Blog(blog.id,blog.title,blog.description,blog.category));
    console.log(this.blogs)
  }
  // async getPosts() {
  //   return await this.httpClient.get(this.url);
  // }
}
