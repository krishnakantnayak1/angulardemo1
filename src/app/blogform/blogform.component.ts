import { Component, OnInit } from '@angular/core';
import { BlogService } from '../service/blog.service';

@Component({
  selector: 'app-blogform',
  templateUrl: './blogform.component.html',
  styleUrl: './blogform.component.css'
})
export class BlogformComponent implements OnInit{
  constructor(private service:BlogService){

  }
  ngOnInit() {
  }
  insert(blog:any){
    // alert(blog)
    this.service.addBlog(blog);
  }

}
