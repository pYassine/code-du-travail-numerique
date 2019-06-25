import React from "react";
import { render } from "react-testing-library";
import { _Metas } from "../Metas";

describe("<Metas />", () => {
  it("should render", () => {
    const url = "test.url";
    const title = "title";
    const description = "description";
    const image = "image.url";
    const { container } = render(
      <_Metas url={url} title={title} description={description} image={image} />
    );
    expect(container).toMatchSnapshot();
  });
});