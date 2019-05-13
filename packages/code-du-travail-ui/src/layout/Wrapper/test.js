import React from "react";
import { render } from "react-testing-library";
import Wrapper from ".";

describe("<Wrapper />", () => {
  test.each([["default"], ["dark"], ["light"]])(
    "it renders a %s Wrapper",
    variant => {
      const { container } = render(
        <Wrapper variant={variant}>this is a Button {variant} </Wrapper>
      );
      expect(container).toMatchSnapshot();
    }
  );
});
