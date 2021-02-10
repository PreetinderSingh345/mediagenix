import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import '../assets/css/friendsList.css';

// defining and exporting the FriendsListItem class

class FriendsListItem extends React.Component {
  render() {
    // getting the data from props

    const { friend } = this.props;

    return (
      // friends list item containing friend's avatar and email

      <div className="friends-list-item">
        <div className="friend-avatar">
          <FontAwesomeIcon icon={faUserCircle} className="friend-avatar-icon" />
        </div>

        <div className="friend-email">{friend.email}</div>
      </div>
    );
  }
}

export default FriendsListItem;
