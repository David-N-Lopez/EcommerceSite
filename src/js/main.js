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
        var $name = $(".name");
        var $email = $(".email");
        var $phone =$("phone");

        var $userName = $name.val();
        var $userEmail =$email.val();
        var $userPhone = $phone.val();

        var $emailComment = $emailComment;
        var $phoneComment = $phoneComment;
        var $nameComment = $(".name-comment > span");
        if($userName == ''){
            $name.removeClass("is-valid");
            $name.addClass("is-invalid");
            $nameComment.removeClass("success-comment");
            $nameComment.addClass("error-comment");
            $nameComment.text("Please include your name!");
        }
        if($userName != ""){
            $name.removeClass("is-invalid");
            $name.addClass("is-valid");
            $nameComment.removeClass("error-comment");
            $nameComment.addClass("success-comment");
            $nameComment.text("Looking good!")


        }
        if(validateEmail($userEmail)){
           $email.removeClass("is-invalid");
           $email.addClass("is-valid");
            $emailComment.removeClass("error-comment");
            $emailComment.addClass("success-comment");
            $emailComment.text("Looking Good!");
        }
        if(!(validateEmail($userEmail))){
           $email.removeClass("is-valid");
           $email.addClass("is-invalid");
            $emailComment.removeClass("success-comment");
            $emailComment.addClass("error-comment");
            $emailComment.text("Please type in a correct email!");
            
        }

        if(validatePhone($userPhone)){
           $phone.removeClass("is-invalid");
           $phone.addClass("is-valid");
            $phoneComment.removeClass("error-comment");
            $phoneComment.addClass("success-comment");
            $phoneComment.text("Looking good!");
        }
        if(!(validatePhone($userPhone))){
           $phone.removeClass("is-valid");
           $phone.addClass("is-invalid");
            $phoneComment.removeClass("success-comment");
            $phoneComment.addClass("error-comment");
            $phoneComment.text("Please enter a correct phone number!");
        }
    })
    $(function() {
        $('.nav-link[href*="' + location.pathname.split("/")[1] + '"]').addClass('active');
      });
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
