import React from "react";

function Type(props) {
    const default_type = (type) =>
        type === undefined ? "Type: Default" : `Type: ${props.type}`;

    return <div data-testid="type-text">{default_type(props.type)}</div>;
}

export default Type;
