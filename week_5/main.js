// import { countries } from './countries';
// import { webTechs } from './web_techs';
/****************************Level 1******************************/

import { countries } from "./countries";

// Declare an empty array;
const array = [];

// Declare an array with more than 5 number of elements
const arrElement = ['Bob', 'Bank','Tom', 'Lagos', 'mango', 'Rose', 'Claire', 'Holla', 'Hello'];

// Find the length of your array
console.log(arrElement.length);

// Get the first item, the middle item and the last item of the array
console.log(arrElement[0]);
console.log(arrElement[4]);
const lastArr = arrElement.length -1
lastItem = arrElement[lastArr]
console.log(lastItem);

// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5

const mixedDataTypes = ['Damilola', 20, true, {country: 'Nigeria', city: 'Lagos'}, [1,2,3,4,5], 5.25, 'JS'];

// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon

const itCompanies =['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle','Amazon'];
// Print the array using console.log()
console.log(itCompanies);

// Print the number of companies in the array
console.log(itCompanies.length);

// Print the first company, middle and last company
console.log(itCompanies[0]);
console.log(itCompanies[3]);
console.log(itCompanies[6]);

// Print out each company
console.log(itCompanies[0]);
console.log(itCompanies[1]);
console.log(itCompanies[2]);
console.log(itCompanies[3]);
console.log(itCompanies[4]);
console.log(itCompanies[5]);
console.log(itCompanies[6]);

// Change each company name to uppercase one by one and print them out

console.log(itCompanies[0].toUpperCase());
console.log(itCompanies[1].toUpperCase());
console.log(itCompanies[2].toUpperCase());
console.log(itCompanies[3].toUpperCase());
console.log(itCompanies[4].toUpperCase());
console.log(itCompanies[5].toUpperCase());
console.log(itCompanies[6].toUpperCase());

// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.

const itSentence = itCompanies.slice(0);
const itSplice = itSentence.splice(6, 0, 'and');
const itString = itSentence.join(', ');
const concat = itString.concat(' are big IT companies.')
console.log(concat);

// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
if(itCompanies.includes('Amazon')){
    console.log('Amazon');
} else {
    console.log('not found');
}

// Filter out companies which have more than one 'o' without the filter method
for(let i =0; i < itCompanies.length; i++){
    let itCheck = itCompanies[i].match(/o/gi) || [];
    console.log(itCheck);
    if(itCheck.length > 1 ){
        console.log(itCompanies[i]);
    } else {
        console.log("it does not contain more than one 'o'");
    }
}

// Sort the array using sort() method
console.log(itCompanies.sort());

// Reverse the array using reverse() method
console.log(itCompanies.reverse());

// Slice out the first 3 companies from the array
console.log(itCompanies.slice(0, 3));

// Slice out the last 3 companies from the array
console.log(itCompanies.slice(-3));

// Slice out the middle IT company or companies from the array
console.log(itCompanies.slice(itCompanies.indexOf(itCompanies[Math.floor(itCompanies.length / 2)]), 4));

// Remove the first IT company from the array
console.log(itCompanies.shift());

// Remove the middle IT company or companies from the array
console.log(itCompanies.splice(2, 1));

// Remove the last IT company from the array
console.log(itCompanies.pop());

// Remove all IT companies
console.log(itCompanies.splice());

/**********************************Level 2************************************************* */

// First remove all the punctuations and change the string to array and count the number of words in the array

let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
let wordReplace = text.replace(/[^a-zA-Z0-9 ]/g, '');
let words = wordReplace.split(' ');
console.log(words)
console.log(words.length)

// In the following shopping cart add, remove, edit items

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// add 'Meat' in the beginning of your shopping cart if it has not been already added
console.log(shoppingCart.unshift('Meat'));

// add Sugar at the end of you shopping cart if it has not been already added
console.log(shoppingCart.push('Sugar'));

// remove 'Honey' if you are allergic to honey
console.log(shoppingCart.indexOf('Honey'));
console.log(shoppingCart.splice(4, 1));

// modify Tea to 'Green Tea'
console.log(shoppingCart.indexOf('Tea'));
console.log(shoppingCart[3]= 'Green Tea');;
console.log(shoppingCart);

// In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
// countries.indexOf('Ethiopia') ? console.log (countries[4] = 'ETHIOPIA') : console.log(countries.push('Ethiopia'));

//   In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
// webTechs.indexOf('Sass') !== -1 ? console.log('Sass is a CSS preprocess'): 
//         console.log(webTechs.push('Sass'));
// console.log(webTechs);

// Concatenate the following two variables and store it in a fullStack variable.

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

/**********************************************Level 3*********************************************************/

// The following is an array of 10 students ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// Sort the array and find the min and max age
console.log(ages.sort());

// Find the min age using the Math function and spread operator.
console.log(Math.min(...ages));

// Finding the min age using loop instead
let minValue = ages[0];
for(let i = 1; i < ages.length; i++){
    if(ages[i] < minValue){
        minValue = ages[i];
    }
}
console.log(minValue);

// Find the max age using the Math function and spread operator.
console.log(Math.max(...ages));

// Finding the max age using loop instead
let maxValue = ages[0];
for(let i = 1; i < ages.length; i++){
    if(ages[i] > maxValue){
        maxValue = ages[i];
    }
}
console.log(maxValue);

// Find the median age(one middle item or two middle items divided by two)
const sorting = ages.sort();
const mid = Math.floor(ages.length / 2);
ages.length % 2 !== 0 ? console.log(sorting[mid]) : console.log((sorting[mid -1] + sorting[mid]) / 2);


// Find the average age(all items divided by number of items)
let sum = 0;
for(let i = 0; i<ages.length; i++){
    sum += ages[i];
}
let averageValue = sum/ages.length
console.log(averageValue);
// Find the range of the ages(max minus min)
console.log(maxValue - minValue);
// Compare the value of (min - average) and (max - average), use abs() method
console.log(Math.abs(minValue - averageValue));
console.log(Math.abs(maxValue - averageValue)); 
// Slice the first ten countries from the countries array
console.log(countries.slice(10));
// Find the middle country(ies) in the countries array
const arrange = countries.sort();
const middleCountry = Math.floor(countries.length / 2);
countries.length % 2 !== 0 ? console.log(arrange[middleCountry]) : console.log((arrange[middleCountry -1] + arrange[middleCountry]) / 2);
// Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.

let firstHalf;
let secondHalf;
if(countries.length % 2 === 0) {
    firstHalf = countries.slice(0, countries.length / 2);
    secondHalf  = countries.slice(0, countries.length / 2);
    console.log(secondHalf);
}else{
    firstHalf = countries.slice(0, Math.ceil(countries.length / 2));
    secondHalf = countries.slice(0, Math.ceil(countries.length / 2))
}
console.log(firstHalf, secondHalf);