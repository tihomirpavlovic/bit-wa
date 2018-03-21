import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import About from "./About.js";
import Home from "./Home.js";
import Footer from "./partials/Footer";

const App = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Redirect exact from="/" to='/home' />
        <Route path="/about" component={About} />
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default App;

