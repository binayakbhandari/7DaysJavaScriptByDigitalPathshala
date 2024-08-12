// This is my 1st day of 7 days JS Workshop.
// To run the node js code enter "node filename.js"
// To run the node js code automatically "node --watch filename.js"
// Watch command helps to refresh and run js code automatically

// console.log("Hello World")

// Day 1 Code ends here.
// Thank You Digital Pathshala 



// This is my 2nd day of 7 days JS Workshop.
// Variable
// Variable is created to store or hold the value.
// Creating variables by var, let and const
// Recommended while creating variable is const.
// Data Types:
// 1. String starts from a to z and always enclosed with single or double quotation.
// 2. Integer includes number data and not enclosed with single or double quotation.
// 3. Boolean includes true or false value and not enclosed with single or double quotation because it is reserved keywords.
// Array:
// An Array is a collection of similar data that is given a common name.
// In an array data are stored in sequencial order and easy to access.
// const shoes = ['Gold Star', 'Adidas', 'Puma', 'Nike']
// console.log("East and West", shoes[0], "is Best.")
// Object:
// When we have the related information about something or someone and there are differnt data types.
// datatype objectName = {
// key: value,
// key: value
// }
// const me = {
//     name: "Binayak Bhandari",
//     age: "18",
//     qualification: "+2 Pass",
//     skills: "HTML, CSS, JavaScript and WordPress",
//     isNepali: true
// }
// console.log("My name is ",me.name, ". I am", me.age, "years old.")

// Properties and Methods
// If there is a variable in class then it is know as Properties.
// class test{ 
// lenght = 10
// }
// If there is a function in class then it is know as Method.
// class test{
//     push(){
//     }
// }
// console.log(shoes.length)
// length property is use to find the total variables in an array.
// push() method
// shoes.push("fasttrack")
// push() method add the element at last index of an array.
// unshift() method
// shoes.unshift("fasttrack")
// unshift() method is use to add the element at first index of an array.
// pop() method
// shoes.pop()
// pop() method is use to remove the last element of an array.
// shift() method
// shoes.shift()
// shift() method is use to remove the first element of an array.
// splice() method
// splice() method is use to both add and remove the element in an array.
// arrayName.splice(firstArgumnet, secondArgument, newElementName) 
// firstArgument is from which index to start to remove the element.
// secondArgument is how many elements to remove from an array.
// shoes.splice(3, 0, 'Binayak')
// console.log(shoes.length)
// console.log(shoes)

// Day 2 Code ends here.
// Thank You Digital Pathshala 



// This is my 3rd day of 7 days JS Workshop.
// const numbers = [1,2,3,4,5,6,7,8,9]
// slice() method
// const newNumbers = numbers.slice(0,5)
// slice() method creates the copy of an array and does not modify the original array.
// console.log(newNumbers)
// splice() method
// numbers.splice(5, 4, 404)
// splice() method modifies the original array and helps to add the new elements in an array.
// console.log(numbers)
// split() method
// const text = "I love JavaScript"
// const newText = text.split(" ")
// split() method is use to split the string into different element of an array and it does not mofiy the original string.
// console.log(newText)
// console.log(newText[0], newText[1], "Python")

// #QuickPractice
// const languages = ['JavaScript', 'Python', 'PHP', 'HTML']
// languages.splice(3,1, "C")
// console.log(languages)

// //#QuickPractice
// const characters = ['M','a','n','i','s','h']
// characters.splice(0,6, 1, 2, 3, 4, 5, 6)
// console.log(characters)

// const details = {
//     name: "Binayak Bhandari",
//     age: 18,
//     address: "Kathmandu"
// }
// details.school = "Nature"
// console.log(details)
// Object.freeze(objectName) method
// Object.freeze(details)
// Object.freeze(ObjectName) method is use to freeze an object.
// details.hobby = "Coding"
// Now after Object.freeze() method we cannot remove or add keys and value in an object.

// Day 3 Code ends here.
// Thank You Digital Pathshala 



// This is my 4th day of 7 days JS Workshop.
// The code of line between opening and closing of curly braces id known as Block of Code.
// Conditional Statements
// const isBusy = true
// if(isFree){
//     console.log("You are on the right path.")
// }
// else{
//     console.log("You have been distracted.")
// }

// Ternary operator
// isFree ? console.log("You are on the right path.") : console.log("You have been distracted.")

// Short circuit
// isBusy && console.log("You are on the right path.") // To check true statement.
// isBusy || console.log("You have been distracted.") // To check false statement.

// Nullish coalescing operator
// const age = null
// const result = age ?? "No age"
// console.log("The age of the user is ",result)

// Loops in JavaScript
// const names = ['Manish Sir', 'Binayak Sir', 'Saroj Sir', 'Prakash Sir']
// For Loop
// for(var i=0; i < names.length; i++){
//     console.log("I am ",names[i])
// }

// For of Loop
// for(let name of names){
//     console.log("I am ",name)
// }
// This is more optimized than for loop.
// const shoes = ['Gold Star', 'Adidas', 'Nike', 'Puma']
// for(let shoe of shoes){
//     console.log("My favourite shoes brand is",shoe)
// }

// Day 4 Code ends here.
// Thank You Digital Pathshala 



// This is my 5th day of 7 days JS Workshop.
// Function is a block of code to perform some operation.
// Types of function
// Regular function or normal function
// Parameter
// function add(a,b){ // The data which is accepted by function is parameter i.e(a,b).
//     console.log(a+b)
// }
// add(2,3) // The data which is given to function is argument i.e(2,3).

// Named regular function
// let subtract = function(a,b){
//     console.log(a-b)
// }
// subtract(6,2)

// Arrow function
// const add = (a,b)=>{
//     console.log(a+b)
// }
// add(4,6)

// Anonymous function
// Anonymous arrow function
// (()=>{
//     console.log("Hello World")
// })()

// Higher order function
// Those functions where we have to give another function as an argument. or Those functions which take another function as a parameter.
// - Higher order function ma gako function lai chai call back function vanenxa.
// - Higher order function chai array ma lagxa.
// forEach
// map
// reduce
// filter

// forEach function
// const numbers = [1,2,3,4,5,6,7,8,9]
// numbers.forEach(function(number){
//     console.log(number)
// })

// const code = [
//     {
//         _id: "52435jsdk435245rdf452454",
//         text: "test1",
//         userId: "f3445134",
//         title: "test1",
//         ipAddress: "127.321.424.12",
//         createdAt: "2024-08-12T14:09:29.236Z",
//         updatedAt: "2024-08-12T14:09:29.236Z",
//         __v: 0
//     },
//     {
//         _id: "3498jsdk435245rdf452454",
//         text: "test2",
//         userId: "f345894",
//         title: "test2",
//         ipAddress: "127.321.424.12",
//         createdAt: "2024-08-12T14:09:29.236Z",
//         updatedAt: "2024-08-12T14:09:29.236Z",
//         __v: 0
//     },
//     {
//         _id: "3455jsdk435245rdf452454",
//         text: "test3",
//         userId: "f802455",
//         title: "test3",
//         ipAddress: "127.321.424.12",
//         createdAt: "2024-08-12T14:09:29.236Z",
//         updatedAt: "2024-08-12T14:09:29.236Z",
//         __v: 0
//     }
// ]

// code.forEach(function(data){
//     console.log("The user's id is",data.userId)
//     console.log("The IP address is", data.ipAddress)
// })
// With the help of forEach we can loop any array.

// Map function
// Quick Problem
// There is an array and there is two objects and we have to add one key name and key value.
// Before
// const details = [
//     {
//         firstName: "Manish",
//         lastName: "Basnet"
//     },
//     {
//         firstName: "Reeya",
//         lastName: "Basnet"
//     }
// ]
// After
// const details = [
//     {
//         firstName: "Manish",
//         lastName: "Basnet",
//         fullName: "Manish Basnet"
//     },
//     {
//         firstName: "Reeya",
//         lastName: "Basnet",
//         fullName: "Reeya Basnet"
//     }
// ]

// const details = [
//     {
//         firstName: "Manish",
//         lastName: "Basnet"
//     },
//     {
//         firstName: "Reeya",
//         lastName: "Basnet"
//     }
// ]

// const data = details.map(function(detail){
//     return {
//         // firstName: detail.firstName,
//         // lastName: detail.lastName,
//         ...detail,
//         // spread operator is used to show all the keys and keys value as it is of the parameter.
//         fullName: detail.firstName + " " + detail.lastName
//     }
// })
// console.log(data)
// // Note:- Map function does not modifies the original array.
// // It creates a new array and stores data in it.
// // If we want to modify and create new data then map is the best.

// Quick Problem
// There is an array and there are theree objects and we have to add the new key and key value by multiplying price and quantity.
// Before
// const products = [
//     {
//         name : "Apple",
//         price : 200,
//         quantity : 2
//     },
//     {
//         name : "Mango",
//         price : 100,
//         quantity : 5
//     },
//     {
//         name : "Pineapple",
//         price : 300,
//         quantity : 1
//     }
// ]
// After
// const products = [
//     {
//         name : "Apple",
//         price : 200,
//         quantity : 2,
//         total : 400
//     },
//     {
//         name : "Mango",
//         price : 100,
//         quantity : 5,
//         total : 400
//     },
//     {
//         name : "Pineapple",
//         price : 300,
//         quantity : 1,
//         total : 300
//     }
// ]

// const products = [
//     {
//         name : "Apple",
//         price : 200,
//         quantity : 2
//     },
//     {
//         name : "Mango",
//         price : 100,
//         quantity : 5
//     },
//     {
//         name : "Pineapple",
//         price : 300,
//         quantity : 1
//     }
// ]

// const fruits = products.map(function(fruit){
//     return {
//         ...fruit,
//         total : fruit.price * fruit.quantity
//     }
// })
// console.log(fruits)

// Quick Problem
// Before
// const nums = [1,2,3,4,5]
// After
// const squares = [1,2,3,4,5]

// const nums = [1,2,3,4,5]
// const squares = nums.map(function(num){
//     return num * num
// })
// console.log(nums)
// console.log(squares)

// Filter function
// It helps to filter data from the array and return data in a new array.
// const numbers = [1,2,3,4,5,6,7,8,9]
// const even = numbers.filter(function(num){
//     return num % 2 == 0
// })
// console.log(even)

// const books = [
//     {
//         title : 'Mahabir Pun',
//         year : 2023
//     },
//     {
//         title : 'Rich Dad Poor Dad',
//         year : 1997
//     },
//     {
//         title : 'The Alchemist',
//         year : 1988
//     },
//     {
//         title : 'Muna Madan',
//         year : 1936
//     }
// ]

// const publishedBook = books.filter(function(book){
//     return book.year > 2000
// })
// console.log(publishedBook)

// Day 5 Code ends here.
// Thank You Digital Pathshala 