import React from "react";
import { ImNext, ImPrevious } from "react-icons/im";
import styled from "styled-components";

const Padding = styled.span`
    margin: 10px 60px 10px 60px;
`;

function NextBefore(props) {
    return (
        <div data-testid="nextbefore">
            <ImPrevious data-testid="nextbefore-previous" />
            <Padding> </Padding>
            <ImNext data-testid="nextbefore-imnext" />
        </div>
    );
}

export default NextBefore;
