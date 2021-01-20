import React from 'react';
import { clearAuthState, signUp } from '../actions/auth';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import '../assets/css/loginSignUp.css';

// defining the SignUp class

class SignUp extends React.Component {
  // defining the constructor function

  constructor() {
    super();

    // click count and state(consisting of name, email, password and confirm password)

    this.clickCount = 0;

    this.state = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  // clearing the authentication state just before the component is going to get destroyed

  componentWillUnmount() {
    this.props.dispatch(clearAuthState());
  }

  // handling the event when the signup button is pressed or released

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
    // preventing the default behaviour, setting the state to the new name, email, password, confirm password values and dispatching a signup action

    event.preventDefault();

    let signUpNameInput = document.getElementById('signup-name-input');
    let signUpEmailInput = document.getElementById('signup-email-input');
    let signUpPasswordInput = document.getElementById('signup-password-input');
    let signUpConfirmPasswordInput = document.getElementById(
      'signup-confirm-password-input'
    );

    this.setState(
      {
        name: signUpNameInput.value,
        email: signUpEmailInput.value,
        password: signUpPasswordInput.value,
        confirmPassword: signUpConfirmPasswordInput.value,
      },
      () => {
        const { name, email, password, confirmPassword } = this.state;

        this.props.dispatch(signUp(name, email, password, confirmPassword));
      }
    );
  };

  render() {
    // getting the needed properties from props

    const { errorSignUp, inProgressSignUp, isLoggedIn } = this.props.auth;

    // redirecting the user to the home page if it is already logged in(using the Redirect component)

    if (isLoggedIn) {
      return <Redirect to="/" />;
    }

    return (
      // signup container

      <div className="login-signup-container">
        {/* signup form containing heading, name, email, password, confirm password input and signup button*/}

        <form
          className="login-signup-form"
          onSubmit={(event) => this.handleFormSubmit(event)}
        >
          <div className="login-signup-form-heading">SignUp</div>

          {/* showing the error(if there is any) */}

          {errorSignUp && (
            <div id="login-signup-error-message">{errorSignUp}</div>
          )}

          <input
            type="text"
            placeholder="Name"
            required
            className="login-signup-input"
            id="signup-name-input"
          />

          <input
            type="email"
            placeholder="Email"
            required
            className="login-signup-input"
            id="signup-email-input"
          />

          <input
            type="password"
            placeholder="Password"
            required
            className="login-signup-input"
            id="signup-password-input"
          />

          <input
            type="password"
            placeholder="Confirm password"
            required
            className="login-signup-input"
            id="signup-confirm-password-input"
          />

          {/* adding event listeners to listen to the events when the signup button is pressed or released */}

          {/* showing different buttons according to the inProgressSignUp value */}

          {inProgressSignUp ? (
            <button type="submit" className="login-signup-button" disabled>
              Signing up...
            </button>
          ) : (
            <button
              type="submit"
              className="login-signup-button"
              onMouseDown={(event) => this.handleClick(event)}
              onMouseUp={(event) => this.handleClick(event)}
            >
              Sign Up
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

// exporting the connected SignUp component

export default connect(mapStateToProps)(SignUp);
