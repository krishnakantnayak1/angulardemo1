import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BloglistComponent } from './bloglist/bloglist.component';
import { BrowserModule } from '@angular/platform-browser';
import { BlogformComponent } from './blogform/blogform.component';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';


const routes: Routes = [
  {path:"", component:HomeComponent},
  
  {path:"list", component:BloglistComponent},
  {path:"form", component:BlogformComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserModule, FormsModule,MatButtonModule,MatIconModule,MatFormFieldModule,MatInputModule],
  exports: [RouterModule, BloglistComponent, BlogformComponent,HomeComponent],
  declarations: [
    BloglistComponent,
    BlogformComponent,
    HomeComponent,
  ]
})
export class AppRoutingModule { }
