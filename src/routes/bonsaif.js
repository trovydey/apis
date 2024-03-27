const axios = require('axios');
const URIB  = 'https://api6.bonsaif.com'




async function sms(telefono,message, tipo, key) {

  let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: URIB+`/sms?phone=${telefono}&message=${message}&out=json&key=4a5050363bv6u8uevdu3uev1u4716c&${tipo}`,
  headers: { 
    'Authorization': `${key}`,
    'Cookie': 'JSESSIONID=38616A960F9930CE2E7772D77E6C97D7'
  }
};

   
try{
    const response = await axios.request(config);
    // console.error(response);
    return response;
  }  catch(error){
     console.error(error);
     throw error
  };

}

async function watsapp(telefono,message, telacesor, key) {

  let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: URIB+`/sms?phone=${telefono}&message=${message}&out=json&key=4a5050363bv6u8uevdu3uev1u4716c&tipo_sms=16&n_transfer=${telacesor}`,
  headers: { 
    'Authorization': `${key}`
  }
};

   
try{
    const response = await axios.request(config);
    // console.error(response);
    return response;
  }  catch(error){
     console.error(error);
     throw error
  };

}


async function mail(correo,nom, mont, clabe, key) {
  
  let data = JSON.stringify({
    "key": `${key}`,
    "subject": "Prueba mail",
    "to": `${correo}`,
    "id_plantilla": "4338",
    "acount": "444",
    "vars": `[nombre]:${nom}|[monto]:${mont}|[clabe]:${clabe}`
  });

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: URIB+'/sendmail',
    headers: { 
      'Content-Type': 'application/json', 
      'Authorization': 'Basic NDQ0OkNGRGUueXVNa1NNVkMxM2ZH', 
      'Cookie': 'JSESSIONID=38616A960F9930CE2E7772D77E6C97D7'
    },
    data : data
  };
   
try{
    const response = await axios.request(config);
    // console.error(response);
    return response;
  }  catch(error){
     console.error(error);
     throw error
  };

}






module.exports= {sms, watsapp, mail}
