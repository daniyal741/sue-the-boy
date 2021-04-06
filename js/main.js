

$(document).ready(function(){

    //  $("nav").css('transform', 'translateX(0%)');
    //  $('@media screen and (max-width: 1640px)').css('transform', 'translateX(0%)');

    $(window).resize(function(){
        if ($(window).width() >= 1024){ 
      
            $("nav").css('transform', 'translateX(0%)');
    
        }   
        if ($(window).width() < 1024){ 
          
            $("nav").css('transform', 'translateX(-100%)');
    
        }   

    });
   
    $("header").css('transform', 'translateY(0%)');


    $(".hamburger").click(function(){

        

        $("nav").addClass("show-nav");
        // $('nav').css('visibility' , 'visible');
        $('.hamburger').css('visibility', 'hidden');
        $("nav").css('transform', 'translateX(0%)');

        
        

        $(".cross").click(function(){

        
            // $("nav").removeClass("show-nav");
            $('.hamburger').css('visibility', 'visible');
            $("nav").css('transform', 'translateX(-100%)');

    
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
        // $("header").css('   ', 'translateY(0%)');

    }
    else
    {
        $("header").removeClass("scrollHeader");


    }

    // $(window).off("scroll");  // Stop the Scroll


        if(scroll  + windowHeight >= docHeight -50)
        {

            $('footer').css('position', 'sticky');


        }
        else if(scroll + windowHeight < docHeight )
        {


            $('footer').css('position', 'relative');



        }
   
   });
   

});