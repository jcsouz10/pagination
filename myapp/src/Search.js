import React, { Component } from 'react';

class Search extends Component {
    constructor() {
      super();
  
      const peoples =[{id:0, name:"Jean"}, 
      {id:1, name:"Jaquinha"}, 
      {id:2, name:"Ricardo"}, 
      {id:3, name:"JaCA"}, 
      {id:4, name:"Letiiicia"}, 
      {id:5, name:"Dai"}, 
      {id:6, name:"Da iIIane"}, 
      {id:7, name:"Tamy"}, 
      {id:8, name:"Tamyresss"},
      {id:9, name:"Tamyres"}, 
      {id:10, name:"Abeu"}, 
      {id:11, name:"Abellll"}];
      
      this.state = {
        elementsPerPage:3,
        currentPage:0,
        peoples,
        input: "",
        filtered: peoples,
      };
      
    } 
    
    getValueInput = (evt) => {
      const inputValue = evt.target.value;
      this.setState({ input: inputValue });
      this.filterNames(inputValue);
    }
    
    filterNames = (inputValue) => {
      const { peoples } = this.state;
      this.setState({
        filtered: peoples.filter(item => 
          item.name.includes(inputValue)),
          currentPage:0
        });
      }
      
      elementsOnScreen = () => {
        const {elementsPerPage, currentPage, filtered} = this.state;
        return filtered
        .map((item) => <li key={item.id}> {item.name} <button onClick={() => this.remove(item.name)}> Delete </button> </li>)
        .slice(currentPage*elementsPerPage, currentPage*elementsPerPage + elementsPerPage);
        
        if(this.state.filtered.length < 1){
          this.setState({currentPage: this.state.currentPage - 1})
        }
      }
        render (){
            return(
                
                <div>
                <input type="text" onChange={ this.getValueInput }></input>
                <ul>Names: {this.elementsOnScreen()}</ul>
                </div>
            )
            
        }
    
    }

    export default Search;