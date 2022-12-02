//import { example, anotherExample } from '../src/data.js';
import { ordenarAsc } from '../src/data.js';
//ordenarDesc, filtrarGryffindor, filtrarSlytherin, filtrarHufflepuff, filtrarRavenclaw

describe('Pruebas para funcion ordenarAsc', () => {
  test('La funcion ordenarAsc debe retornar un nuevo array con los nombres ordenados '), () => {
   const arreglo = ["Ana", "Claudia", "Melanie", "Ingrid", "Cecilia"];
   //const condicon = a-z
   ordenarAsc(arreglo);

   expect(ordenarAsc).toEqual(["Ana", "Cecilia", "Claudia", "Ingrid", "Melanie"])
  }
  });

  
  

   



/*
describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});*/
