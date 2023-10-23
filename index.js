//RESUELVE LOS EJERCICIOS AQUI

//1
const numbers = [4, 5, 6, 7, 8, 9, 10];

const elevados = numbers.map((item) => {
    return Math.pow(item, item) 
})

console.log(elevados);

//2

const foodList = ['Pizza', 'Ramen', 'Paella', 'Entrecot'];
const origins = ['Italia', 'Japón', 'Valencia', ''];

const result = foodList.map((food, index) => {
  const origin = origins[index];
  const message = `Como soy de ${origin ? origin : 'Aunque no como carne'}, amo comer ${food}`;
  return message;
});

console.log(result);


//3
const staff = [
    {
      name: 'Pepe',
      role: 'The Boss',
      hobbies: ['leer', 'ver pelis']
    },
    {
      name: 'Ana',
      role: 'becaria',
      hobbies: ['nadar', 'bailar']
    },
    {
      name: 'Luis',
      role: 'programador',
      hobbies: ['dormir', 'comprar']
    },
    {
      name: 'Carlos',
      role: 'secretario',
      hobbies: ['futbol', 'queso']
    }
  ]

  const newArray = staff.map((name) => {
    console.log(`${name.name} es ${name.role} y le gusta ${name.hobbies[0]} y ${name.hobbies[1]}`);
  });

//4

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const result4 = numbers2.filter(n => n%2)

console.log(result4)

//5

const foodList2 =[
{
  name: 'Tempeh',
  isVeggie: true
},
{
  name: 'Cheesbacon burguer',
  isVeggie: false
},
{
  name: 'Tofu burguer',
  isVeggie: true
},
{
  name: 'Entrecot',
  isVeggie: false
}]

const result5 = foodList2
  .filter(food => food.isVeggie) 
  .map(food => `Que rico ${food.name} me voy a comer!`);

console.log(result5);

/*- [ ] 6.- Dado el array **inventory**, devolver un array con los nombres de los elementos que valgan más de 300 euros.
*/

const inventory = [
    {
      name: 'Mobile phone',
      price: 199
    },
    {
      name: 'TV Samsung',
      price: 459
    },
    {
      name: 'Viaje a cancún',
      price: 600
    },
    {
      name: 'Mascarilla',
      price: 1
    }
  ]

  const newArray2 = inventory.filter( (num) => {
     return num.price > 300
  })

  console.log(newArray2);

  /*
  [ ] 6.- Dado el siguiente array **numeros** [39, 2, 4, 25, 62], obten la multiplicación de todos los elementos del array
  */

  const numeros = [39, 2, 4, 25, 62]

const newNumeros = numeros.reduce((currentNumber, plusNumber) => currentNumber * plusNumber)

console.log(newNumeros);

/*
 [ ] 7.- Concatena todos los elementos del array con reduce para que devuelva una sola frase
 */


const sentenceElements = [
  'Me',
  'llamo',
  'Marcos',
  'y',
  'quiero',
  'sentir',
  'la',
  'fuerza',
  'con',
  'javascript'
];

console.log(sentenceElements.join(' '));

/*
- [ ] 8.- Obtener el monto total de los elementos que pertenecen a catergory "code" en el siguiente array.
*/

const books = [
  {
    name: ' JS for dummies',
    author: 'Emily A. Vander Veer',
    price: 20,
    category: 'code'
  },
  {
    name: 'Don Quijote de la Mancha',
    author: 'Cervantes',
    price: 14,
    category: 'novel'
  },
  {
    name: 'Juego de tronos',
    author: 'George R. Martin',
    price: 32,
    category: 'Fantasy'
  },
  {
    name: 'javascript the good parts',
    author: 'Douglas Crockford',
    price: 40,
    category: 'code'
  }
]

const montoTotal = books
    .filter((cate) =>{return cate.category === 'code'} )
    .map((price) => {return price.price})
    .reduce((num1, num2) => num1 + num2)

console.log(montoTotal);