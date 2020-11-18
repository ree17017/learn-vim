import React from "react";
import styled from "styled-components";

const Card = styled.div`
    margin: auto auto;
    background: black;
    width: 40%;
    box-shadow: 4px 8px 0 rgba(0, 0, 0, 0.2h);
    color: white;
    font-family: "Bitter", serif;
`;

const Command = styled.div`
    font-size: 32px;
`;

function Key({ vimKey }) {
    return (
        <Card data-testid="key">
            <h2 data-testid="key-title">Key</h2>
            <Command datatestid="vim-key">{vimKey}</Command>
        </Card>
    );
}

export default Key;
