import React from "react";
import { ImNext, ImPrevious } from "react-icons/im";

function NextBefore(props) {
    return (
        <div data-testid="nextbefore">
            <ImPrevious data-testid="nextbefore-previous" />
            <ImNext data-testid="nextbefore-imnext" />
        </div>
    );
}

export default NextBefore;
