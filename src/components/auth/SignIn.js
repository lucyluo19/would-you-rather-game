import React, { Component } from "react";
import { Card, Form, Button, Image, Header, Dropdown } from "semantic-ui-react";
import { connect } from "react-redux";
import { signIn } from "../../actions/authedUser";
import { toast } from "react-toastify";
import PropTypes from "prop-types";

class SignIn extends Component {
  state = {
    id: ""
  };
  dropDownOptions = () => {
    const { users } = this.props;

    return users.map(user => ({
      key: user.id,
      text: user.name,
      value: user.id,
      image: { avatar: true, src: user.avatarURL }
    }));
  };

  onChange = (event, result) => {
    const { value } = result;
    this.setState({ id: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { id } = this.state;
    const { signIn } = this.props;
    if (id) {
      signIn(id);
    } else {
      toast.error("Sign In failed");
    }
  };

  render() {
    const { id } = this.state;
    const disable = id === "" ? true : false;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Card centered>
          <Card.Content
            textAlign="center"
            style={{ backgroundColor: "lightgrey" }}
          >
            <Card.Header>
              <strong>Welcome to the Would You Rather App!</strong>
            </Card.Header>
            <p>Please sign in to continue.</p>
          </Card.Content>

          <Card.Content textAlign="center">
            <Image src="/images/logo.png" alt="logo" />

            <Header color="blue">Sign In</Header>
            <Dropdown
              placeholder="Select User"
              fluid
              selection
              options={this.dropDownOptions()}
              onChange={this.onChange}
              value={id}
            />
            <br />
            <Button type="submit" fluid disabled={disable} primary>
              Sign In
            </Button>
          </Card.Content>
        </Card>
      </Form>
    );
  }
}

SignIn.propTypes = {
  users: PropTypes.array.isRequired,
  signIn: PropTypes.func.isRequired
};

function mapStateToProps({ users }) {
  return {
    users: Object.values(users)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    signIn: id => dispatch(signIn(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
