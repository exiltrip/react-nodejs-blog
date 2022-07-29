const axios = require('axios').default;

axios.get('http://localhost:8080/api/post?id=2').then(response =>{
    console.log(response)
});
