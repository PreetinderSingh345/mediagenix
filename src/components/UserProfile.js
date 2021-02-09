import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import '../assets/css/profile.css';

// defining and exporting the User Profile class

class UserProfile extends React.Component {
  // getting the user from its id just after the component is mounted

  componentDidMount() {
    const { userId } = this.props.match.params;

    console.log('user id : ', userId);

    // dispatching an action to fetch the user from its id
  }

  render() {
    return (
      // profile container

      <div className="profile-container">
        {/* profile */}

        <div className="profile">
          {/* profile image container containing profile image */}

          <div className="profile-img-container">
            <FontAwesomeIcon id="profile-img" icon={faUserCircle} />
          </div>

          {/* field containers containing name and email */}

          <div className="fields-container">
            <div className="field-label">Name</div>

            <div className="field-value">Demo</div>
          </div>

          <div className="fields-container">
            <div className="field-label">Email</div>

            <div className="field-value">demo@demo.com</div>
          </div>

          {/* add friend button */}

          <button className="button edit-btn">Add Friend</button>
        </div>
      </div>
    );
  }
}

export default UserProfile;
