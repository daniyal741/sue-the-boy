

$(document).ready(function(){

    $('.nav').css('transform', 'translateX(0%)');
    $('header').css('transform', 'translateY(0%)');
    $('.bg img').css('transform', 'translateY(0%)');
    $('.main-heading').css('transform', 'translateY(0%)');


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

//     if(scroll  + windowHeight >= docHeight )
//     {

//         // $("footer").show(500);
//         $("footer").addClass("scrollFooter");

    
//     }
//     else{

//         // $("footer").hide(0);
//         $("footer").removeClass("scrollFooter");
//         // scroll =  scroll -windowHeight;

//     }
    
//    });
        if(scroll  + windowHeight >= docHeight -100)
        {
            $("footer").addClass("scrollFooter");

            // $( "footer" ).animate({ "bottom": "+=" + $("footer").height+"px" }, "slow" );
        }
        else if(scroll + windowHeight < docHeight +200)
        {

            $("footer").removeClass("scrollFooter");
            // $( "footer" ).animate({ "bottom": "-=" + $("footer").height+"px" }, "slow" );

        }
   
   });
   

});