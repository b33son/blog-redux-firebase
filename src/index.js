/*
 * File: /Users/michaelbeeson/Documents/VSCode/react004-react16/blog-redux/src/index.js
 */

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
//import promise from "redux-promise";
import reduxThunk from "redux-thunk";

import reducers from "./reducers/reducers-root";
import registerServiceWorker from "./registerServiceWorker";
import PostsIndex from "./containers/posts-index";
import PostNew from "./components/post-new";
import PostView from "./containers/post-view";
import { Link } from "react-dom";
import { Icon, Header } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
//const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div style={{ margin: "20px" }}>
        <Switch>
          <Route exact path="/" component={PostsIndex} />
          <Route exact path="/posts/new" component={PostNew} />
          <Route path="/posts/:id" component={PostView} />
        </Switch>
        <Header as="h3">
          <a href="https://github.com/b33son/blog-redux-firebase">
            <Icon.Group size="big">
              <Icon name="github" />
            </Icon.Group>
            View code on Github{" "}
          </a>
        </Header>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
