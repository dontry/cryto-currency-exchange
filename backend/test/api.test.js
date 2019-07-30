const request = require("supertest");
const app = require("../app");

describe("/prices", () => {
  test("should get all prices ", done => {
    request(app)
      .get("/prices")
      .expect(200)
      .end((err, res) => {
        expect(res.body.length).toBeGreaterThan(0);
        done();
      });
  });

  test("should get prices of BTC", done => {
    request(app)
      .get("/prices")
      .query({ currency: "BTC" })
      .expect(200)
      .end((err, res) => {
        expect(res.body.length).toBeGreaterThan(0);
        done();
      });
  });

  test("should get prices of DATE 20180507", done => {
    request(app)
      .get("/prices")
      .query({ date: "20180507" })
      .expect(200)
      .end((err, res) => {
        expect(res.body.length).toBeGreaterThan(0);
        done();
      });
  });
});

describe("/dates", () => {
  test("get all dates ", done => {
    request(app)
      .get("/dates")
      .expect(200)
      .end((err, res) => {
        expect(res.body.length).toBeGreaterThan(0);
        done();
      });
  });
});

describe("/currencies", () => {
  test("get All currencies", done => {
    request(app)
      .get("/currencies")
      .expect(200)
      .end((err, res) => {
        expect(res.body.length).toBeGreaterThan(0);
        done();
      });
  });
});
