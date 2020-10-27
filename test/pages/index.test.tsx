import React from "react";
import { render, fireEvent } from "../testUtils";
import IndexPage from "../../pages/index";

describe("IndexPage", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<IndexPage />, {});
    expect(asFragment()).toMatchSnapshot();
  });

  it("clicking button triggers alert", () => {
    const { getByText } = render(<IndexPage />, {});
    window.alert = jest.fn();
    fireEvent.click(getByText("test"));
    expect(window.alert).toHaveBeenCalledWith("With typescript and Jest");
  });
});
