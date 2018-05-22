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

// export function fetchPosts() {
// const url = `${ROOT_URL}/posts${API_KE}`;
// const body = axios.get(url);
// return {
//   type: FETCH_POSTS,
//   payload: body
// };
// }

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


// export function fetchPost(id) {
// const url = `${ROOT_URL}/posts/${id}${API_KEY}`;
// const body = axios.get(url);
// return {
//   type: FETCH_POST,
//   payload: body
// };
//}


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

// export function createPost(values, callback) {
//   // const req = axios
//   //   .post(`${ROOT_URL}/posts${API_KEY}`, values)
//   //   .then(() => callback());

//   // return {
//   //   type: CREATE_POST,
//   //   payload: req
//   // };

//   return dispatch => blog.push(values);
// }

export const createPost = (uid, post, callback) => async dispatch => {
  const postRef = blog
    .child(uid)
    .push()
    .set(post, callback);
  console.log(postRef);
};

// export function deletePost(uid, key, callback) {
//   const url = `${ROOT_URL}/posts/${key}${API_KEY}`;
//   const body = axios.delete(url).then(() => callback());
//   return {
//     type: DELETE_POST,
//     payload: key
//   };
// }

export const deletePost = (uid, key, callback) => async dispatch => {
  blog
    .child(uid)
    .child(key)
    .remove(callback);
};
