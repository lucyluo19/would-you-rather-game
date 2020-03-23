import React from "react";
import { Segment, Button, Header, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Segment placeholder>
      <Header icon>
        <Icon name="search" />
        Oops - We couldn't find this page.
      </Header>
      <Segment.Inline>
        <Button as={Link} to="/" primary>
          Return to Home page.
        </Button>
      </Segment.Inline>
    </Segment>
  );
};

export default NotFound;
