console.log("hello")
// Typ Zmiennych

// String
// Number
// Boolean
// Object
// null/undefined


// Jak zapisujemy zmienne (3 sposoby)

// Scope globalny
var name = "damian";

// Scope leksykalny (if, for)
let name2 = 'Damian2';

// const nie mozna nadpisac, ale mozna dopisac/usunac dane ze srodka (w przypadku array lub obiektow)

const name3 = 'Damian3';


// Typy zlozone

// Array

const names = ['Damian', 'Paweł', 'Dominik'];

// Metody

// push - dodawanie
// names.push('Marcin');
// pop - usuwanie z konca listy
// names.pop()
// slice - tworzenie tablicy z innej tablicy przez wyciecie kilku elementow zdefiniowanych indeksem
// names.slice(0, 2);
// splice - usuniecie lub dodanie elementu
// names.splice(0, 1, 'Daniel');
// shift - usuniecie 1 elemenetu
// names.shift()
// unshift
// names.unshift(1, 2)

// concat - dodawanie do tablicy

// names.concat('Paweł')

// join - tworzenie tablicy ze stringa
// split - tworzenie stringa z tablicy
// includes - sprawdzenie czy tablica zawiera element



// forEach
// np. do sumowania wartości lub do przechodzenia przez elementy

// names.forEach(name => {
//   console.log(name);
// })

// map

// const arrayOfLetters = [];

// names.forEach(name => {
//   arrayOfLetters.push(name.length)
// });

// console.log(arrayOfLetters)

// const arrayOfLetters = names.map(name => {
//   return name.length
// });

// console.log(arrayOfLetters)

// filter

const shopping = [
  {
    name: "banan",
    price: 3.99
  },
  {
    name: "Chleb",
    price: 4.99
  },
  {
    name: "Wiśnie",
    price: 19.99
  }
]

// const calculateMostExpensiveProducts = (price) => {
//   return shopping.filter(product => {
//     return product.price > price
//   })
// }

const expensiveProducts = shopping.filter(product => {
  return product.price > 10
})

console.log(expensiveProducts)


// 1. Za pomoca funkcji forEach, policz sume produktow
// 2. Oblicz cenę produktów (shopping), które w swojej nazwie mają literę e



let sum= 0
shopping.forEach(product => {
    // Zadanie nr 1
    

      sum = sum + product.quantity ;
    }

    return sum;
  
    
});






// Mamy listę ksiązek

// 1. Przy uzyciu funkcji filter, wyswietl tablice ksiazek z kategorii adventure
// 2. Przy uzyciu funkcji filter, wyszukaj elementy, ktore maja w swojej nazwie ciag znakow 'er'
// 3. Przy uzyciu funkcji map, stworz tablice zawierajaca ile jest liter w nazwie ksiazki

const books = [
  {
    name: "Harry Potter",
    category: "adventure"
  },
  {
    name: 'Alice in Wonderland',
    category: 'fantasy'
  },
  {
    name: 'Lord of the Rings',
    category: 'fantasy'
  }
]
const booksCotegory = books.filter(book => {
  return book.category=== "adventure"
})









// 1. Stworz funkcje multiply, ktorej zadaniem bedzie wymnozyc przez siebie 2 liczby

// multiply(3, 3) -> 9

// 2. Stworz funkcje, ktora zwroci liczbe znakow z danego stringa

// checkLetter('Damian') -> 6

// 3. Stworz funkcje findByCategory, ktora przyjmuje kolekcje i kategorie, a nastepnie wyszukaj wszystkie ksiazki, ktore maja podana kategorie.

// findByCategory(books2, 'adventure') -> [{ob1}]

// const books2 = [
//   {
//     name: "Harry Potter",
//     category: "adventure"
//   },
//   {
//     name: 'Alice in Wonderland',
//     category: 'fantasy'
//   },
//   {
//     name: 'Lord of the Rings',
//     category: 'fantasy'
//   }
// ] 
function(a b) {
  return = a*b
}
const checkLetter= string => string.lenght





// ! ------- POZOSTALE FUNKCJE w PROG FUNKCYJNYM ----------

// find

const books4 = [
  {
    name: "Harry Potter",
    category: "adventure"
  },
  {
    name: 'Alice in Wonderland',
    category: 'fantasy'
  },
  {
    name: 'Lord of the Rings',
    category: 'fantasy'
  }
]

// Find sluzy do zlapania pierwszego elementu znalezionego

const fantasyBook = books4.find(book => book.category === 'adventure')

console.log(fantasyBook)

// reduce

const shopping3 = [
  {
    name: "banan",
    price: 3.99
  },
  {
    name: "Wiśnie",
    price: 19.99
  },
  {
    name: "Chleb",
    price: 4.99
  },
]

const price3 = shopping3.reduce((accumulator, product) => {
  console.log(accumulator);

  return accumulator - product.price;
}, 500)

console.log(price3)

// Sort

const sortedShoppingList = shopping3.sort((a, b) => {
  return a.name > b.name ? 1 : -1;
})

console.log(sortedShoppingList)

// 1. Za pomocą funkcji sort, zwróc produkt, który jest najdrozszy
const sortedShoppingPrice = shopping3.sort((a, b) => {
  return a.price> b.price ? 1 : -1;
  console.log(sortedShoppingPrice)
})
// 2. Za pomoca funkcji find, sprawdz cene chleba
const breadPrice= shopping3.find(product=>product.price)
// 3. Za pomoca funkcji reduce, sprawdz srednia wzrostu w klasie. W klasie sa 3 osoby [178, 164, 199]                                                                   





// sort
// reduce


// Properties

// .length dlugosc