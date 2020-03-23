import React, { Component } from "react";
import { Card, Button, Form, Divider } from "semantic-ui-react";
import { connect } from "react-redux";
import { handleAddQuestion } from "../../actions/shared";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";

class NewPoll extends Component {
  state = {
    optionOne: "",
    optionTwo: "",
    toDashboard: false
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { optionOne, optionTwo } = this.state;
    console.log(optionOne, optionTwo);

    this.props.addQuestion(optionOne, optionTwo);

    this.setState(() => ({
      optionOne: "",
      optionTwo: "",
      toDashboard: true
    }));
  };

  render() {
    const { optionOne, optionTwo, toDashboard } = this.state;
    const disabled = optionOne === "" || optionTwo === "" ? true : false;
    const { loading } = this.props;

    if (toDashboard === true) {
      return <Redirect to="/" />;
    }

    return (
      <Form onSubmit={this.handleSubmit}>
        <Card centered>
          <Card.Content textAlign="center">
            <Card.Header>Create New Poll</Card.Header>
          </Card.Content>
          <Card.Content>
            <p>Complete the question:</p>
            <p>
              <strong>Would you rather...</strong>
            </p>
            <Form.Field>
              <input
                name="optionOne"
                placeholder="Option One"
                onChange={this.handleChange}
                value={optionOne}
              />
            </Form.Field>
            <Divider horizontal>Or</Divider>
            <Form.Field>
              <input
                name="optionTwo"
                placeholder="Option Two"
                onChange={this.handleChange}
                value={optionTwo}
              />
            </Form.Field>
          </Card.Content>
          <Card.Content extra>
            <Button
              type="submit"
              fluid
              disabled={disabled}
              primary
              loading={loading}
            >
              Submit
            </Button>
          </Card.Content>
        </Card>
      </Form>
    );
  }
}

NewPoll.propTypes = {
  addQuestion: PropTypes.func.isRequired
};

function mapStateToProps({ apiCallsInProgress }) {
  return {
    loading: apiCallsInProgress > 0
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addQuestion: (optionOne, optionTwo) => {
      dispatch(handleAddQuestion(optionOne, optionTwo));
    }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(NewPoll);
