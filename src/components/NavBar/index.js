import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

export default class Navbar extends Component {
  render() {
    return (
      <Menu stackable inverted>
        <Menu.Item>Home</Menu.Item>
        <Menu.Item>About</Menu.Item>
        <Menu.Item>Blog</Menu.Item>
        <Menu.Item>Contact</Menu.Item>
      </Menu>
    );
  }
}
