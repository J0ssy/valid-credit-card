function isValidCard() { 
  do {
    var cardNumber = prompt('Ingresa el número de tu tarjeta');
    var reverseNum = cardNumber.split('').reverse().join('');
    var result = [];
    var oddNum = [];
    var total = [];

  if(/^[0-9]$/.test(cardNumber)) { // excluyendo todo lo que no sea un número
    for (var i = 0; i < reverseNum.length; i++) {
      if(i % 2 === 1) { //
        var multipliedNum = reverseNum[i] * 2; //multiplicamos por 2
        
        if (multipliedNum > 9) {
          var sumSplitNum = 1 + (multipliedNum % 10); 
          result.push(sumSplitNum);
        } else {
          result.push(reverseNum[i]*2);
        }
      } else {
        oddNum.push(parseInt(reverseNum[i]));
      }
    }

    var allNumbers = result.concat(oddNum);
    var sum = 0;

    for (var j = 0; j < allNumbers.length; j++) {
      sum = sum + allNumbers[j];
    }
    total = (sum % 10);

  } else {
    alert('Favor ingresar solamente números del 0 - 9'); // mensaje de Error si ingresa un caracter que no sea un número
  } while (!/^[0-9]$/.test(cardNumber))
} 

function isValidCard()
//result;
//oddNum;


// Example: 4083952015263 / 3625102593804

