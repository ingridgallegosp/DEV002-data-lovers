//import { example, anotherExample } from '../src/data.js';
//import { TestWatcher } from 'jest';
import { ordenarAsc, ordenarDesc, filtrarGryffindor, filtrarSlytherin, filtrarHufflepuff, filtrarRavenclaw, porcentajePersonajesGryffindor, porcentajePersonajesHufflepuff, porcentajePersonajesRavenclaw, porcentajePersonajesSlytherin } from '../src/data.js';
//ordenarDesc,  filtrarSlytherin, filtrarHufflepuff, filtrarRavenclaw

//TEST ORDEN ASC sort()
describe('Pruebas para funcion ordenarAsc', () => {
  it('La funcion ordenarAsc debe retornar un nuevo array con los nombres ordenados ascendentemente', () => {
    const array = [{'name':'Harry'},{'name': "Angus"},{'name': "Ron"}];
    const result = ordenarAsc(array)
    
    expect(result).toEqual([{'name':'Angus'}, {'name':'Harry'}, {'name':"Ron"}])
  })
});

//TEST ORDEN DESC sort()
describe('Pruebas para funcion ordenarDesc', () => {
  it('La funcion ordenarDesc debe retornar un nuevo array con los nombres ordenados descendentemente', () => {
    const array = [{'name':'Harry'},{'name': "Angus"},{'name': "Ron"}];
    const result = ordenarDesc(array)
    
    expect(result).toEqual([{'name':"Ron"}, {'name':'Harry'}, {'name':'Angus'},])
  })
});

//TEST FILTRAR Gryffindor filter()
describe('Pruebas para funcion filtrarGryffindor', () => {
  it('La funcion filtrarGryffindor debe retornar un nuevo array con los personajes que pertenecen a Gryffindor ', () => {
    const array = [{'name':'Harry', 'house':'Gryffindor'},{'name': "Angus", 'house':'' },{'name': "Malcolm", 'house':'Slytherin'}];
    const result = filtrarGryffindor(array)
    
    expect(result).toEqual([{'name':'Harry', 'house':'Gryffindor'}])
  })
});

//TEST FILTRAR Slytherin filter()
describe('Pruebas para funcion filtrarSlytherin', () => {
  it('La funcion filtrarSlytherin debe retornar un nuevo array con los personajes que pertenecen a Slytherin ', () => {
    const array = [{'name':'Harry', 'house':'Gryffindor'},{'name': "Angus", 'house':'' },{'name': "Malcolm", 'house':'Slytherin'}];
    const result = filtrarSlytherin(array)
    
    expect(result).toEqual([{'name': "Malcolm", 'house':'Slytherin'}])
  })
});

//TEST FILTRAR Hufflepuff filter()
describe('Pruebas para funcion filtrarHufflepuff', () => {
  it('La funcion filtrarHufflepuff debe retornar un nuevo array con los personajes que pertenecen a Hufflepuff ', () => {
    const array = [{'name':'Cadwallader', 'house':'Hufflepuff'},{'name': "Angus", 'house':'' },{'name': "Malcolm", 'house':'Slytherin'}];
    const result = filtrarHufflepuff(array)
    
    expect(result).toEqual([{'name':'Cadwallader', 'house':'Hufflepuff'}])
  })
});

//TEST FILTRAR Ravenclaw filter()
describe('Pruebas para funcion filtrarRavenclaw', () => {
  it('La funcion filtrarRavenclaw debe retornar un nuevo array con los personajes que pertenecen a Ravenclaw ', () => {
    const array = [{'name':'Cadwallader', 'house':'Hufflepuff'},{'name': "Eddie", 'house':'Ravenclaw' },{'name': "Angus", 'house':''}];
    const result = filtrarRavenclaw(array)
    
    expect(result).toEqual([{'name': "Eddie", 'house':'Ravenclaw'}])
  })
});


//Test PORCENTAJE DE PERSONAJES POR CASA porcentajePersonajesGryffindor()
describe("Pruebas para función porcentajePersonajesGryffindor", () => {
  it("La función porcentajePersonajes debe retornar el porcentaje de los personajes pertenecientes a la casa Gryffindor", ()=>{
    const array = [{'name':'Harry', 'house':'Gryffindor'},{'name': "Ron", 'house':'Gryffindor' },{'name': "Angus", 'house':''},{'name': "Malcolm", 'house':'Slytherin'}]
    const result = porcentajePersonajesGryffindor(array);

    expect(result).toEqual("Un 50% de los personajes pertenecen a esta casa")
  })
});

describe("Pruebas para función porcentajePersonajesSlytherin", () => {
  it("La función porcentajePersonajes debe retornar el porcentaje de los personajes pertenecientes a la casa Slytherin", ()=>{
    const array = [{'name':'Harry', 'house':'Gryffindor'},{'name': "Ron", 'house':'Gryffindor' },{'name': "Angus", 'house':''},{'name': "Malcolm", 'house':'Slytherin'}]
    const result = porcentajePersonajesSlytherin(array);

    expect(result).toEqual("Un 25% de los personajes pertenecen a esta casa")
  })
});

describe("Pruebas para función porcentajePersonajesHufflepuff", () => {
  it("La función porcentajePersonajes debe retornar el porcentaje de los personajes pertenecientes a la casa Hufflepuff", ()=>{
    const array = [{'name':'Amelia', 'house':'Hufflepuff'},{'name': "Edgar", 'house':'Hufflepuff' },{'name': "Owen", 'house':'Hufflepuff'},{'name': "Malcolm", 'house':'Slytherin'}]
    const result = porcentajePersonajesHufflepuff(array);

    expect(result).toEqual("Un 75% de los personajes pertenecen a esta casa")
  })
});

describe("Pruebas para función porcentajePersonajesRavenclaw", () => {
  it("La función porcentajePersonajes debe retornar el porcentaje de los personajes pertenecientes a la casa Ravenclaw", ()=>{
    const array = [{'name':'Stewart', 'house':'Ravenclaw'},{'name': "Marcus", 'house':'Ravenclaw' },{'name': "Angus", 'house':''},{'name': "Malcolm", 'house':'Slytherin'}]
    const result = porcentajePersonajesRavenclaw(array);

    expect(result).toEqual("Un 50% de los personajes pertenecen a esta casa")
  })
});