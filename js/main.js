

$(document).ready(function(){

    $(".nav").css('transform', 'translateX(0%)');
    // $("nav").css('transform', 'translateX(0%)');

    $("header").css('transform', 'translateY(0%)');


    $(".hamburger").click(function(){

        

        $("nav").addClass("show-nav");
        $('nav').css('visibility' , 'visible');
        $('.hamburger').css('visibility', 'hidden');

        
        

        $(".cross").click(function(){

        
            $("nav").removeClass("show-nav");
            $('.hamburger').css('visibility', 'visible');

    
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


        if(scroll  + windowHeight >= docHeight -200)
        {
            $('footer').css('visibility', 'visible');

            if( $('nav').css('display')=="block")
            {
                $("nav").removeClass("show-nav");
                $('nav').css('visibility' , 'hidden');
                $('.hamburger').css('visibility', 'visible');

            }


        }
        else if(scroll + windowHeight -200< docHeight )
        {

            $('footer').css('visibility', 'hidden');

            if($('nav').css('display')=="block"){

                $('nav').css('visibility' , 'visible');

                //  $('.hamburger').css('visibility', 'hidden');



            }


           


            // $("footer").removeClass("scrollFooter");
            // $( "footer" ).animate({ "bottom": "-=" + $("footer").height+"px" }, "slow" );

        }
   
   });
   

});