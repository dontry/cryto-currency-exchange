import api from "../api";

describe("api", () => {
  it("should get all prices", done => {
    api.get("/prices").then(response => {
      expect(response.data.length).toBe(3);
      done();
    });
  });

  it("should get prices of BTC", done => {
    api.get("/prices", { currency: "BTC" }).then(response => {
      expect(response.data.length).toBe(1);
      expect(response.data[0].currency).toBe("BTC");
      done();
    });
  });

  it("should get prices of date '20180507'", done => {
    api.get("/prices", { date: "20180507" }).then(response => {
      expect(response.data.length).toBe(3);
      expect(response.data.every(d => d.date === "20180507")).toBeTruthy();
      done();
    });
  });
});
