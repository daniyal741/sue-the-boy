$(document).ready(function(){

    $(".hamburger").click(function(){

        
        $(".nav").toggle();

        $(".nav").click(function(){

        
            $(".nav").hide();
    
    
        });
    });

   $(window).scroll(function(){

    let scroll = $(window).scrollTop();
    let windowHeight = $(window).innerHeight();
    let docHeight = $(document).height();

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