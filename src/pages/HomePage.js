import React from "react";
import { ProductConsumer } from "../context";

export default function HomePage() {
  return (
    <React.Fragment>
      <ProductConsumer>{value => <h1>{value}</h1>}</ProductConsumer>
    </React.Fragment>
  );
}
