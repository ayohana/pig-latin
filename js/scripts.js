$(document).ready(function(){
    $("#fortune_survey").submit(function(event){
      event.preventDefault();
   
      sum1 = 0
      sum2 = 0
      

      $("input:checkbox[name=negativeAffects]:checked").each(function(){
        var affects = parseInt($(this).val());
        sum1 = sum1 + affects
        alert(affects)
        
        });

      $("input:checkbox[name=positive]:checked").each(function(){
        var affects = parseInt($(this).val());
        sum2 = sum2 + affects
         
        });

                                                         

    sum = sum1 + sum2 
    
    if (sum >= 10) {
        $("#extreme").show();
    } else if (sum >= 6|| sum <10) {
        $("#medium").show();
    } else {
        $("#low").show();
    }

    
});
    
});