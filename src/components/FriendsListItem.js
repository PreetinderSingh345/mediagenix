import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import '../assets/css/friendsList.css';

// defining and exporting the FriendsListItem class

class FriendsListItem extends React.Component {
  render() {
    // getting the data from props

    const { email, _id: userId } = this.props.friend.to_user;

    return (
      // friends list item containing friend's avatar and email

      <div className="friends-list-item">
        {/* link to the friend's profile through its avatar */}

        <Link to={`user/${userId}`}>
          <div className="friend-avatar">
            <FontAwesomeIcon
              icon={faUserCircle}
              className="friend-avatar-icon"
            />
          </div>
        </Link>
        <div className="friend-email">{email}</div>
      </div>
    );
  }
}

export default FriendsListItem;
