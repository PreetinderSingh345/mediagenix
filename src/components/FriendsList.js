import React from 'react';
import FriendsListItem from './FriendsListItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import '../assets/css/friendsList.css';

// defining and exporting the FriendsList component

class FriendsList extends React.Component {
  render() {
    return (
      // friends list

      <div id="friends-list">
        {/* friends list heading container containing friends icon and heading */}

        <div id="friends-list-heading-container">
          <FontAwesomeIcon id="friends-list-icon" icon={faUserFriends} />
          <span id="friends-list-heading">Friends List</span>
        </div>

        {/* friends container containing the friends list items */}

        <div id="friends">
          <FriendsListItem />
        </div>
      </div>
    );
  }
}

export default FriendsList;