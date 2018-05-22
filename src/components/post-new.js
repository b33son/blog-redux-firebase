/*
 * File: /Users/michaelbeeson/Documents/VSCode/react004-react16/blog-redux/src/components/post-new.js
 */

import React, { Component } from "react";
import { Form } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { createPost } from "../actions/actions-root";
import {
  LabelInputField,
  InputField,
  TextAreaField,
  SelectField
} from "react-semantic-redux-form";
import MenuHeader from "../components/menu-header";

const categories = [
  { key: "cat1", text: "cat1", value: "cat1" },
  { key: "cat2", text: "cat2", value: "cat2" }
];

let items = [];

class PostNew extends Component {
  // Use this pattern if not using react-semantic-redux-form
  // renderTitleField = field => {
  //   return (
  //     <Form.Input fluid label="Title" placeholder="Title" {...field.input} />
  //   );
  // };

  onSubmitForm = values => {
    console.log("form submitted " + values);
    // const p = this.props.createPost(values, () => {
    //   this.props.history.push("/");
    // });

    let id = 1;
    this.props.createPost(id, values, error => {
      if (error) {
        console.log(error);
      } else {
        this.props.history.push("/");
      }
    });
  };

  render() {
    // const { value } = this.state;
    const { handleSubmit } = this.props;

    return (
      <div>
        <MenuHeader activeItem="post-new" history={this.props.history} />
        <Form onSubmit={handleSubmit(this.onSubmitForm)}>
          <Form.Group widths="equal">
            <Field
              name="title"
              label="Title"
              component={InputField}
              placeholder="Title"
            />

            <Field
              name="categories"
              label="Categories"
              placeholder="Category"
              component={SelectField}
              options={categories}
            />
          </Form.Group>
          <Field
            name="content"
            label="Contents"
            placeholder="Enter post body..."
            component={TextAreaField}
          />
          <Form.Button>Save</Form.Button>
        </Form>
      </div>
    );
  }
}

function validateForm(values) {
  // console.log(values) => {title: 'asdf', categories: '', content: 'body or content of blog'}
  const errors = {};

  // validate inputs from 'values'
  if (!values.title) {
    errors.title = "Enter a title!";
  }

  if (!values.categories) {
    errors.categories = "Select a category";
  }

  if (!values.content) {
    errors.content = "Enter the body of the post";
  }

  // if errors = {}, the form is fine to submit
  return errors;
}

export default reduxForm({
  form: "PostsNewForm", // Just needs to be a unique string
  validate: validateForm
})(connect(null, { createPost })(PostNew));
