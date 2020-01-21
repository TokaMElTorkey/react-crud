import React, { Component, Fragment } from "react";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

class Counter extends Component {
  render() {
    return (
      <React.Fragment>
        <Card
          id={this.props.item.id}
          className="m-2"
          style={{ width: "15rem", display: "inline-block" }}
        >
          <Button
            variant="danger delete-btn"
            onClick={() => this.props.onDelete(this.props.item.id)}
          >
            Delete
          </Button>
          <Card.Img src={this.props.item.imageUrl} />
          <Card.Body>
            <Card.Title>
              <Link className="nav-link" to={"/details/" + this.props.item.id}>
                {this.props.item.name}
              </Link>
            </Card.Title>

            <Card.Text>{this.props.item.descriptin}</Card.Text>
            <div>
              <p>
                <Badge variant="p-3">{this.getCount()}</Badge>
              </p>
              <p>
                <Button
                  variant="success m-2"
                  onClick={() => this.props.onIncrement(this.props.item)}
                >
                  +1
                </Button>

                <Button
                  variant={
                    this.props.item.count > 0 ? "danger" : " d-none" + " m-2"
                  }
                  onClick={() => this.props.onDecrement(this.props.item)}
                >
                  -1
                </Button>
              </p>
            </div>
          </Card.Body>
        </Card>
      </React.Fragment>
    );
  }
  getCount() {
    const { count } = this.props.item;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
