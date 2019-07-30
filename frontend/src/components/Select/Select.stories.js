import React from "react";
import { storiesOf } from "@storybook/react";
import Select from "./index";

const options = [
  { value: "", label: "" },
  { value: "2017", label: "2017" },
  { value: "2018", label: "2018" },
  { value: "2019", label: "2019" }
];

storiesOf("Select", module).add("with date options", () => (
  <Select options={options} label="Date:" />
));
