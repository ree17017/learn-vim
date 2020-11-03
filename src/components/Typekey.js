import React from "react";

function Typekey({ type }) {
    return (
        <div data-testid="typekey">
            <input
                placeholder="Enter Command here"
                type="text"
                data-testid="typekey-input"
            />
        </div>
    );
}

export default Typekey;
