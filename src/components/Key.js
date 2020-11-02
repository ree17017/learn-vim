import React from "react";

function Key({ vimKey }) {
    return (
        <div data-testid="key">
            <h2 data-testid="key-title">Key</h2>
            <span data-testid="vim-key">{vimKey}</span>
        </div>
    );
}

export default Key;
