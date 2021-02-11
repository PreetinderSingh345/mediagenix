import React from 'react';
import { connect } from 'react-redux';
import { fetchUserProfile } from '../actions/profile';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import '../assets/css/profile.css';
import { APIUrls } from '../helpers/urls';
import { getAuthTokenFromLocalStorage } from '../helpers/utils';
import { addFriend, removeFriend } from '../actions/friends';

// defining the User Profile class

class UserProfile extends React.Component {
  // defining the constructor function

  constructor(props) {
    super(props);

    // defining the state

    this.state = {
      success: null,
      successMessage: '',
      error: null,      
    };
  }

  // getting the user from its id just after the component is mounted

  componentDidMount() {
    // getting the data from props

    const { match } = this.props;

    // dispatching an action to fetch the user profile from its id(if the match field contains a userId params)

    if (match.params.userId) {
      this.props.dispatch(fetchUserProfile(match.params.userId));
    }
  }

  // handleFriendClick function(asynchronous function as it contains some asynchronous statements) to add or remove a friend

  handleFriendClick = async (add) => {
    // getting the data from props

    const { userId } = this.props.match.params;

    // making a post request with the below options, at the below url

    let url = null;

    // getting the url depending on whether the user is adding or removing the friend

    if (add) {
      url = APIUrls.addFriend(userId);
    } else {
      url = APIUrls.removeFriend(userId);
    }

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${getAuthTokenFromLocalStorage()}`,
      },
    };

    // awating till a response is fetched and converted to json

    const response = await fetch(url, options);
    const data = await response.json();

    // changing the state depending on whether the data has been fetched successfully or not

    if (data.success) {
      this.setState({
        success: true,
        successMessage: data.message,
      });

      // dispatching an action to add or remove the friend

      if (add) {
        this.props.dispatch(addFriend(data.data.friendship));
      } else {
        this.props.dispatch(removeFriend(userId));
      }
    } else {
      this.setState({
        success: false,
        error: data.message,
      });
    }
  };

  // function to check if the user is a friend or not

  checkIfUserIsFriend = () => {
    // getting the data from props

    const { match, friends } = this.props;
    const { userId } = match.params;

    // finding the index of the user whose profile is being viewed inside the array of the logged in user's friend's ids and returning whether the user is a friend or not

    const index = friends.map((friend) => friend.to_user._id).indexOf(userId);

    return index !== -1;
  };

  render() {
    // getting the data from props and state

    const { user, inProgress: loading, error } = this.props.userProfile;
    const { successMessage } = this.state;

    const isUserFriend = this.checkIfUserIsFriend();

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

          {/* showing an error message(if there is any, while fetching the user) */}

          {error && (
            <div className="profile-edit-message error-message">{error}</div>
          )}

          {/* showing a success or error message, while trying to add/remove the user as a friend */}

          {this.state.success && (
            <div
              id="friend-added"
              className="profile-edit-message successful-message"
            >
              {successMessage}
            </div>
          )}

          {this.state.error && (
            <div className="profile-edit-message error-message">{error}</div>
          )}

          {/* field containers containing name and email */}

          <div className="fields-container">
            <div className="field-label">Name</div>

            <div className="field-value">{user.name}</div>
          </div>
          <div className="fields-container">
            <div className="field-label">Email</div>

            <div className="field-value">{user.email}</div>
          </div>

          {/* add/remove friend button(shown only when the user has been successfully fetched) and clicks on them are handled by the handleFriendClick event listener */}

          {!error ? (
            isUserFriend ? (
              <button
                id="remove-friend-btn"
                className="button"
                onClick={() => this.handleFriendClick(false)}
              >
                Remove Friend
              </button>
            ) : (
              <button
                className="button edit-btn"
                onClick={() => this.handleFriendClick(true)}
              >
                Add Friend
              </button>
            )
          ) : (
            <div></div>
          )}
        </div>
      </div>
    );
  }
}

// defining the map state to props function

function mapStateToProps({ userProfile, userFriends }) {
  return {
    userProfile,
    friends: userFriends.friends,
  };
}

// exporting the connected User Profile component

export default connect(mapStateToProps)(UserProfile);
