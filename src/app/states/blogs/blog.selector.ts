import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";

export const selectBlogsState=(state:AppState)=> state.blogs;

export const selectBlog=createSelector(
    selectBlogsState,
    (state)=>state.blogs
)