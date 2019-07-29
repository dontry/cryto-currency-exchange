import React from "react";
import { storiesOf } from "@storybook/react";
import PriceTable from "./index";
import prices from "src/assets/price.json";
import { convertPricesIntoList } from "src/utils";

storiesOf("PriceTable", module).add("with prices", () => (
  <PriceTable prices={convertPricesIntoList(prices)} />
));
