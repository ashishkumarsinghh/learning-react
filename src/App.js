import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductHunt from "./components/ProductHunt/";
import "./App.css";
import MainGrid from "./components/MainGrid";
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/product-hunt" component={ProductHunt} />
            <Route render={props => <MainGrid pcount={20} />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
