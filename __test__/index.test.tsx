// import "@testing-library/jest-dom";
// import { render, screen } from "@testing-library/react";
// import Home from "../src/pages/Home";

// describe("Home", () => {
//   it("renders a heading", () => {
//     render(<Home />);

//     const heading = screen.getByRole("heading", { level: 1 });

//     expect(heading).toBeInTheDocument();
//   });
// });

import React from "react";
import { render } from "@testing-library/react";
import Home from "../src/pages/Home";
import "@testing-library/jest-dom";

test("renders Home component", () => {
  const { getByText } = render(<Home />);
  const homeElement = getByText(/Home/i);
  expect(homeElement).toBeInTheDocument();
});
