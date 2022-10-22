// Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.

const firstName = 'Damilola', lastName = 'Ogungbenro', country = 'Nigeria', city = 'Lagos', age = '20 years', isMarried = true, year = 2022;
console.log(typeof firstName, typeof lastName, typeof country, typeof city, typeof age, typeof isMarried, typeof year);

// Check if type of '10' is equal to 10
console.log(typeof '10' == 10);

// Check if parseInt('9.8') is equal to 10
console.log(typeof parseInt('9.8') == 10);

// Write three JavaScript statement which provide truthy value.
let str = 'Blessed';
let num = -3;
let isExciting = true;

// Write three JavaScript statement which provide falsy value.
const zero = 0;
const str2 = '';
const nothing = null;
// Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

console.log(4 > 3); //true, because 4 is greater than 3
console.log(4 >= 3); // true, because 4 is greater than 3
console.log(4 < 3); //false, because 4 is greater than 3
console.log(4 <= 3); //true, because 4 is greater than 3
console.log(4 == 4); //true, equivalent
console.log(4 === 4); //true, exactly the same
console.log(4 != 4); // false, because 4 is equivalent to 4
console.log(4 !== 4); //false, because 4 is exactly the same as 4
console.log(4 != '4'); //false, because this compares only value
console.log(4 == '4'); //true, compare only value
console.log(4 === '4'); //false, compare both value and data type

// Find the length of python and jargon and make a falsy comparison statement.
let py = 'python';
let jg = 'jargon';
let pyLength = py.length;
let jgLength = jg.length;
console.log(pyLength !== jg.length);
// Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

console.log(4 > 3 && 10 < 12); //true && true -> true
console.log(4 > 3 && 10 > 12); //true && false -> false
console.log(4 > 3 || 10 < 12); //true  || true -> true
console.log(4 > 3 || 10 > 12); //true  || false -> true
console.log(!(4 > 3)); // false
console.log(!(4 < 3)); //true
console.log(!(false)); //true
console.log(!(4 > 3 && 10 < 12)); // false
console.log(!(4 > 3 && 10 > 12)); // true
console.log(!(4 === '4')); //true
// There is no 'on' in both dragon and python
console.log(!(py.includes('on') === jg.includes('on')));

// Use the Date object to do the following activities
// What is the year today?
const date = new Date();
console.log(date.getFullYear());
// What is the month today as a number?
console.log(date.getMonth() + 1);
// What is the date today?
console.log(date);
// What is the day today as a number?
console.log(date.getDate());
// What is the hours now?
console.log(date.getHours());
// What is the minutes now?
console.log(date.getMinutes());
// Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log(date.getTime());

/********************************Level 2
*********************************/

// Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

// let base = prompt('Enter Base of the Triangle:');
// let height = prompt('Enter Height of the Triangle:');
// let area = 1/2 * base * height;
// alert(`The area of the Triangle is ${area}`);

// Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

// let sideA = prompt('Enter Side A of the Triangle:');
// let sideB = prompt('Enter Side B of the Triangle:');
// let sideC = prompt('Enter Side C of the Triangle:');
// let perimeterOfTriangle = sideA + sideB + sideC;
// alert(`The perimeter of the Triangle is ${perimeterOfTriangle}`);

// Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))

// let length = prompt('Enter the length of the rectangle:');
// let width = prompt('Enter the width of the rectangle:');
// let perimeterOfRectangle = 2 * (length * width);
// let areaOfRectangle = length * width;
// alert(`The perimeter of the Rectangle is ${perimeterOfRectangle}`);
// alert(`The area of the Rectangle is ${areaOfRectangle}`);
// Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

// let r = prompt('Enter the radius of the circle');
// const pi = 3.14;
// let areaOfCircle = pi * (r**2);
// let c = 2 * pi * r;
// alert(`The area of the Circle is ${areaOfCircle}`);
// alert(`The circumference of the Circle is ${c}`);

// Calculate the slope, x-intercept and y-intercept of y = 2x -2?

// y = mc + b, where m => slope, b => y-intercept
let m1 = 2;
let b = -2;
let c = -b/m1;
console.log(c);

// Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)

let y2 = 10;
let y1 = 2;
let x2 = 6;
let x1 = 2;
let m2 = (y2-y1)/(x2-x1);
console.log(m2);

// Compare the slope of above two questions.

console.log(m1 === m2);

// Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.

let x = -3;
let y = x**2 + 6 * x + 9;
console.log(y);


// Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

// let hrs = prompt('Enter number of hours:');
// let rate = prompt('Enter the rate per hour:');
// let pay = hrs * rate;
// alert (`Your pay is ${pay}`);

// If the length of your name is greater than 7 say, your name is long else say your name is short.

if(firstName.length > 7){
    console.log('My name is long');
}else {
    console.log('My name is short')
}

// Compare your first name length and your family name length and you should get this output.

if(firstName.length > lastName.length){
    console.log('Your first name, Damilola, is longer than your last name, Ogungbenro');
}else{
    console.log('Your last name, Ogungbenro, is longer than your first name, Damilola');
}

// Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.

let myAge = 25;
let yourAge = 250;
let ageDiff = yourAge-myAge;
console.log(`You are ${ageDiff} years older than me.`);


// Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

// let userYear = prompt('Enter birth year:');
// let current = new Date();
// let userAge = current.getFullYear() - Number(userYear);
// console.log(
//     userAge >= 18 ? `You are ${userAge}. You are old enough to drive
//     ` : `You are ${userAge}. You will be allowed to drive after ${18-userAge} years.
//     `);

// Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. 

// let numYears = prompt('Enter the number of years you want to live:');
// alert(`You can live ${3600 * 24 * 365 * numYears} seconds`);

// Create a human readable time format using the Date time object
const calendar = new Date();
let yr = calendar.getFullYear();
let mnth = calendar.getMonth();
let dt = calendar.getDate();
let hrs = calendar.getHours();
let mins = calendar.getMinutes();

//i.YYYY-MM-DD HH:mm
console.log(`${yr}-${mnth + 1}-${dt} ${hrs}:${mins}`);

//ii.DD-MM-YYYY HH:mm
console.log(`${dt}-${mnth + 1}-${yr} ${hrs}:${mins}`);

//iii.DD/MM/YYYY HH:mm
console.log(`${dt}/${mnth + 1}/${yr} ${hrs}:${mins}`);

/*********************************Level 3********************************************/

// Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
// YYY-MM-DD HH:mm eg. 20120-01-02 07:05

