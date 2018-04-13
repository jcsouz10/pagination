import React from 'react';
import './App.css'

export default props => (
  <div className="ButtonsAndInput"  >
    <input onChange={(e) => props.getValueInput(e.target.value)}></input>
    <button onClick={props.previousPage}> Previous </button>
    <button onClick={props.nextPage}> Next </button>
    <button onClick={props.addItem}> Add </button>
    <button onClick={props.restorePage}> To restore page </button>
    <select onChange={props.handle}>
      <option value="3" >3</option>

      <option value="4" >4</option>
      <option value="10" >10</option>
    </select>
  </div>
)