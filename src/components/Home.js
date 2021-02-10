import React from 'react';
import { PostsList } from './index';
import '../assets/css/posts.css';

// defining and exporting Home class

class Home extends React.Component {
  render() {
    // getting the posts and loading value

    const { posts, loading } = this.props;

    // showing the loading text till the posts are fetched

    if (loading) {
      return <div id="loading">Loading</div>;
    }

    return <PostsList posts={posts} />;
  }
}

export default Home;
