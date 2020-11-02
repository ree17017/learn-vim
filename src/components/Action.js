import React from "react";

function Action({ action }) {
    return (
        <div data-testid="action">
            <h2 data-testid="action-title">Action</h2>
            <div data-testid="action-text">{action}</div>
        </div>
    );
}

export default Action;
