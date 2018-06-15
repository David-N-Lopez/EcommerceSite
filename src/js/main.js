Respond.to([
    {
        'media': '(min-width: 768px)',
        'if': function () {
            $(".cards-desktop").show();
        },
        'else': function(){
            // var cardsPhone = document.getElementsByClassName("card-section-phone");
            // $(cardsPhone).toggleClass("carousel-phone");
            $(".cards-desktop").hide();
            $(".carousel-phone").show();
        }
    }
])
$(document).ready(function(){
    $(".go-up").click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 2000);
     });
    $(".submit-btn").click(function(){
        var $userName = $(".name").val();
        var $userEmail = $(".email").val();
        var $userPhone = $(".phone").val();
        if($userName == ''){
            $(".name").removeClass("is-valid");
            $(".name").addClass("is-invalid");
            $(".name-comment > span").removeClass("success-comment");
            $(".name-comment > span").addClass("error-comment");
            $(".name-comment > span").text("Please include your name!");
        }
        if($userName != ""){
            $(".name").removeClass("is-invalid");
            $(".name").addClass("is-valid");
            $(".name-comment > span").removeClass("error-comment");
            $(".name-comment > span").addClass("success-comment");
            $(".name-comment > span").text("Looking good!")


        }
        if(validateEmail($userEmail)){
            $(".email").removeClass("is-invalid");
            $(".email").addClass("is-valid");
            $(".email-comment > span").removeClass("error-comment");
            $(".email-comment > span").addClass("success-comment");
            $(".email-comment > span").text("Looking Good!");
        }
        if(!(validateEmail($userEmail))){
            $(".email").removeClass("is-valid");
            $(".email").addClass("is-invalid");
            $(".email-comment > span").removeClass("success-comment");
            $(".email-comment > span").addClass("error-comment");
            $(".email-comment > span").text("Please type in a correct email!");
            
        }

        if(validatePhone($userPhone)){
            $(".phone").removeClass("is-invalid");
            $(".phone").addClass("is-valid");
            $(".phone-comment > span").removeClass("error-comment");
            $(".phone-comment > span").addClass("success-comment");
            $(".phone-comment > span").text("Looking good!");
        }
        if(!(validatePhone($userPhone))){
            $(".phone").removeClass("is-valid");
            $(".phone").addClass("is-invalid");
            $(".phone-comment > span").removeClass("success-comment");
            $(".phone-comment > span").addClass("error-comment");
            $(".phone-comment > span").text("Please enter a correct phone number!");
        }
    })
    if ( document.URL == "http://localhost:8094/contact.html") {
        $(".contact-nav").addClass("nav-active");
    } 
    if ( document.URL == "http://localhost:8094/aboutUs.html") {
        $(".about").addClass("nav-active");
        
    } 
    $("submit-btn").submit(function(e){
        return false;
    })

})
function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
function validatePhone(phone){
    var phoneno = /^[0-9-+]+$/;
    return (phoneno.test(phone)&&(phone.length>9));
  }
