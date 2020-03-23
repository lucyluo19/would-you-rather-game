import React from "react";
import {
  Segment,
  Grid,
  Image,
  Header,
  Divider,
  Label
} from "semantic-ui-react";

export const LeaderBoardItem = ({ leader, index }) => {
  const trophyColor = ["yellow", "grey", "orange"];

  return (
    <Segment>
      <Grid divided>
        <Label corner="left" icon="trophy" color={trophyColor[index]} />

        <Grid.Column width={4} verticalAlign="middle">
          <Image circular src={leader.avatar || "/images/placeholder.png"} />
        </Grid.Column>

        <Grid.Column width={8}>
          <Header as="h2" style={{ marginBottom: "1em" }}>
            {leader.username}
          </Header>
          <Grid>
            <Grid.Column width={12}>Answered Questions: </Grid.Column>
            <Grid.Column width={4}>{leader.answered}</Grid.Column>
          </Grid>
          <Divider />
          <Grid>
            <Grid.Column width={12}>Created Questions: </Grid.Column>
            <Grid.Column width={4}>{leader.created}</Grid.Column>
          </Grid>
        </Grid.Column>

        <Grid.Column width={4} textAlign="center" verticalAlign="middle">
          <Segment>
            <Label attached="top">SCORE</Label>
            <Label circular color="green" size="big">
              {leader.total}
            </Label>
          </Segment>
        </Grid.Column>
      </Grid>
    </Segment>
  );
};
