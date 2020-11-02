import React from "react";

function Type({ type }) {
    const default_type = (type) =>
        type === "" ? "Type: Default" : `Type: ${type}`;

    return <div data-testid="type-text">{default_type(type)}</div>;
}

export default Type;
