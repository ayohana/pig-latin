$(document).ready(function(){
    $("#input-form").submit(function(event){
      event.preventDefault();
      
      var input = $("#user-input").val().split("");
      //console.log(input)

      var chars = [];

      var vowels = /[aeiou]/i;
      var consonants = /[bcdfghjklmnpqrstvwxyz]/i;

     //for (var i = 0; i < input.length; i++) {
        if (input.length === 1 && input[0].match(vowels)) {
          chars.push(input[0] + "ay");
        } else if (input.length > 1 && input[0].match(vowels)) {
          chars.push(input.join("") + "way")
        } else if (input.length > 1 && input[0].match(consonants)) {
          for (var i = 0; i < input.length; i++) {
            if (input[i].match(vowels)) {
              var indeoxOfFirstVowel = input.indexOf(input[i]);
              console.log(indeoxOfFirstVowel);
              break;
            } 
          }
          // var splicedOut = input.splice(0, 1);
          // chars.push(input.join("") + splicedOut + "ay");
        } 
            

          
     //} 

     // console.log(chars); 


      


    

      $("#result").text(chars.join(','))
    
    });
});