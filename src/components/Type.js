import React from "react";

function Type(props) {
    const default_type = (type) => (type === "" ? "Default" : props.type);

    return (
        <>
            <h1 data-testuid="type-title">Type:</h1>
            <div data-testid="type-text">{default_type(props.type)}</div>
        </>
    );
}

export default Type;
