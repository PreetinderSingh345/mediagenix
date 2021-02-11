import React from 'react';
import { connect } from 'react-redux';
import { clearAuthState, editUser } from '../actions/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import '../assets/css/profile.css';

// defining the Profile class

class Profile extends React.Component {
  // defining the constructor function

  constructor(props) {
    super(props);

    // defining the state object

    this.state = {
      name: props.auth.user.name,
      password: '',
      confirmPassword: '',
      editMode: false,
    };
  }

  // clearing the authentication state just before the component is going to get destroyed

  componentWillUnmount() {
    this.props.dispatch(clearAuthState());
  }

  // handle change function to handle the change in state

  handleChange = (fieldName, value) => {
    this.setState({
      [fieldName]: value,
    });
  };

  // handle save function to save the user's updated details

  handleSave = () => {
    // getting the data from state and props

    const { name, password, confirmPassword } = this.state;
    const { user } = this.props.auth;

    // dispatching an action to edit the user and providing to it the user details

    this.props.dispatch(editUser(name, password, confirmPassword, user._id));
  };

  render() {
    // getting the data from props and state

    const { user, error } = this.props.auth;
    const { editMode } = this.state;

    return (
      // profile container

      <div className="profile-container">
        {/* profile */}

        <div className="profile">
          {/* profile image container containing the profile image */}

          <div className="profile-img-container">
            <FontAwesomeIcon id="profile-img" icon={faUserCircle} />
          </div>

          {/* showing a message depending on whether the profile has been successfully updated or not(the successful message will be shown only on success and not all the time as in case of success we're setting error to false and not the default null value) */}

          {error && (
            <div className="profile-edit-message error-message">
              {error}
            </div>
          )}

          {error === false && (
            <div className="profile-edit-message successful-message">
              Profile updated successfully
            </div>
          )}

          {/* email(immutable) field container */}

          <div className="fields-container">
            <div className="field-label">Email</div>

            <div className="field-value">{user.email}</div>
          </div>

          {/* name field container(showing input to change the name in edit mode) */}

          <div className="fields-container">
            {!editMode && <div className="field-label">Name</div>}

            {editMode ? (
              <input
                className="field-input"
                type="text"
                onChange={(event) =>
                  this.handleChange('name', event.target.value)
                }
                value={this.state.name}
                placeholder="Name"
              />
            ) : (
              <div className="field-value">{user.name}</div>
            )}
          </div>

          {/* showing options to change the password in edit mode */}

          {editMode && (
            <div className="fields-container">
              <input
                className="field-input"
                type="password"
                onChange={(event) =>
                  this.handleChange('password', event.target.value)
                }
                value={this.state.password}
                placeholder="New password"
              />
            </div>
          )}

          {editMode && (
            <div className="fields-container">
              <input
                className="field-input"
                type="password"
                onChange={(event) =>
                  this.handleChange('confirmPassword', event.target.value)
                }
                value={this.state.confirmPassword}
                placeholder="Confirm password"
              />
            </div>
          )}

          {/* showing button(s) depending on whether the user is in edit mode or not */}

          <div id="buttons-container">
            {editMode ? (
              <button
                id="save-btn"
                className="button"
                onClick={() => this.handleSave()}
              >
                Save
              </button>
            ) : (
              <button
                className="button edit-btn"
                onClick={() => this.handleChange('editMode', true)}
              >
                Edit Profile
              </button>
            )}

            {editMode && (
              <button
                id="go-back-btn"
                className="button"
                onClick={() => this.handleChange('editMode', false)}
              >
                Go back
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

// defining the map state to props function

function mapStateToProps({ auth }) {
  return {
    auth,
  };
}

// exporting the connected Profile component

export default connect(mapStateToProps)(Profile);
