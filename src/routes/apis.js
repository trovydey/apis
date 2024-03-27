const axios = require('axios');
const qs = require('qs');
let data = qs.stringify({
   
});

const user_token=process.env.USER_KEY;
const password_key=process.env.PASSWORD_KEY;
const auth_key=process.env.AUTH_KEY
const URI = process.env.URI

async function zell(){
  

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: URI+'apiKey',
  headers: { 
    'user': `${user_token}`, 
    'password': `${password_key}`, 
    'Authorization': `${auth_key}`
  }
};
try {
  const response = await axios.request(config);
  
  return response.data;
  
} catch (error) {
  console.error(error);
  throw error;
}
};



module.exports ={zell} 