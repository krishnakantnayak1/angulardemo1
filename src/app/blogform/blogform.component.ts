import { Component, OnInit, inject } from '@angular/core';
import { BlogService } from '../service/blog.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';



@Component({
  selector: 'app-blogform',
  templateUrl: './blogform.component.html',
  styleUrl: './blogform.component.css',
})
export class BlogformComponent implements OnInit{
  httpClient=inject(HttpClient);
  constructor(private service:BlogService){

  }
  ngOnInit() {
  }
  insert(blogform:any){
    // alert(blog)
    //this.service.addBlog(blog);
    let blog=blogform.value;
    const params = new HttpParams()
    .set('Content', blog.content)
    .set('name', blog.name);
    console.log("params",blog)
    this.httpClient.post('https://localhost:44320/Blog/Create',{"name":blog.name,"content":blog.content},{headers:{"Content-Type":'application/json'}}).subscribe((v)=>{
      console.log('new blog',v);
      if(v){
        alert('Your Blog published!');
        blogform.resetForm();
      }
    })
  }

}
