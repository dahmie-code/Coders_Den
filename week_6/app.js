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
    'Kenya'
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
    for(j = 2; j<=100; j++){
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

