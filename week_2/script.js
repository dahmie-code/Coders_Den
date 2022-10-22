// Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let challenge = '30 Days Of JavaScript';

// Print the string on the browser console using console.log()
console.log(challenge)

// Print the length of the string on the browser console using console.log()
console.log(challenge.length)

// Change all the string characters to capital letters using toUpperCase() method
let capitalLetters = challenge.toUpperCase();
console.log(capitalLetters);

// Change all the string characters to lowercase letters using toLowerCase() method
let smallLetters = challenge.toLowerCase();
console.log(smallLetters);

// Cut (slice) out the first word of the string using substr() or substring() method

let cutStr = challenge.substring(0, 2);
console.log(cutStr);

// Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
let sliceOut = challenge.slice(2);
console.log(sliceOut);

// Check if the string contains a word Script using includes() method
let inclusion = challenge.includes('Script');
console.log(inclusion);

// Split the string into an array using split() method
let splt = challenge.split();
console.log(splt);

// Split the string 30 Days Of JavaScript at the space using split() method
let cut = challenge.split(' ');
console.log(cut);

// 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let org = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(org.split(','));

// Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
let progName = challenge.replace('JavaScript', 'Python');
console.log(progName);

// What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
let charIndex = challenge.charAt(15);
console.log(charIndex);

// What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
let chaCode = challenge.charCodeAt(8);
console.log(chaCode);

// Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
let indices = challenge.indexOf('a');
console.log(indices);

// Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.

let last = challenge.lastIndexOf('a');
console.log(last);

// Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

let sentenc = 'You cannot end a sentence with because because because is a conjunction';

console.log(sentenc.indexOf('because'));

// Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

let sentence1 = 'You cannot end a sentence with because because because is a conjunction';

console.log(sentence1.lastIndexOf('because'));

// Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

let srch = sentence1.search(/because/gi);
console.log(srch);

// Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.

let trm = ' 30 Days Of JavaScript ';
console.log(trm.trim());


// Use startsWith() method with the string 30 Days Of JavaScript and make the result true

let start = challenge.startsWith('30');
console.log(start);

// Use endsWith() method with the string 30 Days Of JavaScript and make the result true

let end = challenge.endsWith('JavaScript');
console.log(end);

// Use match() method to find all the a’s in 30 Days Of JavaScript

let mtch = challenge.match(/a/gi);
console.log(mtch);

// Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'

let conc = '30 Days of';
console.log(conc.concat(' ', 'JavaScript'));

// Use repeat() method to print 30 Days Of JavaScript 2 times

let rpt = challenge.repeat(2);
console.log(rpt);


// ==========================Exercise: Level 2 ===============================//
// Using console.log() print out the following statement:

console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");

// Using console.log() print out the following quote by Mother Teresa:

console.log('"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead."');

// Check if typeof '10' is exactly equal to 10. If not make it exactly equal.

console.log(typeof '10' === 10);
console.log(Number('10') === 10);

// Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.

console.log(parseFloat('9.8') === 10);
let num = parseFloat('9.8');
console.log(Math.round(num) === 10);

// Check if 'on' is found in both python and jargon

console.log('python'.includes('on') && 'jargon'.includes('on'));

// I hope this course is not full of jargon. Check if jargon is in the sentence.

let txt ='I hope this course is not full of jargon.';
console.log(txt.includes('jargon'));

// Generate a random number between 0 and 100 inclusively.

console.log(Math.floor(Math.random() * 100));

// Generate a random number between 50 and 100 inclusively.

console.log( Math.floor(Math.random()*(100-50))+50
);

// Generate a random number between 0 and 255 inclusively.

console.log(Math.floor(Math.random() * 255));

// Access the 'JavaScript' string characters using a random number.

const word = "JavaScript";
console.log(word.charAt(Math.floor(Math.random() * word.length)));

// Use console.log() and escape characters to print the following pattern.

console.log('1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125');

// Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'

const phrase = 'You cannot end a sentence with because because because is a conjunction';
console.log(phrase.substr(30, 24));

// ==========================Exercise: Level 3 ===============================//

// 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.

const str = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
console.log((str.match(/love/gi)).length)

// Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

const sentMtch = 'You cannot end a sentence with because because because is a conjunction';
console.log((sentMtch.match(/because/gi)).length);

// Clean the following text and find the most frequent word (hint, use replace and regular expressions).

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

let newSentence = sentence.replace(/[^a-zA-Z0-9.?, ]/g, '');
console.log(newSentence);
console.log(newSentence.match(/i/gi).length);
console.log(newSentence.match(/am/gi).length);
console.log(newSentence.match(/teacher/gi).length);
console.log(newSentence.match(/a/gi).length);
console.log(newSentence.match(/and/gi).length);
console.log(newSentence.match(/love/gi).length);
console.log(newSentence.match(/teaching/gi).length);
console.log(newSentence.match(/there/gi).length);
console.log(newSentence.match(/is/gi).length);
console.log(newSentence.match(/nothing/gi).length);
console.log(newSentence.match(/as/gi).length);
console.log(newSentence.match(/more/gi).length);
console.log(newSentence.match(/rewarding/gi).length);
console.log(newSentence.match(/educating/gi).length);
console.log(newSentence.match(/empowering/gi).length);
console.log(newSentence.match(/people/gi).length);
console.log(newSentence.match(/found/gi).length);
console.log(newSentence.match(/interesting/gi).length);
console.log(newSentence.match(/than/gi).length);
console.log(newSentence.match(/any/gi).length);
console.log(newSentence.match(/other/gi).length);
console.log(newSentence.match(/jobs/gi).length);
console.log(newSentence.match(/does/gi).length);
console.log(newSentence.match(/this/gi).length);
console.log(newSentence.match(/motivate/gi).length);
console.log(newSentence.match(/you/gi).length);
console.log(newSentence.match(/to/gi).length);
console.log(newSentence.match(/be/gi).length);
console.log(newSentence.match(/30DaysOfJavaScript/gi).length);
console.log(newSentence.match(/also/gi).length);
console.log(newSentence.match(/the/gi).length);
console.log(newSentence.match(/result/gi).length);
console.log(newSentence.match(/of/gi).length);
console.log("The most frequent word in the sentence is 'a' occurring" + ' ' + newSentence.match(/a/gi).length + ' ' + "times in the sentence.");






























// Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

const extract = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';

let allIncome = extract.match(/\d+/g);
console.log(Number(allIncome[0]) + Number(allIncome[1]) + Number(allIncome[2]));


