import React, { Component } from 'react';
import OnScreen from './OnScreen';
import ButtonsAndInput from './ButtonsAndInput';
const axios = require("axios");

class App extends Component {
  constructor(props) {
    super(props);
    

    this.state = {
      elementsPerPage: 3,
      currentPage: 0,
      input: "",
      peoples:[],
      filtered: [],
      validate: '',
    };
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:80/people').then(response => {
      this.setState({peoples: response.data});
      console.log(this.state.peoples)
      this.setState({filtered: this.state.peoples})
  }).catch(e => {
      console.log(e.response);
  });
  }

  filterNames = (input) => {
    const filtered = this.state.peoples.filter(item => item.name.includes(input));
    const validate = filtered.length ? '' : 'Você vai adicionar um nome';
    this.setState({ filtered, currentPage: 0, input, validate });
  }

  elementsOnScreen = () => {
    const { currentPage, filtered } = this.state;
    return filtered
      .map((item) => <li key={item.id}> {item.name} <button onClick={() => this.remove(item.name)}> Delete </button> </li>)
      .slice(currentPage * this.state.elementsPerPage, currentPage * this.state.elementsPerPage + this.state.elementsPerPage);
  }

  remove = (id) => {
    this.setState({ filtered: this.state.filtered.filter(item => item.name !== id) })
  }

  nextPage = () => {
    console.log(this.state.filtered)
    const { currentPage, filtered } = this.state;
    if ((currentPage + 1) * this.state.elementsPerPage < filtered.length) {
      this.setState({ currentPage: this.state.currentPage + 1 });
    }
    console.log(this.state.elementsPerPage)
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
    console.log(this.state.peoples)
  }

  restorePage = () => {
    this.setState({
      currentPage: 0, filtered: this.state.peoples
    })
  }

  handleChange(event) {
    const value = event.target.value;
    this.setState({ elementsPerPage: value, currentPage: 0 });

    console.log(this.state.newValueInput)
  }

  render() {
    return (
      <div>
        <OnScreen validate={this.state.validate} onChangeElements={this.elementsOnScreen()} currentPage={this.state.currentPage} />
        <ButtonsAndInput hadle={this.handleChange.bind(this)} restorePage={this.restorePage} nextPage={this.nextPage} previousPage={this.previousPage} getValueInput={this.filterNames} addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
