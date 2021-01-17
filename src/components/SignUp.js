import React from 'react';
import '../assets/css/loginSignUp.css';

// defining and exporting the SignUp class

class SignUp extends React.Component {
  // defining the constructor function

  constructor() {
    super();

    this.clickCount = 0;
  }

  // handling the event when the signup button is pressed or released

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

  render() {
    return (
      // signup container

      <div className="login-signup-container">
        {/* signup form containing heading, name, email, password, confirm password input and signup button*/}

        <form className="login-signup-form">
          <div className="login-signup-form-heading">SignUp</div>

          <input
            type="text"
            placeholder="Name"
            required
            className="login-signup-input"
          />

          <input
            type="email"
            placeholder="Email"
            required
            className="login-signup-input"
          />

          <input
            type="password"
            placeholder="Password"
            required
            className="login-signup-input"
          />

          <input
            type="password"
            placeholder="Confirm password"
            required
            className="login-signup-input"
          />

          {/* adding event listeners to listen to the events when the signup button is pressed or released */}

          <button
            type="submit"
            className="login-signup-button"
            onMouseDown={(event) => this.handleClick(event)}
            onMouseUp={(event) => this.handleClick(event)}
          >
            SignUp
          </button>
        </form>
      </div>
    );
  }
}

export default SignUp;
