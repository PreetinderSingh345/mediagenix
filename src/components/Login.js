import React from 'react';
import { clearAuthState, login } from '../actions/auth';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import '../assets/css/loginSignUp.css';

// defining the Login class

class Login extends React.Component {
  // defining the constructor function

  constructor() {
    super();

    // click count and state(consisting of email and password)

    this.clickCount = 0;

    this.state = {
      email: '',
      password: '',
    };
  }

  // clearing the authentication state just before the component is going to get destroyed

  componentWillUnmount() {
    this.props.dispatch(clearAuthState());
  }

  // handling the event when the login button is pressed or released

  handleClick = (event) => {
    // changing button color to darkslategrey when it is pressed

    let button = event.target;

    if (this.clickCount % 2 === 0) {
      button.style.color = 'darkslategrey';
    } else {
      button.removeAttribute('style');
    }

    // incrementing count

    this.clickCount++;
  };

  // handling the event when the form is submitted

  handleFormSubmit = (event) => {
    // preventing the default behaviour, setting the state to the new email, password values and dispatching a login action

    event.preventDefault();

    let loginEmailInput = document.getElementById('login-email-input');
    let loginPasswordInput = document.getElementById('login-password-input');

    this.setState(
      {
        email: loginEmailInput.value,
        password: loginPasswordInput.value,
      },
      () => {
        const { email, password } = this.state;

        this.props.dispatch(login(email, password));
      }
    );
  };

  render() {
    // getting the needed properties from props

    const { error, inProgressLogin, isLoggedIn } = this.props.auth;

    // getting the from value from props and we add a default from property with pathname as home if there is no such property inside props

    const { from } = this.props.location.state || { from: { pathname: '/' } };

    // redirecting the user to the page it was trying to access if it is already logged in(using the Redirect component) and now when we reload the profile or the settings page, then we're not taken back to the home page

    if (isLoggedIn) {
      return <Redirect to={from} />;
    }

    return (
      // login container

      <div className="login-signup-container">
        {/* login form(added submit event listener to the form) containing heading, email, password input and login button*/}

        <form
          className="login-signup-form"
          onSubmit={(event) => this.handleFormSubmit(event)}
        >
          <div className="login-signup-form-heading">Login</div>

          {/* showing the error(if there is any) */}

          {error && <div id="login-signup-error-message">{error}</div>}

          <input
            type="email"
            placeholder="Email"
            required
            className="login-signup-input"
            id="login-email-input"
          />

          <input
            type="password"
            placeholder="Password"
            required
            className="login-signup-input"
            id="login-password-input"
          />

          {/* adding event listeners to listen to the events when the login button is pressed or released */}

          {/* showing different buttons according to the inProgressLogin value */}

          {inProgressLogin ? (
            <button type="submit" className="login-signup-button" disabled>
              Logging in...
            </button>
          ) : (
            <button
              type="submit"
              className="login-signup-button"
              onMouseDown={(event) => this.handleClick(event)}
              onMouseUp={(event) => this.handleClick(event)}
            >
              Login
            </button>
          )}
        </form>
      </div>
    );
  }
}

// defining the map state to props function

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

// exporting the connected Login component

export default connect(mapStateToProps)(Login);
