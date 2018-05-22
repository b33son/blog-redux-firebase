/*
 * File: /Users/michaelbeeson/Documents/VSCode/react004-react16/blog-firebase-thunk/src/keys/keys.js
 */

if (process.env.NODE_ENV === "production") {
  module.exports = require("./prod");
} else {
  module.exports = require("./dev");
}
