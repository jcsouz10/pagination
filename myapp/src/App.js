import React, { Component } from 'react';
import OnScreen from './OnScreen';
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
      validate: '',
      newValue:'',
      currency: '',
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
     
      if(this.state.filtered <=0){
        this.setState({validate: "Você vai adicionar um nome"})
      }
      if( inputValue.length === 0){
        this.setState({validate: ''})
        console.log(inputValue.length)
      }
      }
    
    elementsOnScreen = () => {
      const { currentPage, filtered} = this.state;
      return filtered
        .map((item) => <li key={item.id}> {item.name} <button onClick={() => this.remove(item.name)}> Delete </button> </li>)
        .slice(currentPage*this.state.elementsPerPage, currentPage*this.state.elementsPerPage + this.state.elementsPerPage);
    }
    
    remove = (id) => {
      this.setState({filtered: this.state.filtered.filter(item => item.name !== id) })
    }
    
    nextPage = () => {
      console.log(this.state.filtered)
      const {currentPage, filtered} = this.state;
        if ((currentPage+1) * this.state.elementsPerPage < filtered.length){
          this.setState({ currentPage: this.state.currentPage + 1 });
        }
        console.log(this.state.elementsPerPage)
    }
    
    previousPage = () => {
      const { currentPage } = this.state;
        if(currentPage - 1 >= 0){
          this.setState({ currentPage: this.state.currentPage - 1 });
        }
    }

    addItem = () =>{
      const inValue = {id:99,name: this.state.input}
      this.setState({filtered: this.state.peoples.concat(inValue), currentPage: 0, inputValue: '', validate: ''})
      console.log(this.state.peoples)
    }

    restorePage = () => {
      this.setState({
        currentPage:0, filtered: this.state.peoples
      })
    }

    handleChange(event) {
      const value = event.target.value;
      this.setState({elementsPerPage: value, currentPage:0});

      console.log(this.state.newValueInput)
    }
  
    render() {
      return (
        <div>
          <OnScreen validate={this.state.validate} onChangeElements={this.elementsOnScreen()} currentPage={this.state.currentPage} />
          <ButtonsAndInput hadle={this.handleChange.bind(this)} restorePage={this.restorePage} nextPage={this.nextPage} previousPage={this.previousPage} getValueInput={this.getValueInput} addItem={this.addItem}/>
        </div>
      );
    }
  }
  
  export default App;
  