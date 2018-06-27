$(function(){
    $("#contact-form").validate({
        rules: {
            email:{
                required: true,
                email:true
            },
            name:{
                required:true,
                lettersonly: true
            },
            phone:{
                required:true,
                phoneUS: true
            }

        },
        messages:{
            email: {
                required: "please enter an email address!",
                email: "Please enter a valid email address!"
            },
            name:{
                required: "please enter your name!",
                lettersonly: "please do not enter numbers or symbols"
            },
            phone:{
                required: "please enter your phone number!",
                phoneUS: "please enter a US phone number"

            }

        }
    })
    $("#gift-card-form").validate({
        rules: {
            name:{
                required:true,
                lettersonly: true
            },
            amount:{
                required:true,
                digits:true,
                range:[1,1000]
            },
            qty:{
                required:true,
                digits:true,
                range:[1,100]
            }
        },
        messages:{
            amount: {
                required: "please enter a valid amount!",
                digits: "Please enter digits only!",
                range:"Please enter a value from 1 to 1000."
            },
            name:{
                required: "please enter your name!",
                lettersonly: "please do not enter numbers or symbols"
            },
            qty:{
                required: "please enter desired amount!",
                digits: "Please enter digits only!",
                range:"Please enter a value from 1 to 1000."
            }

        }
    })
})