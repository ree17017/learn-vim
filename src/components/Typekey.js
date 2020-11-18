import React from "react";
import styled from "styled-components";

const CommandInput = styled.input`
    margin: 10px 0 30px 0;
    height: 30px;
`;

function Typekey({ type }) {
    return (
        <div data-testid="typekey">
            <CommandInput
                placeholder="Enter Command here"
                type="text"
                data-testid="typekey-input"
            />
        </div>
    );
}

export default Typekey;
