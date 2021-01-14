import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/posts';
import { PostsList } from './index';

// defining the App class

class App extends React.Component {
  // fetching the posts just after the component is mounted

  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  render() {
    // getting the posts

    const { posts } = this.props;

    // posts list

    return <PostsList posts={posts} />;
  }
}

// defining the mapStateToProps function, where we specify the data we need as props from the store

function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}

// exporting the connected App component

export default connect(mapStateToProps)(App);
