import React from 'react';
import { connect } from 'react-redux';
import { createPost } from '../actions/posts';

// defining the CreatePost class

class CreatePost extends React.Component {
  // defining the constructor function

  constructor(props) {
    super(props);

    // defining the state

    this.state = {
      content: '',
    };
  }

  // function to handle change in the textarea content

  handleChange = (event) => {
    this.setState({
      content: event.target.value,
    });
  };

  // function to handle click on the post button

  handleClick = () => {
    // getting the data from state

    const { content } = this.state;

    // returning if there is no content

    if (content === '') {
      return;
    }

    // dispatch an action to post the content

    this.props.dispatch(createPost(content));
  };

  render() {
    return (
      // create post containing textarea, to take post input and a post button, to post the content

      <div id="create-post">
        <textarea
          id="create-post-input"
          value={this.state.content}
          placeholder="Have something in your mind, post here..."
          // calling the handleChange event listener on the change of text area content

          onChange={(event) => this.handleChange(event)}
        ></textarea>

        {/* calling the handleClick event lisnter on the click of post button */}

        <button id="post-btn" onClick={this.handleClick}>
          Post
        </button>
      </div>
    );
  }
}

// exporting the connected CreatePost component(with no mapStateToProps function as only dispatch is needed from the store)

export default connect()(CreatePost);
