import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BloglistComponent } from './bloglist/bloglist.component';
import { BrowserModule } from '@angular/platform-browser';
import { BlogformComponent } from './blogform/blogform.component';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  {path:"", component:HomeComponent},
  
  {path:"list", component:BloglistComponent},
  {path:"form", component:BlogformComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserModule, FormsModule],
  exports: [RouterModule, BloglistComponent, BlogformComponent,HomeComponent],
  declarations: [
    BloglistComponent,
    BlogformComponent,
    HomeComponent
  ]
})
export class AppRoutingModule { }
