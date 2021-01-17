import React from 'react';

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

  handleClick = () => {
    // changing button color to darkslategrey when it is pressed

    let button = document.getElementById('login-button');

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

      <div id="login-container">
        {/* login form containing heading, email, password input and login button*/}

        <form id="login-form">
          <div id="login-form-heading">Login</div>

          <input
            type="email"
            placeholder="Email"
            required
            className="login-input"
          />

          <input
            type="password"
            placeholder="Password"
            required
            className="login-input"
          />

          <button
            type="submit"
            id="login-button"
            onMouseDown={this.handleClick}
            onMouseUp={this.handleClick}
          >
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
