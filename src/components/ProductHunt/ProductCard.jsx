import React, { Component } from "react";
import { Card, Grid, Image, Icon, Button, Label } from "semantic-ui-react";
export default class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.state = { ...props };
  }
  like = () => {
    this.setState({
      likes: this.state.likes + 1
    });
    this.props.like(this.props.key, this.state.likes);
  };
  componentWillReceiveProps(someProps) {
    console.log("this is called");
    this.setState({ ...this.state, someProps });
  }
  render() {
    return (
      <Grid.Column width={5}>
        <Card>
          <Image src={this.props.img} />
          <Card.Content>
            <Card.Header>{this.props.name}</Card.Header>
            <Card.Meta>
              <span className="date">{this.props.price}</span>
            </Card.Meta>
          </Card.Content>
          <Card.Content extra>
            <Button
              as="div"
              labelPosition="right"
              onClick={this.like.bind(this)}
            >
              <Button color="red">
                <Icon name="heart" /> Like
              </Button>
              <Label as="a" basic pointing="left">
                {this.state.likes}
              </Label>
            </Button>
          </Card.Content>
        </Card>
      </Grid.Column>
    );
  }
}
