import React, { Fragment, Component } from "react";
import { Form, Header, Button } from "semantic-ui-react";
import { handleAnswerQuestion } from "../../actions/shared";
import { connect } from "react-redux";
import { toast } from "react-toastify";

class PollDetail extends Component {
  state = {
    value: ""
  };

  handleChange = (e, { value }) => this.setState({ value });

  handleSubmit = event => {
    event.preventDefault();
    const { value } = this.state;
    const { saveAnswer } = this.props;

    if (value !== "") {
      saveAnswer(value)
        .then(() => toast.success("Your answer is submitted"))
        .catch(error => toast.error("Submitting is failed: " + error));
    }
  };

  render() {
    const { value } = this.state;
    const { question, loading } = this.props;
    const disabled = value === "" ? true : false;

    return (
      <Fragment>
        <Form onSubmit={this.handleSubmit}>
          <Header>Would you Rather</Header>
          <Form.Radio
            label={question.optionOne.text}
            value="optionOne"
            checked={value === "optionOne"}
            onChange={this.handleChange}
          />
          <Form.Radio
            label={question.optionTwo.text}
            value="optionTwo"
            checked={value === "optionTwo"}
            onChange={this.handleChange}
          />
          <Button
            type="submit"
            disabled={disabled}
            primary
            fluid
            loading={loading}
          >
            Submit
          </Button>
        </Form>
      </Fragment>
    );
  }
}

function mapStateToProps({ apiCallsInProgress }) {
  return {
    loading: apiCallsInProgress > 0
  };
}

function mapDispatchToProps(dispatch, { question }) {
  const qid = question.id;

  return {
    saveAnswer: answer => dispatch(handleAnswerQuestion(qid, answer))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PollDetail);
