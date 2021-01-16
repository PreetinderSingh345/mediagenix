import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/posts';
import { PostsList } from './index';
import { Navbar } from './index';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

// sample components to check routing

const Login = () => <div>Login</div>;
const SignUp = () => <div>SignUp</div>;
const Home = () => <div>Home</div>;

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

    return (
      // wrapping the App component inside the Router

      <Router>
        <div className="App">
          <Navbar />
          {/* <PostsList posts={posts} /> */}

          {/* list for selecting which component to show */}

          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/login">Login</Link>
            </li>

            <li>
              <Link to="/signup">SignUp</Link>
            </li>
          </ul>

          {/* showing different components according to the path */}

          <Route exact={true} path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
        </div>
      </Router>
    );
  }
}

// defining the type of props of this App component

App.propTypes = {
  // defining the posts prop to be a required array

  posts: PropTypes.array.isRequired,
};

// defining the mapStateToProps function, where we specify the data we need as props from the store

function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}

// exporting the connected App component

export default connect(mapStateToProps)(App);
