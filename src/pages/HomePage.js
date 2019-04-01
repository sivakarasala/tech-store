import React from "react";
import { ProductConsumer } from "../context";

export default function HomePage() {
  return (
    <React.Fragment>
      <ProductConsumer>
        {value => {
          return <h1>Aum Namah Shivaya from home page</h1>;
        }}
      </ProductConsumer>
    </React.Fragment>
  );
}
