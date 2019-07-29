import React from "react";
import PriceTable from "./PriceTable";
import { render } from "@testing-library/react";
import prices from "../../../assets/price.json";

describe("PriceTable", () => {
  it("should render table with currency data", () => {
    const { container, queryAllByTestId, queryAllByText } = render(
      <PriceTable prices={[prices[0]]} />
    );
    expect(queryAllByTestId("table-row").length).toBe(prices[0].quotes.length);
    expect(queryAllByText(prices[0].currency).length).toBe(
      prices[0].quotes.length
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
