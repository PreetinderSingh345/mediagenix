import React from 'react';
import { connect } from 'react-redux';
import { fetchUserProfile } from '../actions/profile';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import '../assets/css/profile.css';

// defining the User Profile class

class UserProfile extends React.Component {
  // getting the user from its id just after the component is mounted

  componentDidMount() {
    // getting the data from props

    const { match } = this.props;

    // dispatching an action to fetch the user profile from its id(if the match field contains a userId params)

    if (match.params.userId) {
      this.props.dispatch(fetchUserProfile(match.params.userId));
    }
  }

  render() {
    // getting the data from props

    const { user, inProgress: loading, error } = this.props.userProfile;

    // showing the loading text till the user is fetched

    if (loading) {
      return <div id="loading">Loading</div>;
    }

    return (
      // profile container

      <div className="profile-container">
        {/* profile */}

        <div className="profile">
          {/* profile image container containing profile image */}

          <div className="profile-img-container">
            <FontAwesomeIcon id="profile-img" icon={faUserCircle} />
          </div>

          {/* showing an error message(if there is any) */}

          {error && <div className="profile-edit-message error-message">{error}</div>}

          {/* field containers containing name and email */}

          <div className="fields-container">
            <div className="field-label">Name</div>

            <div className="field-value">{user.name}</div>
          </div>

          <div className="fields-container">
            <div className="field-label">Email</div>

            <div className="field-value">{user.email}</div>
          </div>

          {/* add friend button(shown only when the user has been successfully fetched) */}

          {!error && <button className="button edit-btn">Add Friend</button>}
        </div>
      </div>
    );
  }
}

// defining the map state to props function(getting the profile state from the root state)

function mapStateToProps({ userProfile }) {
  return {
    userProfile,
  };
}

// exporting the connected User Profile component

export default connect(mapStateToProps)(UserProfile);
