/*
 * File: /Users/michaelbeeson/Documents/VSCode/react004-react16/blog-redux/src/components/posts-index.js
 */
import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/actions-root";
import { Card, Button } from "semantic-ui-react";
import MenuHeader from "../components/menu-header";
let items = [];

class PostsIndex extends Component {
  componentDidMount = () => {
    let uid = 1;
    this.props.fetchPosts(uid);
  };

  componentWillReceiveProps(nextProps) {
    items = _.map(nextProps.posts, (post, key) => {
      return {
        key,
        header: post.title,
        description: post.content,
        meta: post.categories,
        extra: this.getExtra(key)
      };
    });
  }

  onCardViewClick = (e, btn) => {
    this.props.history.push(`/posts/${btn.id}`);
  };

  getExtra = id => {
    return (
      <Card.Content extra key={id}>
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
        <MenuHeader activeItem="posts-view" history={this.props.history} />
        <Card.Group centered items={items} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
