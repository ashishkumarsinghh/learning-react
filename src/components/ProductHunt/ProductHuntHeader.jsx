import React, { Component } from "react";
import { Header } from "semantic-ui-react";

export default class ProductHuntHeader extends Component {
  render() {
    return (
      <Header as="h1" textAlign="center">
        <Header.Content>ProductHunt</Header.Content>
        <Header sub>Vote your favorite products.</Header>
      </Header>
    );
  }
}
