//Question 1
const ages = [21, 18, 45, 30];
//Check if all ages are greater than or equal to 18 using every()
const allAdults = ages.every(age => age >= 18);
console.log(allAdults);
//Check if any age is below 20 using some ()
const belowTwenty = ages.some(age => age < 20);
console.log(belowTwenty);

//Question 2
const products = [{id: 1, name: "Laptop"}, {id: 2, name: "Phone"}, {id: 3, name: "Tablet"}];
//Find the product with the name "Phone" using the find() method.
const phone = products.find(product => product.name === "Phone");
console.log(phone);
//Get the index of the product with id equal to 3 using findIndex() 
const index = products.findIndex(product => product.id === 3);
console.log(index); 

//Question 3
//Write a function greet that takes a name parameter with a 
//default value of "Friend". The function should return a greeting message like, "Hello, [name]!"
function greet(name = "Friend") {
    return `Hello, ${name}!`;
}
console.log(greet());
console.log(greet("Aisha"));

//Question 4
// Define a string const message - "Welcome to JavaScript ES6!"
const message = "Welcome to JavaScript ES6!";

//Convert it to lowercase.
const lowerMessage = message.toLowerCase();
console.log(lowerMessage);

// Find the position of the word "JavaScript"
const position = message.indexOf("JavaScript");
console.log(position);

// Replace "JavaScript" with "ES6".
const newMessage = message.replace("JavaScript", "ES6");
console.log(newMessage);

//Question 5
//	Given the array const items - ["apple", "banana", "cherry"],
const items = ["apple", "banana", "cherry"];

//use the map() function to return a new array where each item is capitalized.
const capitalizedItems = items.map(item => item.charAt(0).toUpperCase() + item.slice(1));
console.log(capitalizedItems);


//Question 6
//Create an array const numbers = [3, 6, 9, 12, 15, 18, 21] . 
const numbers = [3, 6, 9, 12, 15, 18, 21];

//Use an arrow function with the filter () method to create a new array with only numbers greater than 10.
const greaterThanTen = numbers.filter(number => number > 10);
console.log(greaterThanTen);

//Question 7
//Create an array const scores - [10, 15, 20, 25] . 
const scores = [10, 15, 20, 25];

//Write a function using the reduce() method to calculate the total score.
const totalScore = scores.reduce((total, score) => total + score, 0);
console.log(totalScore); 


//Question 8
//Create two arrays const arr1 = [1, 2, 3] and const arr2 = [4, 5, 6] . 
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

//Use the spread operator to merge them into a single array and log the result.
const mergedArray = [...arr1, ...arr2];
console.log(mergedArray); 


//Question 9
// Define a string const message - "Welcome to JavaScript ES6!"
const nessage = "Welcome to JavaScript ES6!";

//Convert it to lowercase.
const lowerNessage = nessage.toLowerCase();
console.log(lowerNessage);

// Find the position of the word "JavaScript"
const messagePosition = nessage.indexOf("JavaScript");
console.log(messagePosition);

// Replace "JavaScript" with "ES6".
const newNessage = nessage.replace("JavaScript", "ES6");
console.log(newNessage);



//Question 10
// Define const name = "JavaScript" .
const mame = "JavaScript";

//write a code snippet that uses template literals to generate the following message:  
//"The length of the word 'JavaScript' is 10 characters." 
const info = `The length of the word '${mame}' is ${mame.length} characters.`;
console.log(info);
