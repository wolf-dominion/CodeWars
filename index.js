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