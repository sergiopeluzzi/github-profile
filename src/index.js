const axios = require('axios');

axios.get('https://api.github.com/users/sergiopeluzzi')
  .then(response => response.data)
  .then(data => {
    console.log(data)
  })
