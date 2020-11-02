import React from "react";
import { render } from "@testing-library/react";
import NextBefore from "./NextBefore.js";
import "@testing-library/jest-dom/extend-expect";

describe("NextBefore component", () => {
    const renderComponent = (props) => render(<NextBefore />);

    test("NextBefore previous is visiable", () => {
        const { debug, getByTestId } = renderComponent();

        debug();
        const previous = getByTestId("nextbefore-previous");

        expect(previous).toBeInTheDocument();
    });

    test("NextBefore Next is visiable", () => {
        const { getByTestId } = renderComponent();

        const imnext = getByTestId("nextbefore-imnext");
        expect(imnext).toBeInTheDocument();
    });
});
