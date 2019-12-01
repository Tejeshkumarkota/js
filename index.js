//2nd tutorial
let $age = 25;
let year = 2019;

console.log($age, year);

age = 30;
console.log(age);

const points = 100;
console.log(points);

var score = 75;
console.log(score);

// javascript data types
// number - 1,2,3,100,3.14 even decimals
// string - 
// boolean - true/false
// null - explictly set a variable with no value
// undefined - for variables that have not yet been defined
// object - complex data structures - arrays,dates,literals etc
// symbol - used with objects

//strings
console.log('tejesh hello,world');
let email = 'tejesh@zolipe.com';
console.log(email);

//string concatenation
let firstName = 'Tejesh';
let lastName = 'Kumar';

let fullName = firstName + ' ' + lastName;
console.log(fullName);

//getting characters
console.log(fullName[0]);

//string length(methods and properties)
console.log(fullName.length);
  
//string methods
//strings have several different functions associated with them now these functions are called methods and there is a technical difference between functions and methods but you are going to here thme used interchangeably so basically a function is snippet of code which performs some kind of specific task,and a method is just a function that's associated with a particular object or datatype and two words essentially mean the same thing
//example we have a method called toUppercase and what that does is to take the string and it turns it so that all the letters are uppercase
console.log(fullName.toUpperCase());
//toUppercase is a method a function which actually does turns fullname to uppercase.so because this is a method what we do is add () brackets or parenthesis on the end of it.
let result = fullName.toLowerCase();
console.log(result, fullName);


let index = email.indexOf('@'); 
//but technically speaking when we pass a value into a method like this this is an argument
console.log(index);
//methods are just functions that belong to a specific object or object type
let email_id = 'mario@zolipe.com';
let lastindexof = email_id.lastIndexOf('o');
console.log(lastindexof);

let slice = email_id.slice(3,5);
console.log(slice);
//slice method will take two arguments
//1.where we want to slice from so if we want to slice from the beginning we say position 0 
//2.where we want to slice to so if we want to slice to position 10 we say position 10

let substring = email_id.substr(3,5);
console.log(substring);
//this also will take two arguments
//1.first argument same like as slice
//2.But second argument how many characters we want to go along so if i say 10 then it is going to get us the first 10 which is the same as 0 to 10

// let replace = email_id.replace('m', 'w');
//this also take two arguments
//1.first argument will do which character you want to replace
//2.secoond argument will do what character you want in replaced place.
let replace = email_id.replace('o', 'w');
console.log(replace);
//we have o are more than one. what it will do means it will replace the first o

//numbers
let radius = 10;
const pi = 3.14;

// console.log(radius, pi);

//math operators +,-,*,/,**,%
console.log(10/2);
let percentage = radius % 3;
console.log(percentage);

let area = pi*radius**2;//formula for working out the area of a circle
console.log(area);

//order of operation - BIDMAS
let bidmas = 5 * (10-3)**2;
console.log(bidmas);

let likes = 10;
// likes = likes + 1;
// likes++;
// likes--;
likes += 10;
// likes -= 10;
// likes *= 10;
console.log(likes);

//NaN - not a number

console.log(5 / 'hello');
console.log(5 * 'hello');

// template strings
const title = 'best reads of 2019';
const author = 'tejesh';
const likes_in = 1000;

//concatenation way
let concat = 'the book called ' + title + ' by ' + author + ' has ' + likes_in + ' likes';
console.log(concat);

//template string way
let template_string = `the book called ${title} by ${author} has ${likes_in} likes`;
console.log(template_string);

//creating html templates
let html = `<h2>${title}</h2>
<p>By ${author}</p>
<span>This blog has ${likes} likes</span>`;
console.log(html);

//Arrays
let teja = ['sai','gvh','sjshg'];
//want to override of these positions let say i want to override position 1 with a new value
teja[1] = 'ken';
console.log(teja);
console.log(teja[2]);
//numbers
let ages = [20,25,30,35];
console.log(ages[2]);
//in one array mixing string and numbers
let random = ['gopal','vbd',30,20];
console.log(random);
console.log(teja.length);

//array methods
