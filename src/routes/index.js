const express = require('express');
const router = express.Router();
const axios = require('axios');
const qs = require('qs');
let data = qs.stringify({
   
});


const URI = process.env.URI

const sms_key =process.env.KEY_SMS;
const mail_key = process.env.KEY_MAIL;

const password = process.env.PASSWORD;
const user = process.env.USER;
const auth = process.env.AUTH;
const user_token=process.env.USER_KEY;
const password_key=process.env.PASSWORD_KEY;
const auth_key=process.env.AUTH_KEY

const pool = require('./../database');
const { isLoggedIn } = require('../lib/auth');

// const express = require('express');
const bodyParser = require('body-parser');
const URIB  = 'https://api6.bonsaif.com'


//CIE


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

// const data = require('./data');
// const referencias = require('./referencias');
// const sms = require('./bonsaif');





router.get('/', async (req, res) => {

  
     res.render('index');
 });

 router.get('/principal',isLoggedIn,async (req, res) =>{
    const colaborador = await pool.query('SELECT *  FROM colaborador WHERE user_id = ?', [req.user.id]);
    res.render('principal');
 });


 let response = '';


 async function cie() {
    
  
  const base = [1,2,1,2,1,2,1,2,1,2]
  const base1 =  "";
  let myFunc = num => Number(num);

  const cf = '36'
  const cf1 = 'CF'

  const number =`${credito}`.padStart(8,0)

  const myInt =parseInt(cf+number) 
  
  var intArr = Array.from(String(myInt), myFunc);
    
  array3 = []

  for (let i = 0; i < base.length; i++) {
   array3[i] = base[i]*intArr[i];
    
  }

  arraySumas = array3.map( x => x.toString().match(/.{1}/g).reduce((SumaParcial, a) => SumaParcial + parseFloat(a), 0))
  
  const initialValue = 0;
  const sumWithInitial = arraySumas.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);
  
// console.log(sumWithInitial)
const suma = parseInt(sumWithInitial)

const divten = suma % 10;
// console.log(divten)

  
const resul = 10 - divten
//  console.log(resul)
const conca = cf1+number+resul;

return conca;

//   console.log(conca)

}
// STP
async function stp() {
    



const base = [3,7,1,3,7,1,3,7,1,3,7,1,3,7,1,3,7]

let myFunc = num => Number(num);

const cf = '64618012911'
//const cf1 = 'CF'

const number = `${credito}`.padStart(6,0)

const myInt =cf+number 

const parsenum = parseInt(myInt)

var intArr = Array.from(String(myInt), myFunc);
 
array3 = []

for (let i = 0; i < base.length; i++) {
 array3[i] = base[i]*intArr[i];
 
}

arraym = [];

for (let m = 0; m < array3.length; m++) {
  arraym[m] = array3[m] % 10
  
}

arraySumas = arraym.map( x => x.toString().match(/.{1}/g).reduce((SumaParcial, a) => SumaParcial + parseFloat(a), 0))

const initialValue = 0;
const sumWithInitial = arraySumas.reduce(
(accumulator, currentValue) => accumulator + currentValue,
initialValue,
);

// console.log(sumWithInitial)
const div1 =parseInt(Array.from(String(sumWithInitial), myFunc))


const modulo = div1 % 10;
// console.log(modulo)

const resul = 10- modulo;

// console.log(resul)
const stp = cf+number+resul
return stp



    
}


 router.post('/principal' , async (req, res) =>{
  const {credito } = req.body;
  const idcredito = credito;  

  // const cie= cie(idcredito)
  // const stp= stp(idcredito)

  try {
    response = await zell();

    // console.log(response.apikey);
} catch (error) {
    console.error('Hubo un error:', error);
    res.status(500).send('Hubo un error al procesar la solicitud.');
}
 
try{
 const response1 = await action2(idcredito, response.apikey, password, user, auth, URI)
 
 
  const id = response1.IdCliente;
  const Nc = response1.NombreCompleto;
  const Credito1 = response1.Credito;
  const Cuota = response1.Cuota;
  const Afiliado = response1.Afiliado;
  const Numerodesolicitud = response1.Numerodesolicitud;
  const Nombre = response1.Nombre;
  const SaldoTotaldelCredito = response1.SaldoTotalVencidodelCredito;
  const SaldoTotalVencidodelCredito = response1.SaldoTotalVencidodelCredito;
  const telefono = response1.telefono;
  const correo = response1.correo;
    res.render('principal', {id,Nc,Credito1, Cuota, Afiliado, Numerodesolicitud, Nombre, SaldoTotalVencidodelCredito,SaldoTotaldelCredito,telefono, correo});
      }catch(error){
        console.error('Hubo un error:', error)
        res.status(500).send('Hubo un error al procesar la solicitud.');
      }
  
})

router.post('/sms', async (req,res) =>{
 const {nombre,id,idcredito,nc,stp,cie,monto,telefono,correo,telacesor} = req.body

 const envio = 'sms'



 const nom = nombre;
 const id1 = id;
 const idc = idcredito
 const nombre1= nc;
 const st = stp;
 const ci = cie;
 const mont = monto;
 const tel = telefono;
 const corr = correo;
 const tel_asesor=telacesor

 const request = {nom,id1,idc,nombre1,st,ci,mont,tel,corr, user_id: req.user.username,envio,tel_asesor};
      
    await pool.query('INSERT IGNORE INTO request set ? ', [request]);  
 
 const tipo = 'flash=1';

const messageb = `Hola ${nom} tienes un pago vencido de $ ${mont} puedes realizar el pago directamente a tu cuenta CLABE ${stp} en caso de tener dudas comunicate al numero (55) 5259 9404  `;

 try {
  response = await sms(telefono, messageb, tipo, sms_key); 
  console.log(response.data.result[0]["message"])

  // res.render('index', {ms})
  
  

  } catch (error) {
  console.error('Hubo un error:', error);
  res.status(500).send('Hubo un error al procesar la solicitud.');
  }
  
  
});

router.post('/watsapp', async (req,res) =>{
  const {nombre,id,idcredito,nc,stp,cie,monto,telefono,correo, telacesor} = req.body
 const envio = 'watsapp'
 const nom = nombre;
 const id1 = id;
 const idc = idcredito
 const nombre1= nc;
 const st = stp;
 const ci = cie;
 const mont = monto;
 const tel = telefono;
 const corr = correo;
 const tel_asesor = telacesor 

 const request = {nom,id1,idc,nombre1,st,ci,mont,tel,corr, user_id: req.user.username,envio,tel_asesor};
      
    await pool.query('INSERT IGNORE INTO request set ? ', [request]);  
 

  
const messageb = `Hola ${nom} tienes un pago vencido de $ ${mont} puedes realizar el pago directamente a tu cuenta CLABE ${stp}`;

 try {
  response = await watsapp(telefono, messageb,tel_asesor, sms_key); 
  console.log(response.data.result[0]["message"])

  // res.render('index', {ms})
  
  

  } catch (error) {
  console.error('Hubo un error:', error);
  res.status(500).send('Hubo un error al procesar la solicitud.');
  }
  
  
});

router.post('/correo', async (req,res) =>{

 const {nombre,id,idcredito,nc,stp,cie,monto,telefono,correo, telacesor} = req.body
 const envio = 'correo'
 const nom = nombre;
 const id1 = id;
 const idc = idcredito
 const nombre1= nc;
 const st = stp;
 const ci = cie;
 const mont = monto;
 const tel = telefono;
 const corr = correo;
 const tel_asesor = telacesor 
 const request = {nom,id1,idc,nombre1,st,ci,mont,tel,corr, user_id: req.user.username,envio,tel_asesor};
      
await pool.query('INSERT IGNORE INTO request set ? ', [request]); 

try {
    response = await mail(corr,nom, mont,ci,mail_key); 
    console.log(response.data)
    
  
    
    
    
  
    } catch (error) {
    console.error('Hubo un error:', error);
    res.status(500).send('Hubo un error al procesar la solicitud.');
    }
    
    



});






module.exports = router;