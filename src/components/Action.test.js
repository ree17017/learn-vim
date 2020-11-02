import React from "react";
import { render } from "@testing-library/react";
import Action from "./Action.js";
import "@testing-library/jest-dom/extend-expect";

describe("Action component", () => {
    const props = {
        action: "Move cursor right one character",
    };
    const renderComponent = (propsForTest = props) =>
        render(<Action action={propsForTest.action} />);

    test("Action title", () => {
        const { getByTestId } = renderComponent();

        const action = getByTestId("action-title");

        expect(action).toHaveTextContent("Action");
    });
    test("Correct Action command", () => {
        const { debug, getByTestId } = renderComponent();

        debug();
        const action = getByTestId("action-text");

        expect(action).toHaveTextContent("Move cursor right one character");
    });
});
