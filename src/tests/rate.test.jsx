import { render } from "@testing-library/react";
import React from "react";
import { Rate } from "../components/Rate/Rate";

describe("Rate component", () => {
  const rate = <Rate count={7} />;

  it("Count rate", () => {
    const { baseElement } = render(rate);
    expect(baseElement.getElementsByClassName("ant-rate-star ").length).toEqual(
      7,
    );
  });
});
