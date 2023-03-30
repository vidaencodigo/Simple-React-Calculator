import React from "react";
import '../css/boton.css';
export default function Boton(props) {
  const esOperador = (valor) => {
    const resp = isNaN(valor) && (valor !== '.') && (valor !== '=');
    return resp;
  };

  return (
    <div
      onClick={()=>props.manejarClick(props.children)}
      className={`boton ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}>
      {props.children}
    </div>
  );
};

