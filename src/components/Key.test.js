import React from "react";
import { render } from "@testing-library/react";
import Key from "./Key.js";
import "@testing-library/jest-dom/extend-expect";

describe("Key component", () => {
    const props = {
        vimKey: "l",
    };

    const renderComponent = (propsForTest = props) =>
        render(<Key vimKey={propsForTest.vimKey} />);

    test("Key is visiable", () => {
        const { getByTestId } = renderComponent();

        const title = getByTestId("key-title");

        expect(title).toHaveTextContent("Key");
    });

    test("Key is visiable in the DOM", () => {
        const { debug, getByTestId } = renderComponent();
        debug();

        const vimKey = getByTestId("vim-key");
        expect(vimKey).toHaveTextContent(props.vimKey);
    });
});
