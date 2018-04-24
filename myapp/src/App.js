import React, { Component } from 'react';
import { getPeople } from './api';
import OnScreen from './OnScreen';
import ButtonsAndInput from './ButtonsAndInput';
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      elementsPerPage: 3,
      currentPage: 0,
      input: "",
      peoples: [],
      filtered: [],
      validate: '',
      country: '',
    };
  }
  
  componentDidMount() {
    getPeople().then(res => {
      this.setState({ peoples: res.data })
      this.setState({ filtered: this.state.peoples })
    })
    .catch(error => {
      console.log(error)
    });
  }

  filterNames = (input) => {
    const filtered = this.state.peoples.filter(item => item.name.includes(input));
    const validate = filtered.length ? '' : 'Você vai adicionar um nome';
    this.setState({ filtered, currentPage: 0, input, validate });
  }

  elementsOnScreen = () => {
    console.log(this.state.input)
    const { currentPage, filtered } = this.state;
    return filtered
    .map((item) => <div className='item' key={item.id}> {item.name} <div> <button className='buttonDelete' onClick={() => this.remove(item.name, item.id)}> Delete </button> <button className='buttonAbout' onClick={() => this.about(item.country, item.age)}> About </button> </div> </div>)
    .slice(currentPage * this.state.elementsPerPage, currentPage * this.state.elementsPerPage + this.state.elementsPerPage);
  }
  
  about = (coun, age) => {
    alert("• Country: "+coun +"\n• Age: "+age );
  }

  nextPage = () => {
    console.log(this.state.filtered)
    const { currentPage, filtered } = this.state;
    if ((currentPage + 1) * this.state.elementsPerPage < filtered.length) {
      this.setState({ currentPage: this.state.currentPage + 1 });
    }
  }
  
  previousPage = () => {
    const { currentPage } = this.state;
    if (currentPage - 1 >= 0) {
      this.setState({ currentPage: this.state.currentPage - 1 });
    }
  }
  
  addItem = () => {
    const inValue = { id: 99, name: this.state.input }
    this.setState({ filtered: this.state.peoples.concat(inValue), currentPage: 0, inputValue: '', validate: '' })
  }
  
  
  restorePage = () => {
    this.setState({
      currentPage: 0, filtered: this.state.peoples
    })
  }  

  render() {
    return (
      <div className="AllApp">
      <OnScreen validate={this.state.validate} onChangeElements={this.elementsOnScreen()} currentPage={this.state.currentPage} />
        <div className="menu">
        <h1> Options </h1>
      <ButtonsAndInput  restorePage={this.restorePage} nextPage={this.nextPage} previousPage={this.previousPage} getValueInput={this.filterNames} addItem={this.addItem} />
        </div>
      </div>
    );
  }
}

export default App;
