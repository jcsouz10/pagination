import React from 'react';
import './App.css'

export default props =>(
    <div className="ButtonsAndInput"  >
      <input onChange={props.getValueInput}></input>
      <button onClick={props.previousPage}> Previous </button>
      <button onClick={props.nextPage}> Next </button>
      <button onClick={props.addItem}> Add </button>
      <button onClick={props.restorePage}> To restore page </button>
    </div>
)