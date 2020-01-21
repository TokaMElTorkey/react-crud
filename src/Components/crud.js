import React, { Component } from "react";
import Counter from "./counter";
import Button from "react-bootstrap/Button";
class Crud extends Component {
  render() {
    return (
      <div>
        {this.props.items.map(item => (
          <Counter
            item={item}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
            onDelete={this.props.onDelete}
          />
        ))}
      </div>
    );
  }
}

export default Crud;
