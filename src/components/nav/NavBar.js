import React, { Component } from "react";
import { Menu, Icon, Image } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

class NavBar extends Component {
  render() {
    const { user } = this.props;
    return (
      <Menu pointing secondary>
        <Menu.Item style={{ paddingBottom: "0" }}>
          <img src={"/images/logo.png"} alt="logo" />
        </Menu.Item>
        <Menu.Item as={NavLink} exact to="/">
          <Icon name="home" />
          Home
        </Menu.Item>
        <Menu.Item as={NavLink} to="/add">
          <Icon name="tasks" />
          New Poll
        </Menu.Item>
        <Menu.Item as={NavLink} to="/leaderboard">
          <Icon name="trophy" />
          Leader Board
        </Menu.Item>

        <Menu.Menu position="right">
          <Menu.Item style={{ paddingBottom: 8 }}>
            {`Hello, ${user.name}`}
            <Image
              avatar
              spaced="right"
              src={user.avatarURL || "/images/placeholder.png"}
              style={{ marginLeft: 7 }}
            />
          </Menu.Item>

          <Menu.Item as={NavLink} to="/logout">
            <Icon name="sign-out" />
            Logout
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser,
    user: users[authedUser]
  };
}

export default connect(mapStateToProps)(NavBar);
