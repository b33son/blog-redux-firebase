/*
 * File: /Users/michaelbeeson/Documents/VSCode/react004-react16/blog-redux/src/components/posts-index.js
 */
import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/actions-root";
import { Card, Button } from "semantic-ui-react";

let items = [];

class PostsIndex extends Component {
  componentDidMount = () => {
    let uid = 1;
    this.props.fetchPosts(uid);
  };

  componentWillReceiveProps(nextProps) {
    items = _.map(nextProps.posts, (post, key) => {
      return {
        header: post.title,
        description: post.content,
        meta: post.categories,
        extra: this.getExtra(key)
      };
    });
  }

  onCardViewClick = (e, btn) => {
    //console.log(e1, e2);
    this.props.history.push(`/posts/${btn.id}`);
  };

  getExtra = id => {
    return (
      <Card.Content extra>
        <div className="ui two buttons">
          <Button onClick={this.onCardViewClick} id={id} basic color="green">
            View
          </Button>
        </div>
      </Card.Content>
    );
  };

  render() {
    return (
      <div>
        <h3>Posts</h3>
        <Card.Group centered items={items} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
