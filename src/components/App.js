import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/posts';
import { Home, Navbar, Login, SignUp, Page404, Logout, Profile } from './index';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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
          {/* showing the first matching component according to the path */}

          <Switch>
            <Route
              exact={true}
              path="/"
              render={(props) => {
                return (
                  // returning the Home component and passing to it the Route props and posts

                  <Home {...props} posts={posts} />
                );
              }}
            />

            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
            <Route path="/signup" component={SignUp} />
            <Route path="/profile" component={Profile} />
            <Route component={Page404} />
          </Switch>
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
