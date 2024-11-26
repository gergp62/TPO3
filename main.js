//Ejercicio 1
const baseInput = document.getElementById('base');
const alturaInput = document.getElementById('altura');
const calcBtn = document.getElementById('calc');
const solucionP = document.querySelector('.solucion');

const base1 = 0;
const altura1 = 10;

const base2 = 5;
const altura2 = -10;

const base3 = 3;
const altura3 = 5;

console.log('El rectángulo del primer ejemplo con base 0 y altura 10, tiene un área de: ', calcularArea(base1, altura1));
console.log('El rectángulo del segundo ejemplo con base 5 y altura -10, tiene un área de: ', calcularArea(base2, altura2));
console.log('El rectángulo del tercer ejemplo con base 3 y altura 5, tiene un área de: ', calcularArea(base3, altura3));

function calcularArea(base, altura) {
    return base * altura;
}


calcBtn.addEventListener('click', () => {
    
    const base = Number(baseInput.value);
    const altura = Number(alturaInput.value);
    let mensaje = '';

    if (base <= 0 || altura <= 0) {
        mensaje = "Por favor, ingresa valores positivos para la base y la altura.";
        
    } else {
        const area = calcularArea(base, altura);
        mensaje = `El área del rectángulo de base: ${base} y altura: ${altura} es: ${area}`;
      }
      console.log(mensaje);
      solucionP.textContent = mensaje;
    
});
/* 
La forma de rersolverlo fue la misma para los 5 ejercicios: tener inputs para los valores que el usuario quisiera probar, capturas esos valores y en el evento click
poder llamar a la función que resuelva según el caso para devolver el resultado no solo en consola como está pedido( con sus 3 ejemplos), sino también en pantalla para
hacerlo más entretenido de usar.
En este ejercicio el desafío fue que hacer cuando los valores de la base y altura fuesen 0 o números negativos y lo resolví de forma sencilla con
un If/else para indicar al usuario que tipos de valores se pueden utilizar.

*/


//Ejercicio 2


const cadenaInput = document.getElementById('cadena');
const calcularBtn = document.getElementById('palabras');
const solucionCad = document.querySelector('.solucionCad');
const ejemplo1 = 'Esta es una cadena de ejemplo';
const ejemplo2 = '';
const ejemplo3 = 'CadenaUnitaria';
console.log('La primera cadena de ejemplo tiene: ',contarPalabras(ejemplo1), 'palabras');
console.log('La segunda cadena de ejemplo tiene: ',contarPalabras(ejemplo2), 'palabras');
console.log('La tercera cadena de ejemplo tiene: ',contarPalabras(ejemplo3), 'palabra');

function contarPalabras(cadena) {
  
  const palabras = cadena.split(' ').filter(palabra => palabra !== '');
  return palabras.length;
}


calcularBtn.addEventListener('click', () => {
  
  const texto = cadenaInput.value;
  const numPalabras = contarPalabras(texto);
  solucionCad.textContent = `La cadena tiene ${numPalabras} palabras.`;
  
});
/* 
En este ejercicio utilicé los métodos : split y filter para poder separar las palabras cuando encuentra un espacio vacío y poder contarlas
*/


  //Ejercicio 3
  
  const cadInvertInput = document.getElementById('cadInvert');
  const calcuInvBtn = document.getElementById('palInvert');
  const soluInvert = document.querySelector('.soluInvert');

  const cadena1 = 'hola';
  const cadena2 = 'aditrevid ovutse acitárp atse';
  const cadena3= 'A la grande le puse CUCA';

  console.log(`La primera cadena a invertir....${cadena1}....quedaría: `, invertirCadena(cadena1));
  console.log(`La segunda cadena a invertir....${cadena2}....quedaría: `, invertirCadena(cadena2));
  console.log(`La tercera cadena a invertir....${cadena3}....quedaría: `, invertirCadena(cadena3));
  
  
  function invertirCadena(cadena) {
    return cadena.split('').reverse().join('');
  }
  
  calcuInvBtn.addEventListener('click', () => {
    const texto = cadInvertInput.value;
    const cadenaInvertida = invertirCadena(texto);
    soluInvert.textContent = `La cadena invertida es: ${cadenaInvertida}`;
  });
/* 
En este ejercicio utilicé los métodos split para poder separar la cadena, reverse para invertir ese array de caracteres separados y por último join 
para volver a unir esos caracteres separados en una palabra con todos los caracteres invertidos.
*/

  //Ejercicio 4

  const cadPalindromo = document.getElementById('cadPalin');
  const palindBtn = document.getElementById('palind');
  const soluPalindromo = document.querySelector('.soluPalin')

  const palin1 ='Neuquén';
  const palin2 ='reconocer';
  const palin3 ='palindromo';

  console.log(`La primera frase o palabra a verificar....${palin1}....es o no un palíndromo: `, verificarPalindromo(palin1));
  console.log(`La segunda frase o palabra a verificar....${palin2}....es o no un palíndromo: `, verificarPalindromo(palin2));
  console.log(`La tercera frase o palabra a verificar....${palin3}....es o no un palíndromo: `, verificarPalindromo(palin3));

  
  function verificarPalindromo (cadena){
    const cadenaMinusculas = cadena.normalize('NFD').toLowerCase();
    const cadenaLimpia = cadenaMinusculas.replace(/[^a-z0-9]/gi, '');
    const cadenaInvertida = cadenaLimpia.split('').reverse().join('');
    return cadenaLimpia === cadenaInvertida;

  }

  palindBtn.addEventListener('click', ()=>{
    const palindromo = cadPalindromo.value;
    const espalindromo = verificarPalindromo(palindromo);
    soluPalindromo.textContent = `La palabra o frase de texto es o no palindromo: ${espalindromo}`;
  });

/* 
En este ejercicio el desafío mas importante fue cómo manejar los caracteres especiales, las letras mayúsculas y los acentos , para eso la idea fue utilizar
el método normalise y el toLowerCase para sacar acentos y pasar todos los caracteres a letras minúsculas, con la expresión regular poder eliminar si 
existieran caracteres no alfanuméricos como puntos, espacios,etc y por último como en el ejercicio anterior usé split, reverse y join para separar, invertir y juntar
los caracteres de la cadena para poder compararla y verificar la igualdad entre ambas cadenas.
*/
  
//Ejercicio 5

function calcularEdadCanina() {
  const edadHumana = prompt("Ingrese la edad de su perro en años humanos:");

  const edadHumanaNum = Number(edadHumana);

  if (!isNaN(edadHumanaNum)) {
    
    const edadCanina = edadHumanaNum * 7;
    console.log("Tu perro tiene " + edadCanina + " años humanos.");
    alert("Tu perro tiene " + edadCanina + " años humanos.");
  } else {
    console.log("Por favor, ingresa un número válido.");
    alert("Por favor, ingresa un número válido.");
  }
};

/*
En este ejercicio, a diferencia de los otros sólo se muestra un botón en el front para hacer el cálculo y llamar a la función, además de mostrar el resultado 
por consola me interesaba que se vea en el front a través de una ventana emergente y para eso utilicé el método alert y de esa forma lograr que quede más 
interactivo el programa.
*/
