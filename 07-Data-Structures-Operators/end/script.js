'use strict';
// Data needed for first part of the section
const restaurant = {
  name: 'Thrills Restaurant',
  locationOfRestaurant: 'Broad Street, Lagos Island, Lagos State',
  categories: ['Swallow', 'Vegetarian', 'Organic'],
  starterMenu: ['Cassava', 'Garri', 'Beans'],
  mainMenu: ['Maize', 'Plantain'],
  orderFood: function () {
    return [this.starterMenu, this.mainMenu];
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};
//REST PATTERN
// const [a,,...c] = [1, 2, 3, 4, ...[5, 6]];
// console.log(a)
// console.log(c)
// const fullMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(fullMenu);
// const [food1, , food2, ...otherFoods] = fullMenu;
// console.log(food1);
// console.log(food2);
// console.log(otherFoods);
// const {
//   openingHours: {
//     thu: { open, close },
//     fri: { open: openFr, close: closeFr },
//   },
// } = restaurant;
//OBJECT DESTRUCTURING
// const { categories: groups, openingHours, locationOfRestaurant } = restaurant;
// console.log(groups);
// console.log(openingHours);
// console.log(locationOfRestaurant)
//NESTED OBJECTS
// const {thu : {open, close}} = openingHours
// console.log(open, close)
// const {
//   openingHours: {
//     thu: { open, close },
//   },
// } = restaurant;
// console.log(open, close)
//ARRAY DESTRUCTURING
// const myArr = [3, 4, 6, 10];
//UNPACKING VALUES FROM AN ARRAY INTO VARS
// const a = myArr[0];
// const b = myArr[1];
// const c = myArr[2];
// const d = myArr[3];
// console.log(a, b, c, d)

// const [p,q,r,s] = myArr
// console.log(p,q,r,s)
// console.log(myArr)
// const [,first,second] = restaurant.categories
// console.log(first, second)

//RETURNING MULTIPLE VALUES FROM A FUNC
// const [starterMenu, mainMenu] = restaurant.orderFood()
// console.log(starterMenu)
// console.log(mainMenu)
//Nested array
// const nestedArray = [4,5,[10,20]];
// const [a,b,[c,d]] = nestedArray
// console.log(a, b, c,d)

// const arr = [5,8,9];
// const [x = 1, y = 1, z = 1] = arr;
// console.log(x, y, z);

//SPREAD OPERATOR
const myArr = [1, 5, 7];
// const badNewArray = [myArr[0], myArr[1], myArr[2], 30, 40]
// console.log(badNewArray)
// const goodNewArr = [...myArr, 30, 40]
// console.log(goodNewArr)
// console.log(...myArr)
// console.log(1,5,7)
// const arrayOfVowels = ["a", "e", "i", "o", "u"];
// const arrayOfVowelsCopy = [...arrayOfVowels]
// console.log(arrayOfVowelsCopy)
// console.log(..."Ayobami")
// const restaurantCopy = {...restaurant};
// console.log(restaurantCopy)

// const nums = [1,2,3,4]
// const[a,b,c,d] =  nums
// console.log(1,2,3,4)
// const nums = [1,2,3,4]
// const numsCopy = {...restaurant}
// console.log(numsCopy)

const bar = [2, 4, 6, 8, 10];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i] * 3)
// }

//FOR OF LOOP
// for(const item of bar){
//   console.log(item * 3)
// }

// for(const x of restaurant.categories){
//   console.log(x)
// }
// const arrayOfNumbers = [20, 45, 65, 32, 56, 54];
// let sum = 0;
// const sumNumbers = function () {
//   for (let  i = 0; i < arrayOfNumbers.length; i++) {
//     console.log(arrayOfNumbers[i]);
//     sum += arrayOfNumbers[i];
//   }
//   return `The sum of the array numbers is ${sum}` ;
// };
// console.log(sumNumbers());

// const arrayOfNumbers = [20, 45, 65, 32, 56, 54];
// let sum = 0;
// const sumNumbers = function () {
//   for (const item of arrayOfNumbers) {
//     console.log(item);
//     sum += item;
//   }
//   return `The sum of the array numbers is ${sum}` ;
// };
// console.log(sumNumbers());
//SETS
// const nameSet = new Set("azeez")
// console.log(nameSet)
// console.log([1,2,4,5,2,3,33,2])
// const arr =  [1,2,2,2,4,5]
// const mySet = new Set([1,4,5,5,5,6,6,7])
// console.log(mySet)
// console.log(mySet.size)
// console.log(mySet.has(5))
// mySet.add(50)
// // console.log(mySet)
// mySet.delete(5)
// console.log(mySet)
// console.log(mySet[2])
// mySet.clear()
// console.log(mySet)

// const setOfFood = new Set(["Rice", "Beans", "Dodo"]);
// console.log(setOfFood)
// for(const food of setOfFood){
//   console.log(food)
// }
// const arr = [...setOfFood]
// console.log(arr)

// const arrayOfLocation = ["Ibadan", "Lagos"]
// const setOfLocation = new Set(arrayOfLocation)
// console.log(setOfLocation)
// const arr = [2,4,4,4,6,8];
// console.log(arr)
// const mySet = new Set([5,6,7,5]);
// console.log(mySet)
// console.log(mySet.size)
// console.log(mySet.has(6))
// console.log(mySet.add(10))
// console.log(mySet.delete(5))
// mySet.clear()

//google map
//MAPS
// const myObj = {
//   lastName : "Adekunle",
//   firstName : "Ciroma"
// }

// const person1 = new Map()
// person1.set("firstName", "Ciroma")
// person1.set(2, "random")
// console.log(person1)
// const restaurant2 = new Map();
// restaurant2
//   .set('name', 'Eat and Chill')
//   .set('location', 'Bodija')
//   .set('Categories', ['Swallow', 'Fruits'])
//   .set(true, 'We are open')
//   .set(false, 'we are closed');
//   console.log(restaurant2);

// console.log(restaurant2.get("name"))
// console.log(restaurant2.get("location"))
// console.log(restaurant2.get(true))
// restaurant2.delete("Categories")
// console.log(restaurant2.has("location"))
// console.log(restaurant2.size)
// restaurant2.clear()
// console.log(restaurant2);

// function test (...arrofArgs){
// console.log(typeof arrofArgs)
// }
// test(10)
// console.log(typeof +"10")
// const questions = new Map([
//   ["question", "What is the best programming language in the world"],
//   ["option 1" , "Java"],
//   ["option 2", "Javascript"],
//   ["option 3", "Python"]
// ])

// for(const bunny of questions ){
//   const [key, value] = bunny
//   // console.log(bunny)
//   console.log(`${key} : ${value}`)
// }

// const [key, value]=["option", "Answer"]
// console.log(key)
// console.log(value)

// const arrOfFriends = ["Ciroma", "Dumebi", "Kelechi"];
// for (const bunny of arrOfFriends){
// console.log(bunny)
// }

//SUMMARY OF DATA STRUCTURES
// const oldFullName = 'Ciroma Adekunle';
// console.log(firstName[1]);

// console.log("Dumebiwww)
// console.log(firstName.length)
//Indexof
// console.log(firstName.indexOf("Kunle"))
//slice method
// const substring = firstName.slice(5,-2);
// console.log(substring)
//uppercase
// console.log(firstName.toUpperCase())
//lowercase
// console.log(firstName.toLowerCase())
//replace
// const newFullName = oldFullName.replace("Adekunle", "George")
// console.log(newFullName)
// const text = "Mississippi"
// console.log(text.replaceAll("i", "e"))
//concat
// console.log("Hello".concat(" world"))
//Methods that return boolean

// console.log(fullName.includes('kate'));
// console.log(fullName.startsWith('Y'));
// console.log(fullName.endsWith("Kate"))
// if(fullName.includes("e")){
//   console.log()
// }
//CLASSWORK
// const fullName = 'DUMebi KATe';
//Dumebi Kate
//trim
// const myName = "   Ayo   Seyi   "
// console.log(myName.trim())
//padstart and padend method
const cardNumber = "4182455699873212";

// console.log(typeof cardNumber)
// const hiddenCardNumber = cardNumber.padEnd(5, "X");
// console.log(hiddenCardNumber)

const string = "hello"
//*****hello

console.log(string.padStart(10, "*"))
const firstFour = cardNumber.slice(0,4)
console.log(firstFour.padStart(16, "*"))
//DUMEBI
//Dumebi
//Ayobami Owoeye => AO
//Toye Uthman ==> TU

function initialize (fullName){

}

console.log(initialize("Ayobami Owoeye"))
console.log(initialize("Bello Ayodeji"))