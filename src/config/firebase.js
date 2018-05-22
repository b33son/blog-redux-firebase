/*
 * File: /Users/michaelbeeson/Documents/VSCode/react004-react16/blog-firebase-thunk/src/f
 */

import * as firebase from "firebase";

import { FirebaseConfig } from "./keys";
firebase.initializeApp(FirebaseConfig);

const databaseRef = firebase.database().ref();
export const blog = databaseRef.child("posts");
