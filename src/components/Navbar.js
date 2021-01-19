import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faSlash,
  faChevronRight,
  faSearch,
  faUserCircle,
  faSignInAlt,
  faSignOutAlt,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import '../assets/css/navbar.css';

// defining the Navbar class

class Navbar extends React.Component {
  render() {
    const { user, isLoggedIn } = this.props.auth;
    console.log(this.props);
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

              <div className="search-result-name">John Doe</div>
            </div>

            <div className="search-result">
              <FontAwesomeIcon
                icon={faUserCircle}
                className="search-result-icon"
              />

              <div className="search-result-name">JohnDoe</div>
            </div>
          </div>
        </div>

        {/* user container containing user information and links */}

        <div id="user-container">

          {/* user info container containing user avatar link to its profile(shown when the user is logged in) */}

          {isLoggedIn && (
            <div id="user-info">
              <Link to="/profile">
                <FontAwesomeIcon icon={faUserCircle} id="user-icon" />
              </Link>
            </div>
          )}

          {/* sign in out container containing links to different pages(shown according to whether the user is logged in or not) */}

          <div id="sign-in-out-container">
            {!isLoggedIn && (
              <Link to="/login" className="sign-in-out-links">
                Login
              </Link>
            )}

            {!isLoggedIn && (
              <Link to="/signup" className="sign-in-out-links">
                SignUp
              </Link>
            )}

            {isLoggedIn && (
              <Link to="/logout" className="sign-in-out-links">
                Logout
              </Link>
            )}

            {!isLoggedIn && (
              <Link to="/login" className="sign-in-out-icons">
                <FontAwesomeIcon icon={faSignInAlt} />
              </Link>
            )}

            {!isLoggedIn && (
              <Link to="/signup" className="sign-in-out-icons">
                <FontAwesomeIcon icon={faUserPlus} />
              </Link>
            )}

            {isLoggedIn && (
              <Link to="/logout" className="sign-in-out-icons">
                <FontAwesomeIcon icon={faSignOutAlt} />
              </Link>
            )}
          </div>
        </div>
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

// exporting the connected Navbar component

export default connect(mapStateToProps)(Navbar);
