import React from 'react';

// defining and exporting the CreatePost class

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
      content: event.targer.value,
    });
  };

  // function to handle click on the post button

  handleClick = () => {
    // dispatch an action to post the content
  };

  render() {
    return (
      // post containing textarea, to take post input and a post button, to post the content

      <div id="post">
        <textarea
          id="post-input"
          cols="30"
          rows="10"
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

export default CreatePost;
