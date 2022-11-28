
import data from './data/harrypotter/harry.js';

/*import { example } from './data.js';
console.log(example, data);*/

const contenidoPersonajes = document.getElementById('contenidoPersonajes'); //capturando contenidoPersonajes
const contenidoHome = document.getElementById('contenidoHome'); //capturando contenidoHome

const homeBtn = document.getElementById('homeBtn'); //capturando homeBtn
const personajesBtn = document.getElementById('personajesBtn'); //capturando personajesBtn


//Función para crear las tarjetas con los personajes e imprimirlas en html
function crearTarjetas(personajes) { 
  personajes.forEach(characters => { //por cada objeto del objeto "characters" se ejecuta la siguiente función para imprimir la tarjeta dentro del contenedor "contenidoPersonajes":
    contenidoPersonajes.innerHTML += `
  <div class="tarjetas" id= ${characters.id}>
    <div class= "texto-tarjetas">
      <h2 class="nombre">${characters.name}</h2>
      <li class="casa"> Casa: ${characters.house}</li>
      <li class="especie">Especie: ${characters.species}</li>
      <li class="ascendencia">Ascendencia: ${characters.ancestry}</li>
      <li class="genero">Género: ${characters.gender}</li>
      <li class="fecha-nacimiento">Nacimiento: ${characters.birth}</li>
      <li class="fecha-muerte">Muerte: ${characters.death}</li>
      <li class="libros">Libros en los que aparece: ${characters.books_featured_in}</li>
    </div>
  </div>
  `});
}
crearTarjetas(data.characters);//llamar a la función

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

/*
      // tarjetas
      let tarjetas = [];
      
      crearTarjetas (data.characters);
      function crearTarjetas (element) {
        console.log(element);

        const container = document.querySelector(".tarjeta");
        element.forEach(characters => {
        tarjetas += `
                  <article class="card" id= "card">
                    <div class="cardImage" id="card-1"> </div>
                    <h2> ${characters.name}</h2>
                    <p> ${characters.house}</p>
                  </article>
                  `
        });
       
        contenidoPersonajes.innerHTML= tarjetas;
        
      };
      
      //cierra pintar tarjetas
})*/

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
//console.log(nombreObtenido)

//Mostrar valor almacenado  
let nombreBienv= document.getElementById("mensaje-bienvenida");

nombreBienv.innerHTML = "Bienvenida " + nombreObtenido;
