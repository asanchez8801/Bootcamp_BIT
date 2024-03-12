"user strict"

/*const nombreusuario = prompt("ingrese su nombre");
switch (nombreusuario){
  case"":
    console.log("hola");
  break;
  default:
    console.log("hola " + nombreusuario);
    break;
}*/

//hacer un programa que pida aparte nombre y apellido y muestre el nombre completo  
/* const nombre = prompt("Por favor ingrese su nombre");
const apellido = prompt("Ingrese su apellido");
console.log(nombre+" "+apellido);
document.write(nombre+" "+apellido);
document.write(`Su nombre completo es ${nombre}  ${apellido}`); */

//hacer un programa que pida dos numero al usuario y los sume
/* const numero1 = Number(prompt("ingrese el primer numero"));
const numero2 = parseInt(prompt("ingrese el segundo numero"));
console.log(numero1 + numero2);
document.write(`la suma de ${numero1} y ${numero2} es: ${numero1+numero2}`); */

//hacer un programa que reciba del usuario un numero y muestre si es cero o si es positivo o si es negativo 

/* const numero1 = prompt ("Ingrese un numero, este puede se negativo");
console.log(numero1);

if (numero1 == 0){
    document.write("su numero es cero");
} else if (numero1 > 0) {
    document.write("su numero es positivo");
} else {
    document.write("su numero es negativo");
}  */ 

//hacer un programa que reciba del usuario 2 numeros y muestre cual es el número mayor y cual es el numero menor.

let numero1 = prompt ("ingrese su primer numero");
let numero2 = prompt ("ingrese su segundo numero");

numero1 =parseInt(numero1);
numero2 =parseInt(numero2);

if (numero1 > numero2) {
  document.write("el numero mayor es ", numero1);
  document.write("el numero menor es ", numero2);

} else if (numero2 > numero1){
  document.write("el numero mayor es ", numero2);
  document.write("el numero menor es ", numero1);
}





