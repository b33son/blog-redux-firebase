/*
 * File: /Users/michaelbeeson/Documents/VSCode/react004-react16/blog-firebase-thunk/src/containers/menu.js
 */

import React, { Component } from "react";
import { Menu, Button, Confirm } from "semantic-ui-react";

export default class MenuHeader extends Component {
  state = { open: false };
  componentWillReceiveProps = nextProps => {
    this.setState({ activeItem: nextProps.activeItem });
  };

  handleMenuClick = (e, { name }) => {
    this.setState({ activeItem: name });
    switch (name) {
      case "post-new":
        this.props.history.push(`/posts/new`);
        break;
      case "posts-view":
        this.props.history.push(`/`);
        break;
      case "signup":
        this.setState({ open: true });
        break;
      default:
        this.props.history.push(`/`);
        break;
    }
  };

  handleConfirm = () => this.setState({ open: false });
  handleCancel = () => this.setState({ open: false });

  render() {
    const { activeItem } = this.state;
    return (
      <div style={{ margin: "20px 0px 20px 0px" }}>
        <Menu>
          <Menu.Item
            name="posts-view"
            active={activeItem === "posts-view"}
            onClick={this.handleMenuClick}
          >
            View Posts
          </Menu.Item>

          <Menu.Item
            name="post-new"
            active={activeItem === "post-new"}
            onClick={this.handleMenuClick}
          >
            New Post
          </Menu.Item>

          <Menu.Menu position="right">
            <Menu.Item
              name="signup"
              active={activeItem === "signup"}
              onClick={this.handleMenuClick}
            >
              Sign Up
            </Menu.Item>
          </Menu.Menu>
        </Menu>

        <Confirm
          open={this.state.open}
          content="This functionality isn't implemented yet."
          onCancel={this.handleCancel}
          onConfirm={this.handleConfirm}
          style={inlineStyle.modal}
        />
      </div>
    );
  }
}

const inlineStyle = {
  modal: {
    marginTop: "0px !important",
    marginLeft: "auto",
    marginRight: "auto"
  }
};
