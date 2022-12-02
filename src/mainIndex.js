//evitar que la pagina se recargue por completo
document.getElementById('Formulario').onsubmit = function (event) {
  event.preventDefault()
};



// IR A PAGINA DE BIENVENIDA
document.getElementById('empezar').onclick =
  function () {


    const nombre = document.getElementById('nombreInvitado').value;
    //console.log (nombre);
      if(!nombre) {
      alert( "No olvides ingresar tu nombre") ;
        } else {
          window.localStorage.setItem("nombreM", nombre)
          window.location.href="contenido.html" ; 
        } 
        return nombre
  };
