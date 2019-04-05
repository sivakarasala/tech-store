import React from "react";
import Hero from "../components/Hero";
import cartBcg from "../images/storeBcg.jpeg";
import CartSection from "../components/CartPage";

export default function CartPage(props) {
  return (
    <React.Fragment>
      <Hero img={cartBcg} />
      <CartSection history={props.history} />
    </React.Fragment>
  );
}
