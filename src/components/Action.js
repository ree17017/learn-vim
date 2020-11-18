import React from "react";
import styled from "styled-components";

const ActionText = styled.div`
    line-height: 100px;
    background: lightblue;
    width: 50%;
    margin: auto auto;
    font-family: "Bitter", serif;
`;

const ActionTitle = styled.h1`
    font-family: "Bitter", serif;
    line-height: 0px;
`;

function Action({ action }) {
    return (
        <div data-testid="action">
            <ActionTitle data-testid="action-title">Action</ActionTitle>
            <ActionText data-testid="action-text">{action}</ActionText>
        </div>
    );
}

export default Action;
