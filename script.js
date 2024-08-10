// This is my first day of 7 days JS Workshop.
// To run the node js code enter "node filename.js"
// To run the node js code automatically "node --watch filename.js"
// Watch command helps to refresh and run js code automatically

// console.log("Hello World")

// Thank You Digital Pathshala 
// Day 1 Code ends here.


// This is my second day of 7 days JS Workshop.
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
const shoes = ['Gold Star', 'Adidas', 'Puma', 'Nike']
// console.log("East and West", shoes[0], "is Best.")
// Object:
// When we have the related information about something or someone and there are differnt data types.
// datatype objectName = {
// key: value,
// key: value
// }
const me = {
    name: "Binayak Bhandari",
    age: "18",
    qualification: "+2 Pass",
    skills: "HTML, CSS, JavaScript and WordPress",
    isNepali: true
}
console.log("My name is ",me.name, ". I am", me.age, "years old.")

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
console.log(shoes.length)
console.log(shoes)

// Thank You Digital Pathshala 
// Day 2 Code ends here.


