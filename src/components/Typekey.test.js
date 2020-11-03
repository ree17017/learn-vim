import React from "react";
import { render } from "@testing-library/react";
import Typekey from "./Typekey.js";
import "@testing-library/jest-dom/extend-expect";

describe("Type component", () => {
    const props = {
        type: "Movement",
    };

    const renderComponent = (propsForTest = props) =>
        render(<Typekey type={propsForTest.type} />);

    test("Input is visable", () => {
        const propsForTest = props;
        const { debug, getByTestId } = renderComponent();

        debug();
        const type = getByTestId("typekey-input");

        expect(type).toBeInTheDocument();
    });
});
