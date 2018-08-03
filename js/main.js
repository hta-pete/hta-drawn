$(function(){

    var $window       = $(window);   
        
    // Scrolling animation stuff
    var scrollTime = 1.2;
    var scrollDistance = 200;

    $window.on("mousewheel", function(event){

        event.preventDefault();

        var delta       = event.originalEvent.wheelDelta/120;
        var scrollTop   = $window.scrollTop();
        var finalScroll = scrollTop - parseInt(delta*scrollDistance) * 3;
        
        TweenMax.to($window, scrollTime, {
            scrollTo : { y: finalScroll, autoKill:true },
            ease: Power1.easeOut,
            overwrite: 5                         
        }); 

    });


    //Slick slider
    $('.team-slider').slick({
          infinite:true,
          dots:false,
          //arrows:false,
          slidesToShow:5,
          slidesToScroll:1,
          centerMode:true,
          autoplay:true,
          autoplaySpeed: 4000,
          speed: 700,
          pauseOnHover:false,
          prevArrow: false,
          nextArrow: $('.slider-next-btn')
    });

    $('.team-slider').on('afterChange', resetSlideStuffProgress);

    function resetSlideStuffProgress(){

        var nextBtn     = $('.slider-next-btn'),  
            newNextBtn  = nextBtn.clone(true);
                   
        nextBtn.before(newNextBtn);        
        nextBtn.remove();

    };




});


