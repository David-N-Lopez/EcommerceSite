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
$(".go-up").click(function() {
        $('#masthead').animate({
            scrollTop: 0
        }, 2000);
  });