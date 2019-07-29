import { getMaxProfitFromGivenPriceIndex } from "../index";

const testCases = [
  {
    input: [
      { time: "0915", price: "34.98" },
      { time: "1045", price: "36.13" },
      { time: "1230", price: "37.01" },
      { time: "1400", price: "35.98" },
      { time: "1530", price: "33.56" }
    ],
    expected: 2.03
  },
  {
    input: [
      { time: "0900", price: "1.45" },
      { time: "1030", price: "1.87" },
      { time: "1245", price: "1.55" },
      { time: "1515", price: "2.01" },
      { time: "1700", price: "2.15" }
    ],
    expected: 0.7
  },
  {
    input: [
      { time: "0930", price: "14.32" },
      { time: "1115", price: "14.87" },
      { time: "1245", price: "15.03" },
      { time: "1400", price: "14.76" },
      { time: "1700", price: "14.15" }
    ],
    expected: 0.71
  }
];

describe("getMaxProfit", () => {
  it("should return profit correctly", () => {
    testCases.forEach(({ input, expected }) => {
      expect(getMaxProfitFromGivenPriceIndex(input, 0).profit).toBe(expected);
    });
  });
});
