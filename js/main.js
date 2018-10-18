 $(document).ready(function() {
     $(".effect-text").fadeIn(2000, function() {
         $(".effect-text").fadeOut(2000, function() {
             $(".effect-text").text("6 days to go");
             $(".effect-text").fadeIn(2000, function() {
                 $(".effect-text").fadeOut(2000, function() {
                     $(".effect-text").css("font-size", "27px")
                     $(".effect-text").css("font-weight", "300")
                     $(".effect-text").text("#ItsGonnaBeSpecial");
                     $(".effect-text").fadeIn(2000, function() {
                         $(".effect-text").fadeOut(2000, function() {
                             $(".effect-text").css("margin-top", "26vh")
                             $(".effect-text").html('<svg xmlns="http://www.w3.org/2000/svg" width="254" height="254" viewBox="0 0 24 24" fill="none" stroke="tomato" stroke-width="0.2" stroke-linecap="round" stroke-linejoin="round" class="heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>');
                             $(".effect-text").css("display", "block")
                             tubelightEffect();
                             setTimeout(function() {
                                 $(".heart").attr("opacity", 0)
                             }, 6000);
                         });
                     })
                 });
             })
         })
     });
 });


 tubelightEffect()

 function generateTime() {
     time = Math.floor(Math.random() * 3000);
     return time
 }



 function tubelightEffect() {
     for (var i = 0; i < 1000; i++) {
         //generate random opacity for random time

         setTimeout(function() {
             //random number for opacity <1

             var random = Math.floor(Math.random() * 10)

             if (random <= 6) {
                 $(".heart").attr("opacity", random)

             } else {
                 $(".heart").attr("opacity", 0)

             }


         }, generateTime())
     }

 }