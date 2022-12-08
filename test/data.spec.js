import { ordenarAsc, ordenarDesc, filtrarGryffindor, filtrarSlytherin, filtrarHufflepuff, filtrarRavenclaw, porcentajePersonajesGryffindor, porcentajePersonajesHufflepuff, porcentajePersonajesRavenclaw, porcentajePersonajesSlytherin } from '../src/data.js';

//DATA PARA TESTEAR

const array = [
  { 'name': 'Harry', 'house': 'Gryffindor' },
  { 'name': "Ron", 'house': 'Gryffindor' },
  { 'name': "Angus", 'house': '' },
  { 'name': "Malcolm", 'house': 'Slytherin' },
  { 'name': 'Cadwallader', 'house': 'Hufflepuff' },
  { 'name': "Eddie", 'house': 'Ravenclaw' },
  { 'name': 'Amelia', 'house': 'Hufflepuff' },
  { 'name': "Owen", 'house': 'Hufflepuff' },
  { 'name': "Marcus", 'house': 'Ravenclaw' }
];

//TEST ORDEN ASC sort()
describe('Pruebas para funcion ordenarAsc', () => {
  it('La funcion ordenarAsc debe retornar un nuevo array con los nombres ordenados ascendentemente', () => {

    const result = ordenarAsc(array)

    expect(result).toEqual([
      { 'name': 'Amelia', 'house': 'Hufflepuff' },
      { 'name': "Angus", 'house': '' },
      { 'name': 'Cadwallader', 'house': 'Hufflepuff' },
      { 'name': "Eddie", 'house': 'Ravenclaw' },
      { 'name': 'Harry', 'house': 'Gryffindor' },
      { 'name': "Malcolm", 'house': 'Slytherin' },
      { 'name': "Marcus", 'house': 'Ravenclaw' },
      { 'name': "Owen", 'house': 'Hufflepuff' },
      { 'name': "Ron", 'house': 'Gryffindor' }
    ])
  })
});

//TEST ORDEN DESC sort()
describe('Pruebas para funcion ordenarDesc', () => {
  it('La funcion ordenarDesc debe retornar un nuevo array con los nombres ordenados descendentemente', () => {

    const result = ordenarDesc(array)

    expect(result).toEqual([
      { 'name': "Ron", 'house': 'Gryffindor' },
      { 'name': "Owen", 'house': 'Hufflepuff' },
      { 'name': "Marcus", 'house': 'Ravenclaw' },
      { 'name': "Malcolm", 'house': 'Slytherin' },
      { 'name': 'Harry', 'house': 'Gryffindor' },
      { 'name': "Eddie", 'house': 'Ravenclaw' },
      { 'name': 'Cadwallader', 'house': 'Hufflepuff' },
      { 'name': "Angus", 'house': '' },
      { 'name': 'Amelia', 'house': 'Hufflepuff' },
    ])
  })
});

//TEST FILTRAR Gryffindor filter()
describe('Pruebas para funcion filtrarGryffindor', () => {
  it('La funcion filtrarGryffindor debe retornar un nuevo array con los personajes que pertenecen a Gryffindor ', () => {
    const result = filtrarGryffindor(array)

    expect(result).toEqual([
      { 'name': "Ron", 'house': 'Gryffindor' },
      { 'name': 'Harry', 'house': 'Gryffindor' }
    ])
  })
});

//TEST FILTRAR Slytherin filter()
describe('Pruebas para funcion filtrarSlytherin', () => {
  it('La funcion filtrarSlytherin debe retornar un nuevo array con los personajes que pertenecen a Slytherin ', () => {

    const result = filtrarSlytherin(array)

    expect(result).toEqual([
      { 'name': "Malcolm", 'house': 'Slytherin' }
    ])
  })
});

//TEST FILTRAR Hufflepuff filter()
describe('Pruebas para funcion filtrarHufflepuff', () => {
  it('La funcion filtrarHufflepuff debe retornar un nuevo array con los personajes que pertenecen a Hufflepuff ', () => {

    const result = filtrarHufflepuff(array)

    expect(result).toEqual([
      { 'name': "Owen", 'house': 'Hufflepuff' },
      { 'name': 'Cadwallader', 'house': 'Hufflepuff' },
      { 'name': 'Amelia', 'house': 'Hufflepuff' }

    ])
  })
});

//TEST FILTRAR Ravenclaw filter()
describe('Pruebas para funcion filtrarRavenclaw', () => {
  it('La funcion filtrarRavenclaw debe retornar un nuevo array con los personajes que pertenecen a Ravenclaw ', () => {

    const result = filtrarRavenclaw(array)

    expect(result).toEqual([
      { 'name': "Marcus", 'house': 'Ravenclaw' },
      { 'name': "Eddie", 'house': 'Ravenclaw' }

    ])
  })
});

//Test PORCENTAJE DE PERSONAJES POR CASA porcentajePersonajesGryffindor()
describe("Pruebas para función porcentajePersonajesGryffindor", () => {
  it("La función porcentajePersonajes debe retornar el porcentaje de los personajes pertenecientes a la casa Gryffindor", () => {

    const result = porcentajePersonajesGryffindor(array);

    expect(result).toBe("Un 22% de los personajes pertenecen a esta casa")
  })
});

describe("Pruebas para función porcentajePersonajesSlytherin", () => {
  it("La función porcentajePersonajes debe retornar el porcentaje de los personajes pertenecientes a la casa Slytherin", () => {

    const result = porcentajePersonajesSlytherin(array);

    expect(result).toBe("Un 11% de los personajes pertenecen a esta casa")
  })
});

describe("Pruebas para función porcentajePersonajesHufflepuff", () => {
  it("La función porcentajePersonajes debe retornar el porcentaje de los personajes pertenecientes a la casa Hufflepuff", () => {

    const result = porcentajePersonajesHufflepuff(array);

    expect(result).toBe("Un 33% de los personajes pertenecen a esta casa")
  })
});

describe("Pruebas para función porcentajePersonajesRavenclaw", () => {
  it("La función porcentajePersonajes debe retornar el porcentaje de los personajes pertenecientes a la casa Ravenclaw", () => {

    const result = porcentajePersonajesRavenclaw(array);

    expect(result).toBe("Un 22% de los personajes pertenecen a esta casa")
  })
});