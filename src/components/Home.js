import React from 'react';
import { PostsList } from './index';

// defining and exporting Home class

class Home extends React.Component {
  render() {
    // getting the posts

    const { posts } = this.props;

    return <PostsList posts={posts} />;
  }
}

export default Home;
