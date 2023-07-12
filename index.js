function esPar(num) {
  if(num % 2 === 0) {
    return "Es par"; 
  }
  else {
    return "Es impar"; 
  }
  }
  
  
  console.log(esPar(2)); 
  console.log(esPar(17)); 



  function comparacion(num, num2){

    if(num > num2){
      return "El numero mayor es " + num;
    }
    else if (num < num2)
      return "El numero mayor es " + num2;

    else  (num - num2 ===0)
      return "Los numeros son identicos";
  }

console.log(comparacion(10, 10))


function multiplo(num){
  if(num  %5 === 0){
    return num + " es multiplo de 5"
  } else{
    return num + " no es multiplo de 5"
  }
 
}

console.log(multiplo(15))


function imprimirNumeros(){
  for (let i=0; i <= 5; i++){
    console.log(i)
  }
}

imprimirNumeros()


function repeat (string, n){
  let repeatedString = "";
  
  while (n > 0){
    repeatedString += string

    n--;
  }

  return repeatedString
}

let response = repeat (" hola ", 10)

console.log(response)


  arreglo = [ 10, 20, 30, 40, 50, 60, 70, 80, 90 ];

  for(i=0; i<arreglo.length; i++){
    console.log(arreglo[i])
  }



  numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  const funcion = (numeros) => {
    
    for (let i = 0; i < numeros.length; i++){
      if(i !== 5){
        console.log(numeros[i])
      }
    }
  }

  console.log(funcion(numeros))
  