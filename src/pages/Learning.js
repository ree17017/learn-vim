import React from "react";
import Type from "../components/Type.js";
import Key from "../components/Key.js";
import Action from "../components/Action.js";
import Typekey from "../components/Typekey.js";
import SuccessFail from "../components/SuccessFail.js";
import NextBefore from "../components/NextBefore.js";

function Learning(props) {
    return (
        <div className="Learning">
            <Type type={props.type} />
            <Key vimKey={props.vimKey} />
            <Action />
            <Typekey />
            <SuccessFail />
            <NextBefore />
        </div>
    );
}

export default Learning;
