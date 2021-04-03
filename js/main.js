$(document).ready(function(){

    $(".hamburger").click(function(){

        
        $(".nav").toggle();

        $(".nav").click(function(){

        
            $(".nav").hide();
    
    
        });
    });

   $(window).scroll(function(){

    var scroll = $(window).scrollTop();

    if(scroll >= 50)
    {
        $("header").addClass("scrollHeader");
    }
    else
    {
        $("header").removeClass("scrollHeader");


    }

   });



});