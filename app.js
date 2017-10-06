/*  
*   Tarjeta válida
*   3625102593804
*/

var cardNumber; // Decreto la variable global

do {
  var cardNumber = prompt("Ingresa el número de tu tarjeta"); // Levanto el prompt y almaceno el dato ingresado
  if (/^[0-9]*$/.test(cardNumber)) { // Verifico si solo son números
    isValidCard(cardNumber); // Le paso el valor a la función
  } else {
    alert('Favor de ingresar solamente números del 0 - 9'); // Si lo ingresado no corresponde a números
  }
} while(!/^[0-9]*$/.test(cardNumber)); // Repite el prompt hasta que lo ingresado sea valido
        
function isValidCard(value) { // Función que recibe un valor (cardNumber)
  var reverseNum = value.split('').reverse().join(''); // Se corta, se invierte y se junta
  var result = [];
  var oddNum = [];

  for (var i = 0; i < reverseNum.length; i++) {
    if (i % 2 === 1) { // Sí es posición impar, equivale a longitud par
      var multipliedNum = reverseNum[i] * 2; // Multiplico el número por 2
      
      if (multipliedNum > 9) { // Valido si el número multiplicado es mayor a 9
        var sumSplitNum = 1 + (multipliedNum % 10); // Si es así, se suman los digitos entre sí
        result.push(sumSplitNum); // Los almaceno en el array
      } else {
        result.push(multipliedNum); // Si es menor o igual a 9 solo almaceno
      }
      
    } else {
      oddNum.push(parseInt(reverseNum[i])); // Almaceno los números ignorados
    }
  }
  
  var allNumbers = result.concat(oddNum); // Concateno ambos arrays
  var sum = 0;

  for (var j = 0; j < allNumbers.length; j++) {
    sum = sum + allNumbers[j]; // Sumo cada valor del array
  }
  
  var total = (sum % 10); // Al total se le calcula el residuo de 10
  
  if (total == 0) {
    alert('El número de tarjeta ingresado es válido');
  } else  {
    alert('El número de tarjeta ingresado es inválido');
  }
  
}


// Example: 4083952015263 / 3625102593804

