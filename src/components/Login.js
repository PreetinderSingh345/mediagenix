import React from 'react';
import '../assets/css/loginSignUp.css';

// defining and exporting the Login class

class Login extends React.Component {
  // defining the constructor function

  constructor() {
    super();

    // click count and input references

    this.clickCount = 0;

    this.emailInputRef = React.createRef();
    this.passwordInputRef = React.createRef();
  }

  // handling the event when the login button is pressed or released

  handleClick = (event) => {
    // changing button color to darkslategrey when it is pressed

    let button = event.target;

    if (this.clickCount % 2 == 0) {
      button.style.color = 'darkslategrey';
    } else {
      button.removeAttribute('style');
    }

    // incrementing count

    this.clickCount++;
  };

  // handling the event when the form is submitted

  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(this.emailInputRef, this.passwordInputRef);
  };

  render() {
    return (
      // login container

      <div className="login-signup-container">
        {/* login form(added submit event listener to the form) containing heading, email, password input and login button*/}

        <form
          className="login-signup-form"
          onSubmit={(event) => this.handleFormSubmit(event)}
        >
          <div className="login-signup-form-heading">Login</div>

          {/* attaching the refernces to the email and password input, so that they change according to the submitted values */}

          <input
            type="email"
            placeholder="Email"
            required
            className="login-signup-input"
            ref={this.emailInputRef}
          />

          <input
            type="password"
            placeholder="Password"
            required
            className="login-signup-input"
            ref={this.passwordInputRef}
          />

          {/* adding event listeners to listen to the events when the login button is pressed or released */}

          <button
            type="submit"
            className="login-signup-button"
            onMouseDown={(event) => this.handleClick(event)}
            onMouseUp={(event) => this.handleClick(event)}
          >
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
