import { Component, OnInit, inject } from '@angular/core';
import { Blog } from '../model/bloghub';
import { blogs } from '../model/bloglist';
import { HttpClient } from '@angular/common/http';
import { BlogService } from '../service/blog.service';

@Component({
  selector: 'app-bloglist',
  templateUrl: './bloglist.component.html',
  styleUrl: './bloglist.component.css'
})
export class BloglistComponent implements OnInit {
  blogss: Blog[] = [];
  data: object | undefined;
  httpClient=inject(HttpClient);
  constructor(private service:BlogService){

  }

  ngOnInit() {
    this.fetchdata()
    //this.blogs=blogs
    
  }
  fetchdata(){
    //http://jsonplaceholder.typicode.com/post
    this.httpClient.get('https://localhost:44320/Blog/').subscribe((d:any)=>{
      this.blogss=d.map((x: any)=>{
        return new Blog(x.id,x.name,x.content,'Tech')
      })
      
    })
  }
}