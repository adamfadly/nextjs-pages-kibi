import { currencyFormatter } from "./index";

describe(currencyFormatter, () => {
  test("currencyFormatter test case", () => {
    expect(typeof currencyFormatter(100000000000)).toBe("string");
    expect(typeof currencyFormatter("100000000000")).toBe("string");
  });
});
