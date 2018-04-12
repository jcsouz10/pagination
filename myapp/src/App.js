import React, { Component } from 'react';
import Elements from './Elements';
import ButtonsAndInput from './ButtonsAndInput';

class App extends Component {
  constructor(props) {
    super(props);
    
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
      teste: '',
    };
  } 

  getValueInput = (evt) => {
    const inputValue = evt.target.value;
    this.setState({ input: inputValue });
    this.filterNames(inputValue);
  }
  
  filterNames = (inputValue)=> {
    const { peoples } = this.state;
    this.setState({
      filtered: peoples.filter(item =>item.name.includes(inputValue)),currentPage:0});
      const Oi = this.state.filtered.map(item=>item.name);
      if(Oi.length<=0){
        alert('Você está adicionando um nome')
      }
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
    
    remove = (id) => {
      console.log(this.state.filtered.length)
      if(this.state.filtered.length < 0){
        this.setState({currentPange: this.state.currenPage - 1})
      }
      this.setState({filtered: this.state.filtered.filter(item => item.name !== id) })
    }
    
    nextPage = () => {
      console.log(this.state.filtered)
      const {elementsPerPage, currentPage, filtered} = this.state;
        if ((currentPage+1) * elementsPerPage < filtered.length){
          this.setState({ currentPage: this.state.currentPage + 1 });
        }
    }
    
    previousPage = () => {
      const { currentPage } = this.state;
        if(currentPage - 1 >= 0){
        this.setState({ currentPage: this.state.currentPage - 1 });
        }
    }
    addItem = () =>{
      const inValue = {id:0 ,name: this.state.input}
      this.setState({filtered: this.state.filtered.concat(inValue), currentPage: 0, inputValue: ''})
    }
    
    render() {
      return (
        <div>
          <Elements onChangeElements={this.elementsOnScreen()} currentPage={this.state.currentPage} Add={this.addItem}/>
          <ButtonsAndInput nextPage={this.nextPage} previousPage={this.previousPage} getValueInput={this.getValueInput} />
        </div>
      );
    }
  }
  
  export default App;
  