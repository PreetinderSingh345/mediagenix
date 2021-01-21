import React from 'react';
import { Link } from 'react-router-dom';

// defining and exporting the Profile class

class Profile extends React.Component {
  render() {
    return (
      <div>
        <div>Profile</div>

        {/* link to the settings page */}

        <Link to="/settings">Settings</Link>
      </div>
    );
  }
}

export default Profile;
