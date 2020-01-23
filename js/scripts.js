$(document).ready(function(){
    $("#input-form").submit(function(event){
      event.preventDefault();
      
      var input = $("#user-input").val().split("");
      //console.log(input)
      var inputcombined = input.join("")
     // console.log(inputcombined)
      var chars = [];

      var vowels = /[aeiou]/i;
      var consonants = /[bcdfghjklmnpqrstvwxyz]/i;
      var qu = /q.*?u/i;

     //for (var i = 0; i < input.length; i++) {
        if (input.length === 1 && input[0].match(vowels)) {
          chars.push(input[0] + "ay");
        } else if (input.length > 1 && input[0].match(vowels)) {
          chars.push(input.join("") + "way")
        } else if (input.length > 1 && input[0].match(consonants)) {
          if (inputcombined.match(qu)) {
            var indexOfFirstQU = inputcombined.match(qu).index;
            console.log(indexOfFirstQU)
            var splicedOut = input.splice(0, indexOfFirstQU+2);
            console.log(splicedOut);
            chars.push(input.join("") + splicedOut.join("") + "ay");
          } else {
            for (var i = 0; i < input.length; i++) {
              if (input[i].match(vowels)) {
                var indexOfFirstVowel = input.indexOf(input[i]);
                console.log(indexOfFirstVowel);
                var splicedOut = input.splice(0, indexOfFirstVowel);
                console.log(splicedOut);
                chars.push(input.join("") + splicedOut.join("") + "ay");
                break;
              } 
            }
          }
        } 
          
     //} 

     // console.log(chars); 


      


    

      $("#result").text(chars.join(','))
    
    });
});