import React from "react";
import { storiesOf } from "@storybook/react";
import Drawer from "./index";
import ExchangeOutput from "../ExchangeOutput";

const date = "20180507";
const buy = { time: "0930", price: "30.00" };
const sell = { time: "1930", price: "34.00" };

storiesOf("Drawer", module)
  .add("toggle on", () => <Drawer toggled={true}>Drawer</Drawer>)
  .add("with ExchangeOutput", () => (
    <Drawer toggled={true}>
      <ExchangeOutput buy={buy} sell={sell} date={date} />
    </Drawer>
  ));
