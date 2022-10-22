/***************************************Level 1*******************************************/

// Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

let userYear = prompt('Enter birth year:');
let current = new Date();
let userAge = current.getFullYear() - Number(userYear);
console.log(
    userAge >= 18 ? `You are ${userAge}. You are old enough to drive
    ` : `You are ${userAge}. You will be allowed to drive after ${18-userAge} years.
    `);

// Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

let yourAge = prompt('How old are you?');
let myAge = prompt('Enter my age:');
let ageDiff =  yourAge - myAge;
let ageDiff2 = myAge - yourAge;

if (yourAge >= myAge) {
    console.log(`You are ${ageDiff} years older than me.`);}
    else{
    console.log(`I am ${ageDiff2} years older than you`);
}

// If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

// using if else
 let a = 4;
 let b = 3;

 if (a > b) {
    console.log(`${a} is greater than ${b}`)
 }else{
    console.log(`${a} is less than ${b}`)

 }
// ternary operator.
a > b ? `${a} is greater than ${b}` : `${a} is less than ${b}`;

// Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

let num = prompt('Enter a number:');
if(num % 2 == 0){
    console.log(`${num} is an even number!`);
} else {
    console.log(`${num} is an odd number!`);
}

/**********************************Level 2*************************************************/

// Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F

let grade = prompt('Enter your grade:');
switch (true){
    case grade >= 80 && grade <= 100:
    console.log('You are have A grade');
        break;
    case grade >= 70 && grade <= 89:
        console.log('You are have B grade');
        break;
    case grade >= 60 && grade <= 69:
        console.log('You are have C grade');
        break;
    case grade >= 50 && grade <= 59:
        console.log('You are have D grade');
        break;
    case grade >= 0 && grade <= 49:
        console.log('You are have F grade');
        break;
    default:
        console.log('You do not have a grade');
}

// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer

let newDate = new Date();
let month = newDate.getMonth() + 1;
console.log(month)
if (month <= 2 && month == 12) {
    console.log('the season is Winter');
}else if(month >= 3 && month <= 5){
    console.log('the season is Spring');
}else if(month >=6 && month <= 8){
    console.log('the season is Summer');
}else{
    console.log('the season is Autumn');
}

// Check if a day is weekend day or a working day. Your script will take day as an input.

let day = prompt('What day of the week is today?');
let weeknd = day.toLowerCase();
let weekday = day.toLowerCase();
if (weeknd == 'saturday' || weeknd == 'sunday'){
        console.log(`${weeknd} is a weekend`);}
    else{
        console.log(`${weekday} is a weekday`)
}


/***************************************Level 3************************************************/

// Write a program which tells the number of days in a month.
let mont = prompt('Enter a month:');
let mthInput = mont.toLowerCase();
switch (true) {
  case (mthInput == "april" ||
        mthInput == "june" ||
        mthInput == "september" ||
        mthInput == "november"):
    console.log(`${mthInput} has 30 days`);
    break;
  case (mthInput == "january" ||
        mthInput == "march" ||
        mthInput == "may" ||
        mthInput == "july" ||
        mthInput == "august" ||
        mthInput == "october" || 
        mthInput == "december"):
    console.log(`${mthInput} has 31 days`);
    break;
  case (mthInput == "february"):
    console.log(`${mthInput} has 28 days`);
    break;
  default:
   console.log("It is not a valid month");
}