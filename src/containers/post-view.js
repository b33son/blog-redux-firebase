/*
 * File: /Users/michaelbeeson/Documents/VSCode/react004-react16/blog-redux/src/containers/posts-view.js
 */

import React, { Component } from "react";
import _ from "lodash";
import { fetchPost } from "../actions/actions-root";
import { deletePost } from "../actions/actions-root";
import { connect } from "react-redux";
import { Card, Button } from "semantic-ui-react";
import MenuHeader from "../components/menu-header";
let items = [];

class PostView extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    let uid = 1;
    this.props.fetchPost(uid, id);
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.post) {
      items = [];
      return;
    }
    items = [
      {
        header: nextProps.post.title,
        description: nextProps.post.content,
        meta: nextProps.post.categories,
        extra: this.getExtra(nextProps.post.key)
      }
    ];
  }

  onCardDeleteClick = (e, btn) => {
    let uid = 1;
    this.props.deletePost(uid, btn.id, () => {
      this.props.history.push("/");
    });
  };

  getExtra = id => {
    return (
      <Card.Content extra key={id}>
        <div className="ui two buttons">
          <Button onClick={this.onCardDeleteClick} id={id} basic color="red">
            Delete Post
          </Button>
        </div>
      </Card.Content>
    );
  };

  render() {
    return (
      <div>
        <MenuHeader activeItem="post-view" history={this.props.history} />
        <Card.Group centered items={items} />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return { post: state.posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostView);
