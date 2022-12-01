//import { filterAsc, filterDesct } from './data.js'; //organizarPersonaje
import data from './data/harrypotter/harry.js';
import { ordenarAsc, ordenarDesc } from './data.js';

//console.log(example, data);

const contenidoHome = document.getElementById('contenidoHome'); //capturando contenidoHome
const contenidoPersonajes = document.getElementById('contenidoPersonajes'); //capturando contenidoPersonajes
const contenidoTarjetas = document.getElementById("tarjetas");
const homeBtn = document.getElementById('homeBtn'); //capturando homeBtn
const personajesBtn = document.getElementById('personajesBtn'); //capturando personajesBtn
const salidaBtn = document.getElementById('salidaBtn'); //capturando salidaBtn
const comboBox1 = document.getElementById('comboBox1'); //capturando contenido comboBox1
const menuCasas = document.getElementById('contenidoMenuCasas'); //capturando menu casas
const contenidoCasas = document.getElementById('contenidoCasas'); //capturando contenido casas
const casasBtn = document.getElementById('casasBtn'); //capturando casasBtn


window.addEventListener("load", function () {
  let nombreObtenido = localStorage.getItem("nombreM");//Obtener valor almacenado local Storage 
  //console.log(nombreObtenido)
  let nombreBienv = document.getElementById("mensaje-bienvenida");//Mostrar valor almacenado  
  nombreBienv.innerHTML = "Bienvenida " + nombreObtenido;
});

//Guardar valor - nombre del invitado
//localStorage.setItem("nombreM");
//localStorage.removeItem("nombreM")

let nombreObtenido = localStorage.getItem("nombreM");//Obtener valor almacenado local Storage 
//console.log(nombreObtenido)

let nombreBienv = document.getElementById("mensaje-bienvenida");//Mostrar valor almacenado  
nombreBienv.innerHTML = "Bienvenida " + nombreObtenido;


salidaBtn.addEventListener('click', function () {
  window.location.href = "index.html";
});
homeBtn.addEventListener('click', function () {
  contenidoHome.style.display = "flex";
  contenidoPersonajes.style.display = "none";

});
personajesBtn.addEventListener('click', function () {
  contenidoPersonajes.style.display = "block";
  contenidoHome.style.display = "none";
  contenidoTarjetas.innerHTML = crearTarjetas(ordenarAsc(charactersHP));
});


  contenidoCasas.style.display = "none";
  comboBox1.style.display = "none";
  menuCasas.style.display = "none";
})

//Evento click de personajesBtn despliega contendioPersonajes y oculta contenidoHome
personajesBtn.addEventListener('click', function () {
  contenidoPersonajes.style.display = "flex";
  comboBox1.style.display = "flex";
  contenidoHome.style.display = "none";
  contenidoCasas.style.display = "none";
  menuCasas.style.display = "none";
  contenidoPersonajes.innerHTML = crearTarjetas(data.characters);
})


//Evento click de casasBtn despliega contendioCasas y oculta contenidoHome
casasBtn.addEventListener('click', function () {
  contenidoCasas.style.display = "flex";
  menuCasas.style.display = "flex";
  contenidoHome.style.display = "none";
  contenidoPersonajes.style.display = "none";
  comboBox1.style.display = "none";
});


//export funcion que define personajes :( no funciona

let charactersHP = [];
charactersHP = data.characters;
//console.log(charactersHP);



// Plantilla tarjetas

// pintar tarjetas

function crearTarjetas(element) {
  //console.log(element);
  let tarjetas = []; //vamos a ir inyectando los valores de abajo
  element.forEach(characters => { //template literaios
    tarjetas += ` 
              <div class="tarjeta" id= ${characters.id}>
                <div class= "texto-tarjeta">
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
              `
  });
  return tarjetas
};


//console.log(personajesHP)

//ORDENAR PERSONAJES

//let charac =["a", "d", "b"] 
//let organizarPersonaje = charac.sort();
//console.log(organizarPersonaje) regresa abd 

//export funcion que ordena asc y desc

const ordenarAsc = (array) => {
  const ascendente = array.sort(function (a, b) {
    return a.name.localeCompare(b.name); //local compare compara str
  })
  return ascendente;
};
//console.log(ordenarAsc(charactersHP));

const ordenarDesc = (array) => {
  const descendente = array.sort(function (a, b) {
    return b.name.localeCompare(a.name);
  });
  return descendente;
}


//Seleccion para ordenar alfabeticamente
const select = document.querySelector("#orden") //capturando opcion ascendente
//escoger opcion a-z y z-a 
console.log(select);

//Evento change llama a la funcion segun indice de seleccion
document.getElementById("orden").addEventListener('change', function () {


const opcionCambiada = () => {
  console.log("cambio");
};
select.addEventListener("change", opcionCambiada);

document.getElementById("ir").addEventListener('click', function () {

  let indice = select.selectedIndex;
  //console.log(indice)
  if (indice == 1) {
    contenidoTarjetas.innerHTML = ""
    contenidoTarjetas.innerHTML = crearTarjetas(ordenarAsc(charactersHP));
    //console.log(crearTarjetas(ordenarAsc(charactersHP)))
  }
  else if (indice == 2) {
    contenidoTarjetas.innerHTML = ""
    contenidoTarjetas.innerHTML = crearTarjetas(ordenarDesc(charactersHP))
    //console.log(crearTarjetas(ordenarDesc(charactersHP)))
  }
});





//filtrar PERSONAJES por casas
/*const filtrarGryffindor = charactersHP.filter(
  function (charactersHP) {
  return (charactersHP.house == "Gryffindor");
});
console.log(filtrarGryffindor);  */

const filtrarGryffindor = charactersHP.filter(charactersHP => charactersHP.house == "Gryffindor");
//console.log(filtrarGryffindor);  

const filtrarSlytherin = charactersHP.filter(charactersHP => charactersHP.house == "Slytherin");
//console.log(filtrarSlytherin); 

const filtrarHufflepuff = charactersHP.filter(charactersHP => charactersHP.house == "Hufflepuff");
//console.log(filtrarHufflepuff); 

const filtrarRavenclaw = charactersHP.filter(charactersHP => charactersHP.house == "Ravenclaw");
//console.log(filtrarRavenclaw); 


document.getElementById("Gryffindor").addEventListener('click', function () {
  contenidoCasas.innerHTML = ""
  contenidoCasas.innerHTML = crearTarjetas(filtrarGryffindor)
});
document.getElementById("Slytherin").addEventListener('click', function () {
  contenidoCasas.innerHTML = ""
  contenidoCasas.innerHTML = crearTarjetas(filtrarSlytherin)
});
document.getElementById("Hufflepuff").addEventListener('click', function () {
  contenidoCasas.innerHTML = ""
  contenidoCasas.innerHTML = crearTarjetas(filtrarHufflepuff)
});
document.getElementById("Ravenclaw").addEventListener('click', function () {
  contenidoCasas.innerHTML = ""
  contenidoCasas.innerHTML = crearTarjetas(filtrarRavenclaw)
});

    

