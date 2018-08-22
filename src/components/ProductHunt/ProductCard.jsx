import React, { Component } from "react";
import { Card, Grid, Image, Icon, Button, Label } from "semantic-ui-react";
import store from "../../store";
import { likeProduct } from "../../actions";
export default class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.state = { ...props };
  }
  like = () => {
    this.setState({
      likes: this.state.likes + 1
    });
    this.props.like(this.props.id, this.state.likes);
    let id = this.props.id;
    const act = likeProduct(id);
    store.dispatch(act);
  };

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
