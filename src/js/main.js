//CARD CAROUSEL FOR PHONE SCREENS
Respond.to([
    {
        'media': '(min-width: 768px)',
        'if': function () {
            $(".cards-desktop").show();
        },
        'else': function(){
            $(".cards-desktop").hide();
            $(".carousel-phone").show();
        }
    }
])
//ANIMATION "BACK TO TOP"
$(document).ready(function(){
    //variables
    let $detailBtn =  $(".js-btn-details");
    let $detailContent = $(".js-detail-content");
    let $moreInfoBtn = $(".js-btn-more-info");
    let $moreInfoContent = $(".js-more-info-content");
    let $reviewBtn = $(".js-btn-reviews");
    let $reviewContent = $(".js-review-content");
    let $printScreen = $(".js-print");
    let $mySideNav = $("#mySideNav");
    let $myBody = $(".main");
    let $myFooter = $("footer");
    let $navToggle = $(".navbar-toggler");
    let $notFlyout = $("body").not(".offcanvas-collapse");
    let $offcanvas = $(".offcanvas-collapse");
    let $accountContent = $(".js-account-content");
    let $menuContent = $(".js-menu-content");
    let $headMenuButton = $(".head-menu");
    let $headAccountButton = $(".head-account");

    //scroll animation
    $(".js-go-up").click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 2000);
     });
     $(".js-go-to-review").click(function(){
        scrollTo("#review-form");
     });
     //offcanvas animation
     $(function () {
        'use strict'
      
        $('[data-toggle="offcanvas"]').on('click', function () {
          $('.offcanvas-collapse').toggleClass('open')
        })
        $offcanvas.on("mouseleave",function(){
            if ( $('.offcanvas-collapse').hasClass('open')){
                $('.offcanvas-collapse').toggleClass('open')
            }
        }) 
      })
      
     //nav active state
    $(function() {
        $('.nav-link[href*="' + location.pathname.split("/")[1] + '"]').addClass('active-state');
      });
    $("submit-btn").submit(function(e){
        return false;
    });
    //slick slider
 $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav',
       autoplay: false
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    centerMode:true,
    dots: false,
    arrows:true,
    prevArrow: $('.top-arrow'),
    nextArrow: $('.bottom-arrow'),
    vertical:true,
    focusOnSelect: true
  
  });
    //Print screen
    $printScreen.on("click",function(){
        window.print();
    })
    //sidNav for mobile devices
    var $bodyTop = $('header');
    var $fixedCart = $(".fixedCart");
    $(window).scroll(function(){
        if (window.scrollY > ($bodyTop.offset().top + $bodyTop.height())) {
            $fixedCart.show();
        }
        else{
            $fixedCart.hide();
         
        }
    });
    $(".attribute-link").on('click', function(e){
        let targetElementText = e.currentTarget.innerHTML
        $.getJSON("../data/site.json", function (data) {
            let catalog = data.catalog
            console.log(catalog)
            console.log(catalog[0].subcategory)
        });

    })

})
  function scrollTo(to){
        $('html, body').animate({
            scrollTop:  ($(to).offset().top)
        }, 2000);
}


