

$(document).ready(function(){

    $(".nav").css('transform', 'translateX(0%)');
    $("header").css('transform', 'translateY(0%)');


    $(".hamburger").click(function(){

        

        $(".nav").addClass("show-nav");
        // $('.nav').css('transform', 'translateX(0%)');

        $(".cross").click(function(){

        
            $(".nav").removeClass("show-nav");
    
    
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


        if(scroll  + windowHeight >= docHeight -100)
        {
            $("footer").fadeIn(500);
            
            // $( "footer" ).animate({ "bottom": "+=" + $("footer").height+"px" }, "slow" );
        }
        else if(scroll + windowHeight < docHeight +200)
        {

            $("footer").fadeOut();
            // $("footer").removeClass("scrollFooter");
            // $( "footer" ).animate({ "bottom": "-=" + $("footer").height+"px" }, "slow" );

        }
   
   });
   

});