/*
 * File: /Users/michaelbeeson/Documents/VSCode/react004-react16/blog-redux/src/reducers/reducers-root.js
 */

import { combineReducers } from "redux";
import PostsReducer from "./posts-reducer";
import { reducer as formReducer } from "redux-form";
const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer
});

export default rootReducer;
