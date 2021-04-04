$(document).ready(function(){

    $(".hamburger").click(function(){

        
        $(".nav").toggle();

        $(".nav").click(function(){

        
            $(".nav").hide();
    
    
        });
    });

   $(window).scroll(function(){

    let scroll = $(window).scrollTop();
    let windowHeight = $(window).height();
    let docHeight = $(document).height();
    let temp = 0;

    if(scroll >= 50)
    {
        $("header").addClass("scrollHeader");
    }
    else
    {
        $("header").removeClass("scrollHeader");


    }

    if(scroll  + windowHeight +50>= docHeight -100)
    {

        $("footer").show(500);
        // $("footer").addClass("scrollFooter");

    
    }
    else{

        $("footer").hide(0);
        // $("footer").removeClass("scrollFooter");
        // scroll =  scroll -windowHeight;

    }
    
   });

   

});