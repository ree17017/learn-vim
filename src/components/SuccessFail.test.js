import React from "react";
import { render } from "@testing-library/react";
import SuccessFail from "./SuccessFail.js";
import "@testing-library/jest-dom/extend-expect";

describe("SuccessFail component", () => {
    const props = {
        variant: "success",
    };

    const capitalizeVariant = (variant) =>
        variant.charAt(0).toUpperCase() + variant.slice(1);

    const renderComponent = (propsForTest = props) =>
        render(<SuccessFail variant={propsForTest.variant} />);

    afterEach(() => {
        capitalizeVariant("");
    });

    test("Alert shows Success when correct answer", () => {
        const propsForTest = props;
        const { getByTestId } = renderComponent();

        const alert = getByTestId(`successfail-alert-${propsForTest.variant}`);

        expect(alert).toHaveTextContent(
            capitalizeVariant(propsForTest.variant)
        );
    });

    test("Alert shows Wrong when wrong answer", () => {
        const propsForTest = { ...props, variant: "danger" };
        const { getByTestId } = renderComponent(propsForTest);

        const alert = getByTestId(`successfail-alert-${propsForTest.variant}`);

        expect(alert).toHaveTextContent("Wrong");
    });
});
