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
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

// defining and exporting the Navbar class

class Navbar extends React.Component {
  render() {
    return (
      // navbar

      <div id="navbar">
        {/* heading container(link to the home page) */}

        <Link to="/" id="heading-container">
          <FontAwesomeIcon icon={faChevronLeft} className="brackets" />
          <FontAwesomeIcon icon={faSlash} id="slash-icon" />

          <span id="heading">Mediagenix</span>

          <FontAwesomeIcon icon={faChevronRight} className="brackets" />
        </Link>

        {/* search results container containing search container and search results */}

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

        {/* user container containing user information and links */}

        <div id="user-container">
          <div id="user-info">
            <FontAwesomeIcon icon={faUserCircle} id="user-icon" />
            <span id="user-name">John doe</span>
          </div>

          {/* sign in out container containing links to different pages */}

          <div id="sign-in-out-container">
            <Link to="/login" className="sign-in-out-links">
              Login
            </Link>
            <Link to="/logout" className="sign-in-out-links">
              logout
            </Link>
            <Link to="/signup" className="sign-in-out-links">
              SignUp
            </Link>

            <Link to="/login" className="sign-in-out-icons">
              <FontAwesomeIcon icon={faSignInAlt} />
            </Link>

            <Link to="/logout" className="sign-in-out-icons">
              <FontAwesomeIcon icon={faSignOutAlt} />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
