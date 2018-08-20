import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import ProductCard from "./ProductCard";
export default class ProductGrid extends Component {
  hlike = (id, likes) => this.props.handleLike(id, likes);
  constructor(props) {
    super(props);
    const projects = [];
    for (const [key, value] of Object.entries(this.props.products))
      projects.push(
        <ProductCard {...value} key={key} like={this.hlike.bind(this, key)} />
      );

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
