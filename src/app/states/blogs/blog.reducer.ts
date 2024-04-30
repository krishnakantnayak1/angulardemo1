import { Blog } from "../../model/bloghub";
import { createReducer, on } from "@ngrx/store";
import { add } from "./blog.actions";
export interface BlogState{
    blogs:Blog[]
}

export const blogsInitialState:Blog[]=[
    new Blog(1,'dotnet',"A microsoft framework to build enterprise level application","Tewchnology"),
    new Blog(2,'Delhi',"Captal of India","Places"),
    new Blog(3,'Stocks',"Bearish Market","Finance"),
    new Blog(1,'Mumbai',"Finance capital of india","Places"),
    new Blog(1,'Mumbai',"Finance capital of india","Places")
]

export const blogReducer= createReducer(
    blogsInitialState,
    on(add, (state, { blog }) => ({
        ...state,
        ...blog
      }))
)