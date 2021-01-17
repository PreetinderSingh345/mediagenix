import React from 'react';
import { PostsList } from './index';

// defining and exporting Home class

class Home extends React.Component {
  render() {
    // getting the posts and loading value

    const { posts, loading } = this.props;

    // showing the loading text till the posts are fetched

    let component = loading ? <div id="loading">Loading</div> : <PostsList posts={posts} />;

    return component;
  }
}

export default Home;
