import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import FreeCodeCampLogo from './images/freecodecamp.png';
import Boton from './components/boton.jsx';
import Pantalla from './components/pantalla';
import ClearButton from './components/clear';
import { evaluate } from 'mathjs';

function App() {
  const [input, setInput] = useState('');
  const [finCalc, setfinCalc] = useState(false);
  const AddInput = val => {
    
    if (!finCalc) {
      setInput(input + val);
    }
  };
  const ClearInput = () => {
    setInput('');
    setfinCalc(false)
  };

  const Calcular = () => {
    setfinCalc(true);
    let resultado = null;
    try {
      if (input) {
        setInput(evaluate(input))
      } else {
        setInput("Campo vacio")
      }
    } catch (error) {
      setInput("ERROR")
    }
  }
  return (
    <div className="contenedor">
      <div className='logo--contenedor'>
        <img
          className='logo'
          src={FreeCodeCampLogo}
          alt='Logo freeCodeCamp'
        />
      </div>
      <section className='calculadora'>
        <Pantalla input={input} />
        <div className='fila'>
          <Boton manejarClick={AddInput}>1</Boton>
          <Boton manejarClick={AddInput}>2</Boton>
          <Boton manejarClick={AddInput}>3</Boton>
          <Boton manejarClick={AddInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={AddInput}>4</Boton>
          <Boton manejarClick={AddInput}>5</Boton>
          <Boton manejarClick={AddInput}>6</Boton>
          <Boton manejarClick={AddInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={AddInput}>7</Boton>
          <Boton manejarClick={AddInput}>8</Boton>
          <Boton manejarClick={AddInput}>9</Boton>
          <Boton manejarClick={AddInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={Calcular}>=</Boton>
          <Boton manejarClick={AddInput}>0</Boton>
          <Boton manejarClick={AddInput}>.</Boton>
          <Boton manejarClick={AddInput}>/</Boton>
        </div>
        <div className='fila'>
          <ClearButton
            manejarClick={ClearInput}>
            Clear
          </ClearButton>
        </div>
      </section>
    </div>
  );
}

export default App;
