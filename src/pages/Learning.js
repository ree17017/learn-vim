import React from "react";
import Type from "../components/Type.js";
import Key from "../components/Key.js";
import Action from "../components/Action.js";
import Typekey from "../components/Typekey.js";
import SuccessFail from "../components/SuccessFail.js";
import NextBefore from "../components/NextBefore.js";

function Learning() {
    const props = {
        vimKey: "l",
        type: "Movement",
        action: "move the curser to the right one character",
        status: "",
    };
    console.log("Learning#props", props);
    return (
        <div className="Learning">
            <Type type={props.type} />
            <Key vimKey={props.vimKey} />
            <Action action={props.action} />
            <Typekey type={props.vimKey} />
            <SuccessFail status={props.status} />
            <NextBefore />
        </div>
    );
}

export default Learning;
