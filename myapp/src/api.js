const axios = require ("axios");


export function getPeople(){
  return axios.get('http://127.0.0.1:9000/people')
}


// axios.get('http://127.0.0.1:80/people').then(response => {
//       this.setState({peoples: response.data});
//       console.log(this.state.peoples)
//       this.setState({filtered: this.state.peoples})
//   }).catch(e => {
//       console.log(e.response);
//   });