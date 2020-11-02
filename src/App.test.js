import React from "react";
import { render } from "@testing-library/react";
import App from "./App.js";
import "@testing-library/jest-dom/extend-expect";

describe("App component", () => {
  const props = {
    vimKey: "l",
    type: "Movement",
  };
  const renderComponent = (propsForTest = props) =>
    render(<App props={props} />);

  test("App the type", () => {
    const propsForTest = { ...props };
    const { getByTestId } = renderComponent();

    expect(true).toBe(true);
  });
});
