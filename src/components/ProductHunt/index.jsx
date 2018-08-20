import React, { Component } from "react";
import ProductHuntHeader from "./ProductHuntHeader";
import "./producthunt.css";
import ProductGrid from "./ProductGrid";
import seed from "./seed";
export default class ProductHunt extends Component {
  constructor(props) {
    super(props);
    this.state = seed;
  }

  like = (id, likes) => {
    this.setState({
      ...this.state.products,
      [id]: {
        ...this.state.products[id],
        likes: likes
      }
    });
    console.log("likes of " + id + " are now " + this.state.products[id].likes);
  };
  render() {
    return (
      <div className="ph-header">
        <ProductHuntHeader />
        <hr />
        <ProductGrid
          products={this.state.products}
          handleLike={this.like.bind(this)}
        />
      </div>
    );
  }
}
