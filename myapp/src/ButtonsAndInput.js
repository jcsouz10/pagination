import React from 'react';

export default props =>(
    <div>
      <input onChange={props.getValueInput}></input>
      <button onClick={props.previousPage}> Previous </button>
      <button onClick={props.nextPage}> Next </button>
      <button onClick={props.addItem}> Add </button>
    </div>
)