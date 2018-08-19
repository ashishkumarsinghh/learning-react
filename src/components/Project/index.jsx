import React, { Component } from "react";
import { Card, Icon, Image, Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";
export default class Project extends Component {
  render() {
    return (
      <Grid.Column width={5}>
        <Link to="/product-hunt">
          <Card>
            <Image src="https://picsum.photos/200?random" />
            <Card.Content>
              <Card.Header>Matthew</Card.Header>
              <Card.Meta>
                <span className="date">Joined in 2015</span>
              </Card.Meta>
              <Card.Description>
                Matthew is a musician living in Nashville.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name="user" />
                22 Friends
              </a>
            </Card.Content>
          </Card>
        </Link>
      </Grid.Column>
    );
  }
}
