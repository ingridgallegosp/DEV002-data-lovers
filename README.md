# El Mapa del Merodeador

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Definición de Producto](#2-definición-de-producto)
* [3. Historias de usuario](#3-historias-de-usuario)
* [4. Diseño de la Interfaz de Usuario](#4-diseño-de-la-interfaz-de-usuario)


***

## 1. Preámbulo

Harry Potter es una serie de novelas fantásticas escrita por la autora británica J. K. Rowling, en la que se describen las aventuras del joven aprendiz de magia y hechicería Harry Potter y sus amigos Hermione Granger y Ron Weasley, durante los años que pasan en el Colegio Hogwarts de Magia y Hechicería. 

El Mapa del Merodeador es un curioso artículo mágico que, durante la saga, muestra las aulas, pasillos, y la mayoria de espacios y rincones del castillo del Colegio Hogwarts(excepto la Sala de los Menesteres y la cámara Secreta). Además es capaz de identificar con precisión a cada persona, y no se deja engañar por animagos, pociones multijugos, o capas de invisibilidad. Incluso los fantasmas de Hogwarts no están exentos de esto. También puede revelar pasajes secretos usados por "Los Merodeadores".

## 2. Definición de Producto

El Mapa del Merodeador es una interfaz que permite a visitantes y fans de la saga conocer información a detalle de los personajes de los libros de Harry Potter y convertirse en "merodeadores".
 
Para la construcción de la página  realizamos una lluvia de ideas y boceto inicial que nos permitio organizar y delimitar la información a mostrarse y construir las diferentes Historias de Usuario. 

Seguimos la metodología del TROZO DE PASTEL ARCOIRIS, que nos permitio desde la primera HU crear productos aptos para ser visitados y visualizar su contenido. 

* HU, Criterios de Aceptación y Definición de Terminado.
* Planificación de Tareas en Trello.
* Prototipo de Baja Fidelidad.
* Maquetado Básico HTML y CSS.
* Funcionalidad con Javascript.
* Prototipo de Alta Fidelidad.
* HTML y CSS según prototipos.
* Funcionalidad con Javascript.
* Test Unitarios.
* Testeos de Usabilidad.
* Publicación de página en Git Hub pages.


## 3. Historias de usuario - HU

Las historias de Usuario se desarrollaron en base a una pequeña investigación con fans de la saga

![HU](./src/imagenes/HU.jpg)

![HU2](./src/imagenes/HU2.jpg)


Se muestran los personajes de la Saga de Harry Potter

Las Tarjetas continen información relevante sobre los personajes como su nombre, fecha de nacimiento y muerte, su especie y los libros en los cuales aparece.

Se puede ordena los personajes según su nombre, en orden Ascendente y Descendente.

Permite filtrar los personajes según la Casa de Colegio a la que pertenecen: Gryffindor, Slytherin, Hufflepuff, Ravenclaw.

Se puede conocer el porcentaje de personajes que pertenecen a las casas del colegio Hogwarts.

## 4. Diseño de la Interfaz de Usuario

#### Prototipo de baja fidelidad

![Prototipo Baja Fidelidad](./src/imagenes/historia0.png)

![Prototipo Baja Fidelidad](./src/imagenes/prototipo1.jpg)

[Prototipo Baja Fidelidad](https://www.figma.com/file/jpt5p67fjWUPTB9l9twJeF/Untitled?node-id=0%3A1&t=qHBDVehVx1wSBOnf-3)

#### Prototipo de alta fidelidad

Prototipo en version Movil y Desktop

![Prototipo Alta Fidelidad](./src/imagenes/prototipo2.jpg)

![Prototipo Alta Fidelidad](./src/imagenes/prototipo3.jpg)

[Prototipo Alta Fidelidad](https://www.figma.com/file/jpt5p67fjWUPTB9l9twJeF/Untitled?node-id=80%3A6&t=qHBDVehVx1wSBOnf-0)

Prototipo de Tarjetas en version Movil y Desktop

![Prototipo Tarjetas](./src/imagenes/prototipo4.jpg)

![Prototipo Tarjetas](./src/imagenes/prototipo5.jpg)

[Prototipo Tarjetas](https://www.figma.com/file/jpt5p67fjWUPTB9l9twJeF/Untitled?node-id=189%3A10&t=qHBDVehVx1wSBOnf-3)

#### Testeos de usabilidad

*
*
*

### Implementación de la Interfaz de Usuario (HTML/CSS/JS)

La interfaz tiene un diseño responsive que muestra inicialmente una página de Bienvenida. Al ingresar su nombre, el visitante podrá entrar al "Mundo Mágico"

La página principal muestra un saludo al visitante, ahora "merodeador" y, mediante los menus, puede visitar las secciones de Personajes y Casas.

![Pagina Bienvenida](./src/imagenes/pagina%201.jpg)

![Pagina Home](./src/imagenes/pagina%202.jpg)

![Pagina Casa Gryffindor](./src/imagenes/pagina%203.jpg)

### Pruebas unitarias

Pruebas Unitarias en el archivo  data.spec.js

![pruebas unitarias](./src/imagenes/testPruebasUnitarias.jpg)


![pruebas unitarias](./src/imagenes/pruebasUnitarias.jpg)
