import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Contact from "./pages/ContactPage";
import Products from "./pages/ProductsPage";
import Cart from "./pages/CartPage";
import SingleProduct from "./pages/SingleProductPage";
import Default from "./pages/Default";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        {/* navbar, sidebar, cart, footer */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/products" exact component={Products} />
          <Route path="/cart" component={Cart} />
          <Route path="/products/:id" component={SingleProduct} />
          <Route component={Default} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
