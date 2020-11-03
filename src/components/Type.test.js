import React from "react";
import { render } from "@testing-library/react";
import Type from "./Type.js";
import "@testing-library/jest-dom/extend-expect";

describe("Type component", () => {
    const props = {
        type: "Movement",
    };

    const renderComponent = (propsForTest = props) =>
        render(<Type type={propsForTest.type} />);

    test("Show the type", () => {
        const propsForTest = props;
        const { getByTestId } = renderComponent();

        const type = getByTestId("type-text");

        expect(type).toHaveTextContent(`Type: ${propsForTest.type}`);
    });

    test("Does not show blank", () => {
        const propsForTest = { ...props, type: "" };
        const { debug, getByTestId } = renderComponent(propsForTest);

        debug();
        const type = getByTestId("type-text");

        expect(type).toHaveTextContent("Type: Default");
    });
});
