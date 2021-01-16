import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faSlash,
  faChevronRight,
  faSearch,
  faUserCircle,
  faSignInAlt,
  faSignOutAlt,
  faRegistered,
  faBars,
} from '@fortawesome/free-solid-svg-icons';

// defining and exporting the Navbar class

class Navbar extends React.Component {
  render() {
    return (
      <div id="navbar">
        <div id="heading-container">
          <FontAwesomeIcon icon={faChevronLeft} className="brackets" />
          <FontAwesomeIcon icon={faSlash} id="slash-icon" />

          <span id="heading">Mediagenix</span>

          <FontAwesomeIcon icon={faChevronRight} className="brackets" />
        </div>

        <div id="search-results-container">
          <div id="search-container">
            <FontAwesomeIcon icon={faSearch} id="search-icon" />
            <input type="text" placeholder="Search..." id="search-input" />
          </div>

          <div id="search-results">
            <div className="search-result">
              <FontAwesomeIcon
                icon={faUserCircle}
                className="search-result-icon"
              />
              <div className="search-result-name">John doe</div>
            </div>

            <div className="search-result">
              <FontAwesomeIcon
                icon={faUserCircle}
                className="search-result-icon"
              />
              <div className="search-result-name">John doe</div>
            </div>
          </div>
        </div>

        <div id="user-container">
          <div id="user-info">
            <FontAwesomeIcon icon={faUserCircle} id="user-icon" />
            <span id="user-name">John doe</span>
          </div>

          <div id="sign-in-out-links">
            <a href="http://localhost:3000">Login</a>
            <a href="http://localhost:3000">Logout</a>
            <a href="http://localhost:3000">Register</a>

            <FontAwesomeIcon icon={faSignInAlt} className="sign-in-out-icons" />

            <FontAwesomeIcon
              icon={faSignOutAlt}
              className="sign-in-out-icons"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
