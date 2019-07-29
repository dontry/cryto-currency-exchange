import { recordSaga } from "../../utils/test-utils";
import { GET_PRICES_REQUEST, GET_PRICES_SUCCESS } from "./actions";
import api from "../../utils/api";
import { fetchPrices } from "./saga";
import prices from "../../assets/price.json";

describe("fetch Prices", () => {
  it("should fetch all prices with empty query", async () => {
    jest.spyOn(api, "get");
    api.get.mockImplementation(() =>
      Promise.resolve({
        data: prices
      })
    );

    const dispatched = await recordSaga({}, fetchPrices, {
      type: GET_PRICES_REQUEST,
      payload: {}
    });

    expect(dispatched).toContainEqual({
      type: GET_PRICES_SUCCESS,
      payload: { prices }
    });
  });

  it("should fetch prices of BTC", async () => {
    jest.spyOn(api, "get");
    const BTC = prices.filter(p => p.currency === "BTC");
    api.get.mockResolvedValue({ data: BTC });
    const dispatched = await recordSaga({}, fetchPrices, {
      type: GET_PRICES_REQUEST,
      payload: { currency: "BTC" }
    });

    expect(dispatched).toContainEqual({
      type: GET_PRICES_SUCCESS,
      payload: { prices: BTC }
    });
  });

  it("should fetch prices of 20180508", async () => {
    jest.spyOn(api, "get");
    const pricesOnDay20180507 = prices.filter(p => p.date === "20180507");
    api.get.mockResolvedValue({ data: pricesOnDay20180507 });
    const dispatched = await recordSaga({}, fetchPrices, {
      type: GET_PRICES_REQUEST,
      payload: { currency: "20180507" }
    });

    expect(dispatched).toContainEqual({
      type: GET_PRICES_SUCCESS,
      payload: { prices: pricesOnDay20180507 }
    });
  });
});
