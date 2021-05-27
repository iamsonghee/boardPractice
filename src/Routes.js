import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Login from "./Pages/Login/Login";
import Board from "./Pages/Main/Board";
import DetailContent from "./Pages/Main/DetailContent";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/board" component={Board} />
          <Route exact path="/board/:id" component={DetailContent} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
