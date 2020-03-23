import React, { Component } from "react";
import { logOut } from "../../actions/authedUser";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class LogOut extends Component {
  componentDidMount() {
    this.props.dispatch(logOut());
  }
  render() {
    return <Redirect to="/" />;
  }
}

export default connect()(LogOut);
