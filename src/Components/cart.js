import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
class Cart extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        {this.props.items.map(items => (
          <span>
            {items.count > 0 ? (
              <Card
                id={items.id}
                className="m-2"
                style={{ width: "15rem", display: "inline-block" }}
              >
                <Button
                  variant="danger delete-btn"
                  onClick={() => this.props.onDelete(items.id)}
                >
                  Delete
                </Button>
                <Card.Img src={items.imageUrl} />
                <Card.Body>
                  <Card.Title>
                    <Link className="nav-link" to={"/details/" + items.id}>
                      {items.name}
                    </Link>
                  </Card.Title>

                  <Card.Text>{items.descriptin}</Card.Text>
                  <div>
                    <p>
                      <Badge variant="p-3">{items.count}</Badge>
                    </p>
                    <p>
                      <Button
                        variant="success m-2"
                        onClick={() => this.props.onIncrement(items)}
                      >
                        +1
                      </Button>

                      <Button
                        variant={
                          items.count > 0 ? "danger" : " d-none" + " m-2"
                        }
                        onClick={() => this.props.onDecrement(items)}
                      >
                        -1
                      </Button>
                    </p>
                  </div>
                </Card.Body>
              </Card>
            ) : (
              <p> </p>
            )}
          </span>
        ))}
      </React.Fragment>
    );
  }
}

export default Cart;
