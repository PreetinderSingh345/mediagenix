import React from 'react';
import { PostsList, FriendsList } from './index';
import '../assets/css/home.css';

// defining and exporting Home class

class Home extends React.Component {
  render() {
    // getting the data from props

    const { posts, loading } = this.props;

    const { isLoggedIn } = this.props.auth;

    // showing the loading text till the posts are fetched

    if (loading) {
      return <div id="loading">Loading</div>;
    }

    return (
      <div id="home">
        <PostsList posts={posts} />

        {/* showing the user's friend list if the user is logged in(passing the friends as props to the FriendList component) */}

        {isLoggedIn && <FriendsList friends={this.props.friends} />}
      </div>
    );
  }
}

export default Home;
