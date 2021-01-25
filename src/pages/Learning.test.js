import React from "react";
import { render } from "@testing-library/react";
import Learning from "./Learning.js";
import "@testing-library/jest-dom/extend-expect";

describe("Learning Page", () => {
    const props = {
        type: "Movement",
        key: "l",
        variant: "success",
    };

    const renderComponent = (propsForTest = props) =>
        render(<Learning props={propsForTest} />);

    test("Type compoent", () => {
        const propsForTest = { ...props };
        const { debug, getByTestId } = renderComponent(propsForTest);

        const type = getByTestId("type-text");

        expect(type).toHaveTextContent(propsForTest.type);
    });

    test("Key compoent", () => {
        const propsForTest = { key: "qw", ...props };
        const { debug, getByTestId } = renderComponent(propsForTest);

        const key = getByTestId("key");

        expect(key).toHaveTextContent("Keyl");
    });

    test("Action component", () => {
        const propsForTest = { ...props, type: "" };
        const { debug, getByTestId } = renderComponent(propsForTest);

        const action = getByTestId("action");

        expect(action).toHaveTextContent(
            "Actionmove the curser to the right one character"
        );
    });
    test("Typekey component", () => {
        const propsForTest = { ...props, type: "" };
        const { debug, getByTestId } = renderComponent(propsForTest);

        const typeKey = getByTestId("typekey");
        const typeKeyInput = getByTestId("typekey-input");

        expect(typeKey).toContainElement(typeKeyInput);
    });

    test("Successfail component", () => {
        const propsForTest = { ...props, variant: "success" };
        const { getByTestId } = renderComponent(propsForTest);

        const successfail = getByTestId(`successfail-alert-undefined`);
    });

    test("NextBefore component", () => {
        const propsForTest = { ...props, type: "" };
        const { debug, getByTestId } = renderComponent(propsForTest);

        const nextbefore = getByTestId("nextbefore");
        const nextbeforePreviouse = getByTestId("nextbefore-previous");

        expect(nextbefore).toContainElement(nextbeforePreviouse);
    });
});
