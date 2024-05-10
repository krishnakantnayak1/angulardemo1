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
  pageSize:number=0;
  onpage:number=1;
  editFlag:boolean[]=[];
  httpClient=inject(HttpClient);
  constructor(private service:BlogService){

  }

  ngOnInit() {
    this.getSize();
    this.fetchdata()
    //this.blogs=blogs
    
  }
  getSize(){
    this.httpClient.get('https://localhost:44320/Blog/GetSize').subscribe((count:any)=>{
      if(count<5)this.pageSize=1;
      else this.pageSize=Math.ceil(count/5);
    })
  }
  fetchdata(){
    //http://jsonplaceholder.typicode.com/post
    this.httpClient.get('https://localhost:44320/Blog/Get?page=1&pageSize=5').subscribe((d:any)=>{
      this.blogss=d.map((x: any)=>{
        return new Blog(x.id,x.name,x.content,'Tech',false)
      })
      
    })
  }
  fetchfrompage(pagenum:any){
    if(pagenum<=this.pageSize){
      this.httpClient.get(`https://localhost:44320/Blog/Get?page=${pagenum}&pageSize=5`).subscribe((d:any)=>{
      this.blogss=d.map((x: any)=>{
        return new Blog(x.id,x.name,x.content,'Tech',false)
      })
      this.onpage=pagenum;
      
    })
    }
    else
    alert('Please enter a number between 1 and '+this.pageSize)
  }
  deletebyId(id:any){

    this.httpClient.get(`https://localhost:44320/Blog/Delete?id=${id}`).subscribe((d:any)=>{
      this.blogss=this.blogss.filter((d)=>d.id!=id)
      })
  }
  editbyId(idx:any){
        this.blogss[idx].editon=!this.blogss[idx].editon;
  }
  updateContent(obj:any){
    this.httpClient.post('https://localhost:44320/Blog/Edit',{id:obj.id,content:obj.content},{headers:{"Content-Type":'application/json'}}).subscribe((v)=>{
      if(v){
        this.blogss[obj.idx].description=obj.content;
        this.blogss[obj.idx].editon=false;
      }
    })
  }
}
