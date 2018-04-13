const axios = require ("axios");

axios.get("https://api.github.com/users/techtuxbr").then(function(response){console.log(response.name); // ex.: { user: 'Your User'}
  }); 