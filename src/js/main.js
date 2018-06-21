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

// Handlebars.registerHelper('ifEquals', function(arg1, arg2) {
//     if (arg1 == arg2){
//         return "hello";
//     }
// });
// Handlebars.registerHelper('eachInArray', function(arg1, arg2) {
//     var i = 0;
//     for(;i<arg;
// });
$(document).ready(function(){
    $(".go-up").click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 2000);
     });
    $(function() {
        $('.nav-link[href*="' + location.pathname.split("/")[1] + '"]').addClass('active-state');
      });
    $("submit-btn").submit(function(e){
        return false;
    })

})
// Handlebars.registerHelper('firstPromoItem', function(categoryName1, catalog) {
//     catalog.forEach(function() {
//         // console.log(item, index)
//     })
// });