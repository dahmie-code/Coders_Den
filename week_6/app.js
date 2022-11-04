const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
    'Chad',
    'Fiji',
    'Rome'
  ]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  
  const mernStack = ['MongoDB', 'Express', 'React', 'Node']

//   Iterate 0 to 10 using for loop, do the same using while and do while loop

for(let i = 0; i < 11; i++){
        console.log(i);
}

let i = 0;
while(i <= 10){
    console.log(i);
    i++;   
}

let num = 0
do{
    console.log(num);
    num++
}while(num<= 10)

// Iterate 10 to 0 using for loop, do the same using while and do while loop
for(let i = 10; i >= 0; i--){
   
    console.log(i);
}

let j = 10;
while(j>=0){
    console.log(j);
    j--;
}

let k = 10;
do{
    console.log(k);
    k--
} while(k >= 0);

// Iterate 0 to n using for loop
// for(let i = 0; i <= Math.random(); i++){

// }

// Write a loop that makes the following pattern using console.log():

let pattern = '';
for (let i = 0; i < 7; i++) {    
    pattern += '#'
    console.log(pattern);  
}

// Use loop to print the following pattern:

for(let i = 0; i <= 10; i++){
    console.log(`${i} * ${i} = ${i* i}`);
}

/*
Using loop print the following pattern
 i    i^2   i^3
 0    0     0
 1    1     1
 2    4     8
 3    9     27
 4    16    64
 5    25    125
 6    36    216
 7    49    343
 8    64    512
 9    81    729
 10   100   1000
*/

for(let i = 0; i <= 10; i++){
    console.log(`${i} ${i**2} ${i**3}`);
}

// Use for loop to iterate from 0 to 100 and print only even numbers

for(let i = 0; i <= 100; i+=2){
    console.log(i);
}

// Use for loop to iterate from 0 to 100 and print only odd numbers
for(let i = 1; i <= 100; i+=2){
    console.log(i);
}

// Use for loop to iterate from 0 to 100 and print only prime numbers.
for(let i =2; i <= 100; i++){
    for(j = 2; j <= 100; j++){
        if(i % j == 0 && i != j){
            break;
        }else if(i % j == 0){
            console.log(i);
        }
    }
}
// Use for loop to iterate from 0 to 100 and print the sum of all numbers.

let sum = 0;
for(let i = 0; i <= 100; i++){
    sum += i;
}
console.log(`The sum of all numbers from 0 to 100 is ${sum}.`);

// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let sumEven = 0;
let sumOdds = 0;
for(let i = 0; i <= 100; i++){
    i % 2 === 0 ? (sumEven += i) : (sumOdds += i);
}
console.log(`The sum of all evens from 0 to 100 is ${sumEven}. And the sum of all odds from 0 to 100 is ${sumOdds}.`);

// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array

let arr = [];
let arrEven = 0;
let arrOdds = 0;
for(let i = 0; i <= 100; i++){
   i % 2 === 0 ? (arr[0] = (arrEven += i)) : (arr[1] = (arrOdds += i))
   
}
console.log(arr);

// Develop a small script which generate array of 5 random numbers

let arrScript = [];
for(let i = 0; i < 5; i++){
    arrScript.push(Math.floor(Math.random()* 10))
}
console.log(arrScript);

// Develop a small script which generate array of 5 random numbers and the numbers must be unique

let arrUnique = [];
for(i = 0; i < 5; i++){
    const uniqueNum = Math.floor(Math.random()* 100) + 1;
    arrUnique.indexOf(uniqueNum) === -1 ? arrUnique.push(uniqueNum) : arrUnique.push(uniqueNum)
}
console.log(arrUnique);

// Develop a small script which generate a six characters random id: 5j2khz

for(let i = 0; i < 5; i++){
    
    console.log(Math.random().toString(36).substring(2, 8));
}

/**************************************************************Level 2*************************************************************************/

/* Develop a small script which generate any number of characters random id:
  fe3jo1gl124g,   xkqci4utda1lmbelpkm03rba
*/
// to revisit
    let rslt = "";
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    
    for (let i = 0; i < 10; i++) {
      rslt += chars.charAt(Math.random() * chars.length);
    }
    console.log(rslt); 

//   Write a script which generates a random hexadecimal number.
let hexNum = '#';
let characters = "abcdef0123456789"

for(let i = 0; i < 7; i++){
    hexNum += characters.charAt(Math.random() * characters.length);
}
console.log(hexNum);

// Write a script which generates a random rgb color number.

    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    console.log(`rgb(${r}, ${g}, ${b})`);

// Using the above countries array, create the following new array.
// ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
let newCountries = [];
for (const country of countries) {
    newCountries.push(country.toUpperCase());
}
console.log(newCountries);

// Using the above countries array, create an array for countries length'.
let countryLength = [];
for(const country of countries){
    countryLength.push(country.length);
}
console.log(countryLength);

/* Use the countries array to create the following array of arrays:
  [
  ['Albania', 'ALB', 7],
  ['Bolivia', 'BOL', 7],
  ['Canada', 'CAN', 6],
  ['Denmark', 'DEN', 7],
  ['Ethiopia', 'ETH', 8],
  ['Finland', 'FIN', 7],
  ['Germany', 'GER', 7],
  ['Hungary', 'HUN', 7],
  ['Ireland', 'IRE', 7],
  ['Iceland', 'ICE', 7],
  ['Japan', 'JAP', 5],
  ['Kenya', 'KEN', 5]
]
*/
let newCountry = [];
for (const country of countries) {
    newCountry.push([country, country.substring(0, 3).toUpperCase(), country.length])
}
console.log(newCountry);

// In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.

for (const country of countries) { 
    country.includes('land') ? console.log(country) : console.log(`The countries that doesn't contain the word 'land' are ${country}`)
}

// In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
let countryWithIa = [];
for (const country of countries) {
    country.endsWith('ia') ? countryWithIa.push(country) : console.log (`The countries that doesn't contain the word 'ia' are ${country}`)
}
console.log(countryWithIa);

// Using the above countries array, find the country containing the biggest number of characters.
let highestChar = '';
for (let i = 0; i < countries.length; i++){
    if (highestChar.length > countries[i].length) {
        highestChar;
    } else {
        highestChar = countries[i];
    }
}
console.log(highestChar);

// Using the above countries array, find the country containing only 5 characters.
let charArr = [];
// for (let i = 0; i < countries.length; i++){
//     if (countries[i].length == 5) {
//         charArr.push(countries[i]);
//     }
// }
for (const country of countries){
    if (country.length == 5) {
        charArr.push(country);
    }
}
console.log(charArr);

// Find the longest word in the webTechs array
let longestWord = '';
for (const tech of webTechs){
    if (longestWord.length > tech.length) {
        longestWord;
    } else {
        longestWord = tech;
    }
}
console.log(longestWord);

/* Use the webTechs array to create the following array of arrays:
[["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]*/
let techArr = [];
for (const tech of webTechs) {
   techArr.push([tech, tech.length])
}
console.log(techArr);

// An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
let acr = '';
for (const mern of mernStack) {
    // console.log(mern.slice(0, 1))
    acr += mern[0]
}
console.log(acr);

// Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
const tech = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
for (let i = 0; i < tech.length; i++){
    console.log(tech[i]);
}

for (const t of tech) {
    console.log(t);
}

// This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
let fruitArr = [];
const fruit = ['banana', 'orange', 'mango', 'lemon']
for (let i = fruit.length -1; i >= 0; i--){
    fruitArr.push(fruit[i]);
}
console.log(fruitArr);

// Print all the elements of array as shown below.
// Printing out the elements using two for loops
const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
]
for (const stack of fullStack) {
    console.log(stack);
    for (const i of stack) {
        console.log(i);
    }
}
// Printing out the elements using flat method
let fullStacks = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
].flat();

for (let i = 0; i < fullStacks.length; i++){
    console.log(fullStacks[i]);
}

/*****************************************Level 3************************************************** */
// Copy countries array(Avoid mutation)
let newCountriesArr = countries.slice(0)
console.log(newCountriesArr);

// Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries
let copyCountries = countries.slice(0);
let sortedCountries = copyCountries.sort();
console.log(sortedCountries);

// Sort the webTechs array and mernStack array
let copyWebTechs = webTechs.slice(0);
let sortedWebTechs = copyWebTechs.sort();
console.log(sortedWebTechs);

let copyMernStack = mernStack.slice(0);
let sortedMernStack = copyMernStack.sort();
console.log(sortedMernStack);

// Extract all the countries contain the word 'land' from the countries array and print it as array
let landArr = [];
for (const country of countries) { 
    if (country.includes('land')) {
        landArr.push(country)
    } 
}
console.log(landArr);

// Find the country containing the hightest number of characters in the countries array
let highestCount = [];
for (const i of countries) {
    console.log(highestCount.push(i.length))
}
console.log(highestCount);


for (const i of countries) {
    if (i.length == Math.max(...highestCount)) {
        console.log(i);
    }
}

// Extract all the countries containing only four characters from the countries array and print it as array
let fourChars = [];
for (const i of countries) {
    if (i.length == 4) {
       fourChars.push(i);
   }
}
console.log(fourChars);

// Extract all the countries containing two or more words from the countries array and print it as array
let twoChars = [];
for (const i of countries) {
    if (i.length >= 2) {
        twoChars.push(i);
    }
}
console.log(twoChars); 

// Reverse the countries array and capitalize each country and stored it as an array
let reverseCountry = [];
for (let i = countries.length - 1; i >= 0; i-- ) {
    reverseCountry.push(countries[i].toUpperCase())
}
console.log(reverseCountry);