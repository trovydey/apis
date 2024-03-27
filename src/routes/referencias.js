  //CIE

  function cie(credito) {
    
  
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
  

  function stp(credito) {
      

  
  
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

 module.exports = {cie, stp};
