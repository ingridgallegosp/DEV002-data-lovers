//import { example } from './data.js';
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

//console.log(example, data);

//evitar que la pagina se recargue por completo
document.getElementById('Formulario').onsubmit = function(event){
  event.preventDefault()
};
  

// IR A PAGINA DE BIENVENIDA
document.getElementById('empezar').onclick = 
  function (){
      let nombre = document.getElementById('nombreInvitado').value;
    console.log (nombre)

      if(!nombre) {
      alert( "No olvides ingresar tu nombre") ;
        } else {
         window.location.href="index.html" ; 
        } 
};