import React from "react";
import { render } from "react-testing-library";
import { SimulateurIndemnitePrecarite } from "..";

describe("<SimulateurIndemnitePrecarite />", () => {
  it("should render", () => {
    const { container } = render(<SimulateurIndemnitePrecarite />);
    expect(container).toMatchSnapshot();
  });
});