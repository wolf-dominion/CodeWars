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
    // turn string of words into array of words w punctuation in its own index
    let regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;

    strArray = str.split(" ")

    for(let i=0; i < strArray.length;i+= 1){
        let endLetter = strArray[i][0]
        if (strArray[i][strArray[i].length] != "!" || strArray[i][strArray[i].length] != "?"){
          strArray[i] = strArray[i].slice(1, strArray[i].length) + endLetter + "ay"
        }
    }

    return strArray.join(" ")

    // move first letter to end + ay
  }