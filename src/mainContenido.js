
//import { filterAsc, filterDesct } from './data.js'; //organizarPersonaje
import data from './data/harrypotter/harry.js';

/*import { example } from './data.js';
console.log(example, data);*/
/*document.getElementById('ordenAsdDesc').onsubmit = function (event) {
  event.preventDefault()
};*/

const homeBtn = document.getElementById('homeBtn'); //capturando homeBtn
const contenidoHome = document.getElementById('contenidoHome'); //capturando contenidoHome

const personajesBtn = document.getElementById('personajesBtn'); //capturando personajesBtn

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

// MANIPULACIÓN PÁGINA INDEX/CONTENIDO

const contenidoPersonajes = document.getElementById('contenidoPersonajes')//capturando contenidoPersonajes

//Evento click de homeBtn despliega contendioHome y oculta contenidoPersonajes
homeBtn.addEventListener('click', function () {
  contenidoHome.style.display = "flex";
  contenidoPersonajes.style.display = "none";
})

//Evento click de personajesBtn despliega contendioPersonajes y oculta contenidoHome
personajesBtn.addEventListener('click', function () {
  contenidoPersonajes.style.display = "flex";
  contenidoHome.style.display = "none";

      /*/ tarjetas
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
      
      //cierra pintar tarjetas*/
});

//Función para crear las tarjetas con los personajes e imprimirlas en html
function crearTarjetas(personajes) { 
  personajes.forEach(characters => { //por cada objeto del objeto "characters" se ejecuta la siguiente función para imprimir la tarjeta dentro del contenedor "contenidoPersonajes":
    contenidoPersonajes.innerHTML += `
  <div class="tarjetas" id= ${characters.id}>
          <h2 class="nombre">${characters.name}</h2>
          <li class="casa"> Casa: ${characters.house}</li>
          <li class="especie">Especie: ${characters.species}</li>
          <li class="ascendencia">Ascendencia: ${characters.ancestry}</li>
          <li class="genero">Género: ${characters.gender}</li>
          <li class="fecha-nacimiento">Nacimiento: ${characters.birth}</li>
          <li class="libros">Libros en los que aparece: ${characters.books_featured_in}</li>
         </div>
  `});
}

crearTarjetas(data.characters);//llamar a la función

//ORDENAR PERSONAJES

//let charac =["a", "d", "b"] 
//let organizarPersonaje = charac.sort();
//console.log(organizarPersonaje) regresa abd 
  
//export funcion que define personajes
const characters = (data) => {
    return(data.characters);
  };
console.log(characters);

//export funcion que ordena
const filterDesc = (characters) => {
  let descendente = characters.sort(function(a, b) {
    //return (a-b)
    return (b.name - a.name)
    //return parseFloat(b.name) - parseFloat(a.name);
    //return a.nombre.localeCompare(b.nombre); 
    //return((a.name < b.name)? -1: ((a.name > b.name)? 1: 0));
    })
    return descendente;
  };

/*// escoger opcion z-a y hacer clic en el boton
document.getElementById("enviarOrdenar").onclick = 
function (){
  //if(document.getElementById(("desc").selected)) { 
    if(document.querySelector('option[value="descendente"]:selected')){ 
    return filterDesc(characters.name);
  }
};
console.log(filterDesc(characters.name));*/







  /*orderAsc.addEventListener("click", () => {
    list.innerHTML = '';
    listElements(filterAsc(characters.name));
});*/

orderDesc.addEventListener("click", () => {
  contenidoPersonajes.innerHTML = '';
  listElements(filterDesc(characters.name));
});

