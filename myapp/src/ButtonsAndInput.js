import React from 'react';
import './App.css';

export default props => (
  <div className="ButtonsAndInput"  >
    <input className='itemInput' placeholder='Find Name' onChange={(e) => props.getValueInput(e.target.value)}></input>
    <button className='itemAdd' onClick={props.addItem}> esse botao vai passar pro formulario ao lado 'add' </button>
    <button className='itemPrevious' onClick={props.previousPage}> Previous </button>
    <button className='itemNext' onClick={props.nextPage}> Next </button>
    <button className='itemRestore' onClick={props.restorePage}> To restore page </button>
  </div>
)