import React, { Component } from "react";
import "./App.css";
import Crud from "./Components/crud";
import Details from "./Components/details";
import { Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./Components/navbar";
import Cart from "./Components/cart";
class App extends Component {
  state = {
    items: [
      {
        id: 1,
        count: 0,
        initValue: 0,
        name: "Item One",
        imageUrl: "https://picsum.photos/100",
        descriptin:
          "Item One Some quick example text to build on the card title and make up the bulk of the card's content."
      },
      {
        id: 2,
        initValue: 0,
        count: 0,
        name: "Item Two",
        imageUrl: "https://picsum.photos/100",
        descriptin:
          "Item Two Some quick example text to build on the card title and make up the bulk of the card's content."
      },
      {
        id: 3,
        count: 0,
        initValue: 0,
        name: "Item Three",
        imageUrl: "https://picsum.photos/100",
        descriptin:
          "Item Three Some quick example text to build on the card title and make up the bulk of the card's content."
      }
    ]
  };
  plusCount = counter => {
    const items = [...this.state.items];
    const index = items.indexOf(counter);
    items[index] = { ...counter };
    items[index].count++;
    this.setState({ items });
  };
  minusCount = counter => {
    const items = [...this.state.items];
    const index = items.indexOf(counter);
    items[index] = { ...counter };
    items[index].count--;
    this.setState({ items });
  };
  deleteItem = itemId => {
    const items = this.state.items.filter(n => n.id !== itemId);
    this.setState({ items });
  };

  resetItem = () => {
    const items = this.state.items.map(n => {
      n.count = 0;
      return n;
    });
    this.setState({ items });
  };

  render() {
    return (
      <Router>
        <div className="App">
          {/* <Crud /> */}
          <NavBar
            totalCount={this.state.items.filter(n => n.count > 0).length}
            onReset={this.resetItem}
          />
          <Route
            exact={true}
            path="/"
            render={() => (
              <Crud
                items={this.state.items}
                onIncrement={this.plusCount}
                onDecrement={this.minusCount}
                onDelete={this.deleteItem}
              />
            )}
          />
          <Route
            exact={true}
            path="/details/:id"
            render={props => <Details items={this.state.items} {...props} />}
          />
          <Route
            exact={true}
            path="/cart"
            render={() => (
              <Cart
                items={this.state.items}
                onIncrement={this.plusCount}
                onDecrement={this.minusCount}
                onDelete={this.deleteItem}
              />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
