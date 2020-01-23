$(document).ready(function(){
    $("#input-form").submit(function(event){
      event.preventDefault();
      
      var original = $("#user-input").val()
      var inputPerWords = $("#user-input").val().split(" ")
      var inputPerChar = $("#user-input").val().split("");
      console.log(original)
      console.log(inputPerWords)
      console.log(inputPerChar)
      var inputcombined = inputPerChar.join("")
     // console.log(inputcombined)
      var chars = [];

      var vowels = /[aeiou]/i;
      var consonants = /[bcdfghjklmnpqrstvwxyz]/i;
      var qu = /q.*?u/i;

      if (inputPerWords.length > 1){
        
        for (var i = 0; i < inputPerWords.length; i++) {
          console.log(inputPerWords[1]);
          var inputPerLetter = inputPerWords[i].split("");
          console.log(inputPerLetter[0]);
          var inputPerLetterCombined = inputPerLetter.join("");
          console.log(inputPerLetterCombined);

          // code below is to check a sentence
          if (inputPerLetter.length === 1 && inputPerLetter[0].match(vowels)) { // checks if there's only 1 letter in 1 word
            chars.push(inputPerLetter[0] + "Ay");
          } else if (inputPerLetter.length > 1 && inputPerLetter[0].match(vowels)) { // checks if the beginning of 1 word is 1 vowel
            chars.push(inputPerLetter.join("") + "Way")
          } else if (inputPerLetter.length > 1 && inputPerLetter[0].match(consonants)) { // checks if the beginning of 1 word is 1 consonant
            if (inputPerLetterCombined.match(qu)) { // if the beginning of 1 word is 1 consonant, check if there is any "qu"
              var indexOfFirstQU = inputPerLetterCombined.match(qu).index;
              console.log(indexOfFirstQU)
              var splicedOut = inputPerLetter.splice(0, indexOfFirstQU+2);
              splicedOut[0] = splicedOut[0].toUpperCase();
              console.log(splicedOut)
              chars.push(inputPerLetter.join("") + splicedOut.join("") + "ay");
            } else { // if the beginning of 1 word is 1 consonant, then:
              for (var j = 0; j < inputPerLetter.length; j++) { // find 1 vowel and slice from the beginning until the vowel's position
                if (inputPerLetter[j].match(vowels)) {
                  var indexOfFirstVowel = inputPerLetter.indexOf(inputPerLetter[j]);
                  console.log(indexOfFirstVowel);
                  var splicedOut = inputPerLetter.splice(0, indexOfFirstVowel);
                  console.log(splicedOut);
                  splicedOut[0] = splicedOut[0].toUpperCase();
                  chars.push(inputPerLetter.join("") + splicedOut.join("") + "ay");
                  console.log(chars);
                  break;
                } 
              }
            }
          } 
        }
       
      // code below is to check for 1 leter or 1 word only  
      } else {
        if (inputPerChar.length === 1 && inputPerChar[0].match(vowels)) {
          chars.push(inputPerChar[0] + "Ay");
        } else if (inputPerChar.length > 1 && inputPerChar[0].match(vowels)) {
          chars.push(inputPerChar.join("") + "Way")
        } else if (inputPerChar.length > 1 && inputPerChar[0].match(consonants)) {
          if (inputcombined.match(qu)) {
            var indexOfFirstQU = inputcombined.match(qu).index;
            console.log(indexOfFirstQU)
            var splicedOut = inputPerChar.splice(0, indexOfFirstQU+2);
            splicedOut[0] = splicedOut[0].toUpperCase();
            console.log(splicedOut)
            chars.push(inputPerChar.join("") + splicedOut.join("") + "ay");
          } else {
            for (var k = 0; k < inputPerChar.length; k++) {
              if (inputPerChar[k].match(vowels)) {
                var indexOfFirstVowel = inputPerChar.indexOf(inputPerChar[k]);
                console.log(indexOfFirstVowel);
                var splicedOut = inputPerChar.splice(0, indexOfFirstVowel);
                console.log(splicedOut);
                splicedOut[0] = splicedOut[0].toUpperCase();
                chars.push(inputPerChar.join("") + splicedOut.join("") + "ay");
                break;
              } 
            }
          }
        } 
      }
     //} 

     // console.log(chars); 


      


    

      $("#result").text(chars.join(' '))
    
    });
});