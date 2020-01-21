import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import Badge from "react-bootstrap/Badge";
class NavBar extends Component {
  render() {
    return (
      <Navbar expand="lg" variant="light" bg="light">
        <div className="justify-content-start w-50">
          <Navbar.Brand>
            <span>
              <Link className="nav-link d-inline-block" to="/">
                Home
              </Link>
              <Link className="nav-link d-inline-block" to="/cart">
                Total Items
                <Badge
                  variant={
                    this.props.totalCount > 0 ? "success" : "danger" + " p-2"
                  }
                >
                  {this.props.totalCount}
                </Badge>
              </Link>
            </span>
          </Navbar.Brand>
        </div>
        <div className="justify-content-end w-50">
          <Link onClick={this.props.onReset} to="/">
            <Button variant="danger" onClick={this.props.onReset}>
              Reset
            </Button>
          </Link>
        </div>
      </Navbar>
    );
  }
}

export default NavBar;
