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
    //gift card message toggle
    let $arrow = $('.down-arrow');
    let $giftMessage = $('.js-gift-toggle');
    $arrow.on('click',function(){
        if ($giftMessage.is(':hidden')){
            $giftMessage.slideDown()
        }
        else{
            $giftMessage.slideUp()
        }
      
    })
    //get cookie
    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
    var getCookiesKeys = function(){
        var pairs = document.cookie.split(";");
        var cookies = [];
        for (var i=0; i<pairs.length; i++){
          var pair = pairs[i].split("=");
          cookies.push(pair[0])
        //   cookies[(pair[0]+'').trim()] = unescape(pair[1]);
        }
        return cookies;
      }
      var getCookiesObj = function(){
        var pairs = document.cookie.split(";");
        var cookies = [];
        for (var i=0; i<pairs.length; i++){
          var pair = pairs[i].split("=");
          cookies[(pair[0]+'').trim()] = unescape(pair[1]);
        }
        return cookies;
      }
    //Cache data 
    let $addToCart = $(".add-to-cart")
    $addToCart.on('click', function(e){
        let productName = e.currentTarget.title
        if (getCookie(productName) != ''){
            let i = parseInt(getCookie(productName));
            i++;
            document.cookie = productName+'='+i.toString();
        }
        else{
            document.cookie = productName+'=1'
        }
        
    })
    //cart
    let cookiesObj = getCookiesObj();
    let cookiesArray = getCookiesKeys();
    fetch('../data/site.json')
    .then(response => response.json())
    .then(jsonResponse => 
        {   
            let qtys = 0;
            let catalog = jsonResponse.catalog;
            let allCartProducts = getProductsWithName(catalog, cookiesArray);
            allCartProducts.map(obj =>{
                let imgDir = "../../assets/images/" + obj.img
                return obj.img = imgDir
            })
            allCartProducts.map(obj=>{
                let itemName = obj.name;
                qtys = cookiesObj[itemName];
                return obj.qty = qtys
            })
            carts.cartItems = allCartProducts
        }
    )
    function getProductsWithName(obj,name){
        let objectArray = [];
        obj.forEach(product=>{
            name.forEach(indName => {  
                if(indName.slice(-2) == product.name.slice(-2)){
                    objectArray.push(product);
                }
            })
        })
        return objectArray;
    }
    //filter
    let attributeLink = document.getElementsByClassName("attribute-link");
    for (var i = 0; i < attributeLink.length; i++){
        attributeLink[i].addEventListener('click', function(e){
        let targetElementText = e.currentTarget.innerHTML
        fetch('../data/site.json')
        .then(response => response.json())
        .then(jsonResponse => 
            {
            let catalog = jsonResponse.catalog
            let productsWithAttribute = getProductWithAttributes(catalog, 'Subcategory01',targetElementText);
            let productClassArray = [];
            productsWithAttribute.forEach((name)=>{
                productClassArray.push(name.slice(-2));
            })
            console.log(productClassArray)
            $('.js-product-card').hide();
            productClassArray.forEach(classValue => {
                if($('.js-product-card').hasClass(classValue)){
                    console.log("going to show"+ classValue);
                    $('.'+ classValue).show();
                }
            })
    
        });

        function getProductWithAttributes(obj,subcatName, desired)
            {
            let parsedArray = []
            obj.forEach(product => {
                // console.log(product);
                product.subcategory.forEach(subcategoryName =>{
                    // console.log(subcategoryName)
                    if (subcategoryName[subcatName]){
                        subcategoryName[subcatName].forEach(attributeObj => {
                            if (attributeObj['attribute Category 01']){
                                attributeObj['attribute Category 01'].forEach(attributes => {
                                    if (attributes == desired){
                                        parsedArray.push(product.name)
                                    }
                                })
                            }
                            if (attributeObj['attribute Category 02']){
                                attributeObj['attribute Category 02'].forEach(attributes => {
                                    if (attributes == desired){
                                        parsedArray.push(product.name)
                                    }
                                })
                            }
                            if (attributeObj['attribute Category 03']){
                                attributeObj['attribute Category 03'].forEach(attributes => {
                                    if (attributes == desired){
                                        parsedArray.push(product.name)
                                    }
                                })
                            }
                            if (attributeObj['attribute Category 04']){
                                attributeObj['attribute Category 04'].forEach(attributes => {
                                    if (attributes == desired){
                                        parsedArray.push(product.name)
                                    }
                                })
                            }
                        });
                    }
                });
            });
            return parsedArray;
        }
    
        },false)
    }
})
  function scrollTo(to){
        $('html, body').animate({
            scrollTop:  ($(to).offset().top)
        }, 2000);
}


