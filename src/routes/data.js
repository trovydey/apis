const axios = require('axios');
const qs = require('qs');
let data = qs.stringify({
   
});





async function action2(credito, response, password, user,auth,url) {

    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: url+`data?source=23&sourceid=${credito}`,
      headers: { 
        'x-api-key': `${response}`, 
        'password': `${password}`, 
        'user':`${user}`, 
        'action': '2', 
        'Authorization': `${auth}`
      },
      data : data
    };
    
   
    try{
      const response = await axios.request(config);
      
      return response.data;
    }  catch(error){
       console.error(error);
       throw error
    };
    
  
    
  }
  

  module.exports = {action2}
