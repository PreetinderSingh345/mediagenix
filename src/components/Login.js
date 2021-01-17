import React from 'react';
import '../assets/css/loginSignUp.css';

// defining and exporting the Login class

class Login extends React.Component {
  // defining the constructor function

  constructor() {
    super();

    this.state = {
      clickCount: 0,
    };
  }

  // handling the event when the login button is pressed or released

  handleClick = (event) => {
    // changing button color to darkslategrey when it is pressed

    let button = event.target;

    if (this.state.clickCount % 2 == 0) {
      button.style.color = 'darkslategrey';
    } else {
      button.removeAttribute('style');
    }

    this.setState((prevState) => {
      return {
        clickCount: prevState.clickCount + 1,
      };
    });
  };

  render() {
    return (
      // login container

      <div className="login-signup-container">
        {/* login form containing heading, email, password input and login button*/}

        <form className="login-signup-form">
          <div className="login-signup-form-heading">Login</div>

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
