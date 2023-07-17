// here descubrimos que
// al tiempo le puedes
// dar una variable

let time = 3000;
// luego de 2 seguntos =2000
// miliseconds,imprimirá el
// console.log
let tiempeIntervalo = 500,
  tiempoActual = 0;
let intervalo = setInterval(function () {
  tiempoActual += tiempeIntervalo;
  console.log(`
  tiempo transcurrido: ${tiempoActual / 1000} segundos
  `);
}, tiempeIntervalo);
setTimeout(function () {
  clearInterval(intervalo);
  console.log("tiempo terminado");
}, time);
