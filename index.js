// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". 
//You have function with one side of the DNA (string, except for Haskell); 
//you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).
// More similar exercise are found here http://rosalind.info/problems/list-view/ (source)
// DNAStrand ("ATTGC") return "TAACG"
// DNAStrand ("GTAT") return "CATA" 

// Test.assertEquals(DNAStrand("AAAA"),"TTTT","String AAAA is");
// Test.assertEquals(DNAStrand("ATTGC"),"TAACG","String ATTGC is");
// Test.assertEquals(DNAStrand("GTAT"),"CATA","String GTAT is");

function DNAStrand(dna){

    let complement = []
    
    for(let i = 0; i < dna.length; i++){
        if (dna[i] == "A"){
            complement.push("T")
        }
        if (dna[i] == "T"){
            complement.push("A")
        }
        if (dna[i] == "C"){
            complement.push("G")
        }
        if (dna[i] == "G"){
            complement.push("C")
        }
    }
    return complement.join("")
  }

//   Write a function that takes an integer as input, 
//   and returns the number of bits that are equal to one 
//   in the binary representation of that number. 
//   You can guarantee that input is non-negative.

//   Example: The binary representation of 
//   1234 is 10011010010, so the function should return 5 
//   in this case

  var countBits = function(n) {
    // Program Me
  };

  // remove wub from strings to return the sentence

  function songDecoder(song){
    song = song.replace(/WUB/g, " ")
    return song.replace(/\s+/g,' ').trim();

  }

  // Move the first letter of each word to the end of it, 
  // then add "ay" to the end of the word. 
  // Leave punctuation marks untouched.

  function pigIt(str){
    strArray = str.split(" ")

    for(let i=0; i < strArray.length;i+= 1){
        let endLetter = strArray[i][0]
        strArray[i] = strArray[i].slice(1, strArray[i].length) + endLetter + "ay"
    }

    strArray[strArray.length-1][0] === "!" ? strArray[strArray.length-1] = strArray[strArray.length-1][0]: null
    strArray[strArray.length-1][0] === "?" ? strArray[strArray.length-1] = strArray[strArray.length-1][0]: null

    return strArray.join(" ")
  }

// There must be a function for each number from 0 (“zero”) to 9 (“nine”)
// There must be a function for each of the following mathematical operations:

// plus, minus, times, dividedBy (divided_by in Ruby)

// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand.

// Divison should be integer division, e.g eight(dividedBy(three()))/eight(divided_by(three)) should return 2, not 2.666666…


var n = function(digit) {
  return function(op) {
    return op ? Math.floor(op(digit)) : digit;
  }
};

var zero = n(0);
var one = n(1);
var two = n(2);
var three = n(3);
var four = n(4);
var five = n(5);
var six = n(6);
var seven = n(7);
var eight = n(8);
var nine = n(9);
 
function plus(r) { 
  return function(l) { 
    return l + r; 
  }; 
}
function minus(r) { 
  return function(l) { 
    return l - r; 
  }; 
}
function times(r) { 
  return function(l) { 
    return l * r; 
  }; 
}
function dividedBy(r) { 
  return function(l) { 
    return l / r; 
  }; 
}

// Write a function that takes in a string of one or more words, 
// and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). 
// Strings passed in will consist of only letters and spaces. 
// Spaces will be included only when more than one word is present.

// Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
// spinWords( "This is a test") => returns "This is a test" 
// spinWords( "This is another test" )=> returns "This is rehtona test"

function spinWords(str){
  let strArray = str.split(" ");
  let modifiedArray = [];

  for(let i=0; i < strArray.length;i+= 1){
    
    if(strArray[i].length > 4){
      let word = strArray[i].split("");
      let modifiedWord = [];
      for(let y=word.length-1; y >= 0;y--){
        modifiedWord.push(word[y]);
      }
      modifiedArray.push(modifiedWord.join(""));
    }
    else {
      modifiedArray.push(strArray[i]);
    }
  }
  return modifiedArray.join(" ");
}

// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive 
// alphabetic characters and numeric digits that occur more than once in the input string. 
// The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

function duplicateCount(text){
  text = text.toLowerCase();
  let count = {};
  let array = text.split("");

  for(let i=0; i < array.length; i++){
    for(let y=0; y < array.length;y++){
      if(array[i] === array[y]){
        if (count[array[i]]=== 0) {
          count[array[i]]+= 1;
        }
        else if(!count[array[i]]){
          count[array[i]] = 0
          }
      }
    }
  }

  let results = 0;

for (var key in count) {
    if (count.hasOwnProperty(key)) {
        if(count[key] > 0){
        	results++;
        }
    }
}
  return results;
  }
  
  // Given the string representations of two integers, 
  // return the string representation of the sum of those integers.
  // For example:
  // sumStrings('1','2') // => '3'
  // A string representation of an integer will contain no 
  // characters besides the ten numerals "0" to "9".

function sumStrings(a, b){
  let sum = '';
  let carry = 0;

  if(a.length < b.length){
    while(a.length != b.length){
      a = '0' + a;
    }
  }
  if(a.length > b.length){
    while(a.length != b.length){
      b = '0' + b;
    }
  }

  for (let i = a.length-1; i >= 0; i--){
    const aNum = +a[i];
    const bNum = +b[i];
    const innerSum = aNum + bNum + carry;

    let placeNum = innerSum % 10;

    if(innerSum > 9){
      placeNum = innerSum % 10;
      carry = Math.floor(innerSum / 10); 
    } else {
      carry = '';
    }

    sum = placeNum + sum;

  }
  sum = carry + sum;

  while (sum[0] == '0'){
    sum = sum.slice(1);
  }
  return sum;
}

// Write a function, which takes a non-negative integer (seconds) 
// as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

function humanReadable(num) {

  let hours = num >= 60 ? padNum(Math.floor(num/3600)) : '00';
  let minutes = num >= 60 ? padNum(Math.floor((num % 3600)/60)) : '00';
  let seconds = num < 60 ? padNum(num) : padNum(Math.floor((num % 3600)%60));

  function padNum(num){
    return num < 10 ? `0${num}` : `${num}`
  }

  return `${hours}:${minutes}:${seconds}`

}