import React, { Component } from 'react';
import { getPeople } from './api';
import OnScreen from './OnScreen';
import ButtonsAndInput from './ButtonsAndInput';
import './App.css'
const axios = require("axios");

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
      id: '',
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
      .map((item) => <div className='item' key={item.id}> {item.name} <div> <button className='buttonDelete' onClick={() => this.remove(item.id)}> Delete </button> <button className='buttonAbout' onClick={() => this.about(item.country, item.age)}> About </button> </div> </div>)
      .slice(currentPage * this.state.elementsPerPage, currentPage * this.state.elementsPerPage + this.state.elementsPerPage);
  }

  remove = (id) => {
    axios.delete('http://127.0.0.1:3000/people/', + id)
      .then(response => this.state.filtered.splice(id,1));
   
  }

  about = (coun, age) => {
    alert("• Country: " + coun + "\n• Age: " + age);
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
    axios.post('http://localhost:3000/people', {
      name: this.state.input,
      id: 2391039204920232490
    }).then(function (response) {
      this.setState({ filtered: response})
    }).catch(function (error) {
      console.log(error)
    })
    this.setState({
      currentPage: 0, filtered: this.state.peoples
    })

    window.location.reload(3);

  }


  restorePage = () => {
    this.setState({
      currentPage: 0, filtered: this.state.peoples
    })
  }


  testeK =()=>{
   console.log(this.state.id)
  }

  render() {
    return (
      <div className="AllApp">
        <button onClick={this.testeK}> Oi </button>
        <OnScreen validate={this.state.validate} onChangeElements={this.elementsOnScreen()} currentPage={this.state.currentPage} />
        <div className="menu">
          <h1> Options </h1>
          <ButtonsAndInput restorePage={this.restorePage} nextPage={this.nextPage} previousPage={this.previousPage} getValueInput={this.filterNames} addItem={this.addItem} />
        </div>
      </div>
    );
  }
}

export default App;
