import data from './data/harrypotter/harry.js';

/*import { example } from './data.js';
console.log(example, data);*/


const contenidoPersonajes = document.getElementById('contenidoPersonajes'); //capturando contenidoPersonajes

//Función para crear las tarjetas con los personajes e imprimirlas en html
function crearTarjetas(personajes) { 
  personajes.forEach(characters => { //por cada objeto del objeto "characters" se ejecuta la siguiente función para imprimir la tarjeta dentro del contenedor "contenidoPersonajes":
    contenidoPersonajes.innerHTML += `
  <div class="tarjetas" id= ${characters.id}>
          <h2 class="nombre">${characters.name}</h2>
          <li class="casa"> Casa: ${characters.house}</li>
          <li class="ascendencia">Ascendencia: ${characters.ancestry}</li>
          <li class="genero">Género: ${characters.gender}</li>
          <li class="fecha-nacimiento">Nacimiento: ${characters.birth}</li>
          <li class="libros">Libros en los que aparece: ${characters.books_featured_in}</li>
         </div>
  `});
}
crearTarjetas(data.characters);//llamar a la función



// MANIPULACIÓN PÁGINA INDEX/CONTENIDO

const homeBtn = document.getElementById('homeBtn'); //capturando homeBtn
const contenidoHome = document.getElementById('contenidoHome'); //capturando contenidoHome

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
})


// IR A PAGINA DE INICIO

const salidaBtn = document.getElementById('salidaBtn'); //capturando salidaBtn
salidaBtn.addEventListener('click', function () {
  window.location.href = "index.html";
})


//Guardar valor - nombre del invitado
//localStorage.setItem("nombreM");
//localStorage.removeItem("nombreM")

//Obtener valor almacenado local Storage --Ingrid
let nombreObtenido = localStorage.getItem("nombreM");
//console.log(nombreObtenido)

//to uppercase al indice 0

//Mostrar valor almacenado  --Ingrid
let nombreBienv = document.getElementById("mensaje-bienvenida");
nombreBienv.innerHTML = "Bienvenida " + nombreObtenido;


