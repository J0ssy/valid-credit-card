##### Sprint n°1 - Productos Finales 
### Tarjeta de Crédito Válida  
*Enunciado Ejercicio n°2*

Crea una web que pida, por medio de un prompt(), el número de una tarjeta de crédito y   
confirme su validez según el algoritmo de Luhn. Lee este blog que explica cómo   
funciona el algoritmo de Luhn.  

Consideraciones Específicas  
1. Tu código debe estar compuesto por 1 función: isValidCard  
2. El usuario no debe poder ingresar un campo vacío  

------------------------- 

**Diagrama de FLujo
![Diagrama de Flujo]()    

------------------------- 

**Función isValidCard** 
**Por medio de un prompt le preguntamos al usuario los números de su tarjeta**    
Si responde números del 0 al 9, pasa a la siguiente condición   
El número ingresa a un ciclo   
- se sacan los números en posición par  
 se multiplican por 2  
 luego el residuo de los número mayores a 10 +1  
En else tomamos el resto de los números  
- los agrupo en una variable    
Se repite la pregunta inicial, hasta que el usuario ingrese una opción válida  
