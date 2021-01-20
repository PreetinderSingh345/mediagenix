import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/posts';
import { Home, Navbar, Login, SignUp, Page404, Profile } from './index';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as jwtDecode from 'jwt-decode';
import '../assets/css/app.css';
import { authenticateUser } from '../actions/auth';

// defining the App class

class App extends React.Component {
  // fetching the posts just after the component is mounted

  componentDidMount() {
    this.props.dispatch(fetchPosts());

    // getting the jwt from the local storage

    const token = localStorage.getItem('token');

    if (token) {
      // decoding the jwt and dispatching an action to authenticate the user(passing only the name, email and id of the user(we'll save only these properties of the user if it is authenticated))

      const user = jwtDecode.default(token);

      this.props.dispatch(
        authenticateUser({
          name: user.name,
          email: user.email,
          _id: user._id,
        })
      );
    }
  }

  render() {
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
                  // returning the Home component and passing to it the Route and App props

                  <Home {...props} {...this.props} />
                );
              }}
            />

            <Route path="/login" component={Login} />
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
  // defining the posts and loading props to be a required array and bool respectively

  posts: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

// defining the mapStateToProps function, where we specify the data we need as props from the store

function mapStateToProps(state) {
  return {
    posts: state.posts.posts,
    loading: state.posts.loading,
  };
}

// exporting the connected App component

export default connect(mapStateToProps)(App);
