import React from 'react';
import FriendsListItem from './FriendsListItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import '../assets/css/friendsList.css';

// defining and exporting the FriendsList component

class FriendsList extends React.Component {
  render() {
    // getting the data from props

    const { friends } = this.props;

    return (
      // friends list

      <div id="friends-list">
        {/* friends list heading container, containing friends icon and heading */}

        <div id="friends-list-heading-container">
          <FontAwesomeIcon id="friends-list-icon" icon={faUserFriends} />
          <span id="friends-list-heading">Friends List</span>
        </div>

        {/* friends container containing the user's friends */}

        <div id="friends">          
          {/* showing the no friends message or the user's friends(rendered as FriendsListItem and we pass to each item the friend as props) depending on the number of friends */}

          {friends.length == 0 ? (
            <div id="no-friends-message">No friends</div>
          ) : (
            friends.map((friend, index) => (
              <FriendsListItem friend={friend} key={index} />
            ))
          )}
        </div>
      </div>
    );
  }
}

export default FriendsList;
