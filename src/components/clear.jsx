import React from "react";
import "../css/clear.css";

export default function ClearButton(props) {
    return (
        <button
            onClick={() => props.manejarClick()}
            className="boton--clear">
            {props.children}
        </button>
    );
};