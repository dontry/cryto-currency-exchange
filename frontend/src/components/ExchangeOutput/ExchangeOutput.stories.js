import React from "react";
import { storiesOf } from "@storybook/react";
import ExchangeOutput from "./index";

const date = "20180507";
const buy = { time: "0930", price: "30.00" };
const sell = { time: "1930", price: "34.00" };

storiesOf("ExchangeOutput", module).add("with info", () => (
  <ExchangeOutput date={date} buy={buy} sell={sell} />
));
