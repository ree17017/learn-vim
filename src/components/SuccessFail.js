import React from "react";
import Alert from "react-bootstrap/Alert";

function SuccessFail({ variant }) {
    const status = (variant) => {
        if (variant === "success") {
            return variant.charAt(0).toUpperCase() + variant.slice(1);
        } else if (variant === "danger") {
            return "Wrong";
        }
    };

    return (
        <Alert data-testid={`successfail-alert-${variant}`} variant={variant}>
            {status(variant)}
        </Alert>
    );
}

export default SuccessFail;
