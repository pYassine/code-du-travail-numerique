import React from "react";
import { render } from "react-testing-library";
import GlobalStyles from "../css/index.js";

describe("<GlobalStyles />", () => {
  it("should render", () => {
    const { container } = render(<GlobalStyles />);
    expect(container).toMatchSnapshot();
  });
});