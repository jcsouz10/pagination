import React from 'react';
import './App.css'

export default props =>(
   <div className="OnScreen" > 
    <h1>{props.onChangeElements}</h1>
    <h3 className='item'>The current page is: {props.currentPage}</h3>
    <h3 className='validate'> {props.validate} </h3>
</div>
)