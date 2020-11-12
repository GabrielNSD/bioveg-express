import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import Home from "../pages/Home";
import Pequena from "../pages/Pequena";
import Media from "../pages/Media";
import Grande from "../pages/Grande";
import Produtos from "../pages/Produtos";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/pequena">
          <Pequena />
        </Route>
        <Route path="/media">
          <Media />
        </Route>
        <Route path="/grande">
          <Grande />
        </Route>
        <Route path="/produtos">
          <Produtos />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
