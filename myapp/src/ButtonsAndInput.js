import React from 'react';
import './App.css'

export default props => (
  <div className="ButtonsAndInput"  >
    <input className='itemInput' onChange={(e) => props.getValueInput(e.target.value)}></input>
    <button className='itemAdd' onClick={props.addItem}> Add </button>
    <button className='itemPrevious' onClick={props.previousPage}> Previous </button>
    <button className='itemNext' onClick={props.nextPage}> Next </button>
    <button className='itemRestore' onClick={props.restorePage}> To restore page </button>
  </div>
)