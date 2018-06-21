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
})