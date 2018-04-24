import React from 'react';
import './App.css'

export default props => (
  <div className="ButtonsAndInput"  >
    <input className='item2' onChange={(e) => props.getValueInput(e.target.value)}></input>
    <button className='item2' onClick={props.previousPage}> Previous </button>
    <button className='item2' onClick={props.nextPage}> Next </button>
    <button className='item2' onClick={props.addItem}> Add </button>
    <button className='item2' onClick={props.restorePage}> To restore page </button>
    <select className='item2' onChange={props.handle}>
      <option value="3" >3</option>
      <option value="4" >4</option>
      <option value="10" >10</option>
    </select>
  </div>
)