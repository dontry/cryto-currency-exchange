import React from "react";
import { storiesOf } from "@storybook/react";
import PriceTable from "./index";
import prices from "../../assets/price.json";

storiesOf("PriceTable", module).add("with prices", () => (
  <PriceTable prices={prices} />
));
