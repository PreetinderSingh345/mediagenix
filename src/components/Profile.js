import React from 'react';
import { connect } from 'react-redux';
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

  // handle change function to handle the change in state

  handleChange = (fieldName, value) => {
    this.setState({
      [fieldName]: value,
    });
  };

  render() {
    // getting the data from props and state

    const { user } = this.props.auth;
    const { editMode } = this.state;

    return (
      //   {/* link to the settings page */}

      //   <Link to="/settings">Settings</Link>

      // profile container

      <div id="profile-container">
        {/* profile */}

        <div id="profile">
          {/* profile image container containing the profile image */}

          <div id="profile-img-container">
            <img
              id="profile-img"
              src="https://images.unsplash.com/photo-1580929211634-0e8f1adae279?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8c2lraHxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
              alt="user-dp"
            />
          </div>

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
                onClick={() => this.handleChange('editMode', false)}
              >
                Save
              </button>
            ) : (
              <button
                id="edit-btn"
                className="button"
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
