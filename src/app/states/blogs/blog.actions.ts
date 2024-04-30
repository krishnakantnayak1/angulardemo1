import { createAction, props } from "@ngrx/store";
import { Blog } from "../../model/bloghub";

export const add=createAction('[BlogList Component], add', props<{blog:Blog}>());