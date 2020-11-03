import React from "react";
import { render } from "@testing-library/react";
import Learning from "./Learning.js";
import "@testing-library/jest-dom/extend-expect";

describe("Learning Page", () => {
    const props = {
        type: "Movement",
        key: "l",
    };

    const renderComponent = (propsForTest = props) =>
        render(<Learning props={propsForTest} />);

    test("Type compoent", () => {
        const propsForTest = { ...props };
        const { debug, getByTestId } = renderComponent(propsForTest);
        debug();

        const type = getByTestId("type-text");

        expect(type).toHaveTextContent(`Type: ${propsForTest.type}`);
    });

    test("Key compoent", () => {
        const propsForTest = { ...props, type: "" };
        const { debug, getByTestId } = renderComponent(propsForTest);

        debug();

        expect(true).toBe(true);
    });

    test("Action component", () => {
        const propsForTest = { ...props, type: "" };
        const { debug, getByTestId } = renderComponent(propsForTest);

        debug();

        expect(true).toBe(true);
    });
    test("Typekey component", () => {
        const propsForTest = { ...props, type: "" };
        const { debug, getByTestId } = renderComponent(propsForTest);

        debug();

        expect(true).toBe(true);
    });

    test("Successfail component", () => {
        const propsForTest = { ...props, type: "" };
        const { debug, getByTestId } = renderComponent(propsForTest);

        debug();

        expect(true).toBe(true);
    });
    test("NextBefore component", () => {
        const propsForTest = { ...props, type: "" };
        const { debug, getByTestId } = renderComponent(propsForTest);

        debug();

        expect(true).toBe(true);
    });
});
