//import { example } from './data.js';
//import data from './data/pokemon/pokemon.js';
//import { filtrarDirector, filtrarProductor, ordenPeliculas, calculo } from './data.js';


import data from './data/harrypotter/harry.js';

const homeBtn = document.getElementById('homeBtn'); //capturando homeBtn
const contenidoHome = document.getElementById('contenidoHome'); //capturando contenidoHome
const contenidoPersonajes = document.getElementById('contenidoPersonajes')//capturando contenidoPersonajes
const personajesBtn = document.getElementById('personajesBtn'); //capturando personajesBtn




//Evento click de homeBtn despliega contendioHome y oculta contenidoPersonajes
homeBtn.addEventListener('click', function () {
  contenidoHome.style.display = "flex";
  contenidoPersonajes.style.display = "none";
})

//Evento click de personajesBtn despliega contendioPersonajes y oculta contenidoHome
personajesBtn.addEventListener('click', function () {
  contenidoPersonajes.style.display = "flex";
  contenidoHome.style.display = "none";




//pintar tarjetas
crearTarjetas (data.characters);
function crearTarjetas (element) {
  console.log(element)
  
  const container = document.querySelector(".tarjeta");
  element.forEach(characters => {
    container.innerHTML += `
            <article class="card" id= "card">
              <h2> ${characters.name}</h2>
              <p> ${characters.house}</p>
            </article>
            `
  });
  
};
console.log(data.characters);

//cierra pintar tarjetas*/
})










// IR A PAGINA DE INICIO

const salidaBtn = document.getElementById('salidaBtn'); //capturando salidaBtn
salidaBtn.addEventListener('click', function () {
  window.location.href = "index.html"; 
})



//Guardar valor - nombre del invitado
//localStorage.setItem("nombreM");
//localStorage.removeItem("nombreM")

//Obtener valor almacenado local Storage 
let nombreObtenido = localStorage.getItem("nombreM");
console.log (nombreObtenido)

//Mostrar valor almacenado  
let nombreBienv= document.getElementById("mensaje-bienvenida");
nombreBienv.innerHTML = "Bienvenida " + nombreObtenido;


