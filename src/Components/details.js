import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
class Details extends Component {
  // checkId = () => {
  //   const x = this.props.match.params.id;
  //   console.log(this.props.items.id);
  // };
  render() {
    return (
      <React.Fragment>
        {this.props.items.map(items => (
          <p>
            {this.props.match.params.id === "" + items.id ? (
              <div>
                <Card
                  id={items.id}
                  className="m-2"
                  // style={{ width: "20rem" }}
                >
                  <Card.Body>
                    {/* <Card.Img src={items.imageUrl} /> */}
                    <Card.Title>{items.name}</Card.Title>
                    <Card.Text>{items.descriptin}</Card.Text>
                    <p>
                      <Badge variant="p-3">{items.count} Times</Badge>
                    </p>
                  </Card.Body>
                </Card>
              </div>
            ) : (
              <p> </p>
            )}
          </p>
        ))}
      </React.Fragment>
    );
  }
}

export default Details;
