import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import Project from "../Project/";

export default class MainGrid extends Component {
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
      <div className="App ui container">
        <Grid container stackable>
          {this.state.projects}
        </Grid>
      </div>
    );
  }
}
