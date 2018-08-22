import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import ProductHunt from "./components/ProductHunt/";
import "./App.css";
import MainGrid from "./components/MainGrid";
import store from "./store";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Switch>
              <Route exact path="/product-hunt" component={ProductHunt} />
              <Route render={props => <MainGrid pcount={20} />} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
