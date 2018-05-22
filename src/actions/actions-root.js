/*
 * File: /Users/michaelbeeson/Documents/VSCode/react004-react16/blog-redux/src/actions/actions-root.js
 */
import axios from "axios";
import { blog } from "../config/firebase";

export const FETCH_POSTS = "FETCH_POSTS";
export const FETCH_POST = "FETCH_POST";
export const DELETE_POST = "DELETE_POST";

export const CREATE_POST = "CREATE_POST";

const ROOT_URL = "";
const API_KEY = "";

export const fetchPosts = uid => async dispatch =>
  blog.child(uid).on("value", snapshot => {
    // snapshot.forEach(obj => {
    //   console.log(obj.key);
    // });

    dispatch({
      type: FETCH_POSTS,
      payload: snapshot.val()
    });
  });

export const fetchPost = (uid, key) => async dispatch =>
  blog
    .child(uid)
    .child(key)
    .once("value", snapshot => {
      let post = snapshot.val();
      post.key = snapshot.key;
      dispatch({
        type: FETCH_POST,
        payload: post
      });
    });

export const createPost = (uid, post, callback) => async dispatch => {
  const postRef = blog
    .child(uid)
    .push()
    .set(post, callback);
  console.log(postRef);
};

export const deletePost = (uid, key, callback) => async dispatch => {
  blog
    .child(uid)
    .child(key)
    .remove(callback);
};
