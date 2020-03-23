import React, { Fragment, Component } from "react";
import { Header, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

class PollOverview extends Component {
  render() {
    const { question } = this.props;

    return (
      <Fragment>
        <Header>Would you Rather</Header>
        <p>{`...${question.optionOne.text}...`}</p>
        <Button as={Link} to={`/questions/${question.id}`} primary fluid>
          View Poll
        </Button>
      </Fragment>
    );
  }
}

export default PollOverview;
