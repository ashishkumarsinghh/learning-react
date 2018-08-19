import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import ProductHunt from "./components/ProductHunt/";
import Project from "./components/Project";
import "./App.css";
class App extends Component {
  constructor(props) {
    super(props);
    const projects = [];
    for (let i = 0; i < this.props.pcount; i++) {
      projects.push(<Project />);
    }
    this.state = { projects };
  }
  render() {
    return (
      <Router>
        <div className="App ui container">
          <Grid container stackable>
            {this.state.projects}
          </Grid>

          <Route exact path="/product-hunt" component={ProductHunt} />
        </div>
      </Router>
    );
  }
}

export default App;
