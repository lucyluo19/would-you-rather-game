import React, { Component, Fragment } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { Container } from "semantic-ui-react";
import NavBar from "./nav/NavBar";
import NotFound from "./common/NotFound";
import Dashboard from "./dashboard/Dashboard";
import NewPoll from "./poll/NewPoll";
import LeaderBoard from "./leaderboard/LeaderBoard";
import Poll from "./dashboard/Poll";
import { connect } from "react-redux";
import SignIn from "./auth/SignIn";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LogOut from "./auth/LogOut";
import { loadData } from "../actions/shared";
import PropTypes from "prop-types";

class App extends Component {
  componentDidMount() {
    this.props
      .dispatch(loadData())
      .catch(error => toast.error("Loading Data Failed: " + error));
  }
  render() {
    const { authedUser } = this.props;
    return (
      <Container>
        {authedUser === null ? (
          <Route component={SignIn} />
        ) : (
          <Fragment>
            <NavBar />
            <Container style={{ width: "50%" }}>
              <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route path="/questions/:id" component={Poll} />
                <Route path="/add" component={NewPoll} />
                <Route path="/leaderboard" component={LeaderBoard} />
                <Route path="/logout" component={LogOut} />
                <Route component={NotFound} />
              </Switch>
              <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar
              />
            </Container>
          </Fragment>
        )}
      </Container>
    );
  }
}

App.propTypes = {
  authedUser: PropTypes.string
};

function mapStateToProps({ authedUser }) {
  return { authedUser };
}

export default connect(mapStateToProps)(App);
