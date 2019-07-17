$(document).ready(function() {
    $(".btn").on("click", function() {
        /*
         * When we click on an element that has
         * a 'btn' class, this event will be fired.
        */ 
        var contactInfo = [{
            fname : "Thomas",
            lname : "Heinz",
            phone : "2013303456",
            email : "thomas323@aol.com",
            message : "message"
        }];
   
        var fnameInput = document.getElementById("fname").val();
        var lnameInput = document.getElementById("lname").val();
        var phoneInput = document.getElementById("phone").val();
        var emailInput = document.getElementById("email").val();
        var messageInput = document.getElementById("message").val();

        var messageBox  = document.getElementById("displayc");

        var insertObject = {};

        for(var i = 0; i<contactInfo.length; i++){
   
            insertObject.fname = fnameInput;
            insertObject.lname = lnameInput;
            insertObject.phone = phoneInput;
            insertObject.email = emailInput;
            insertObject.message = messageInput;

            messageBox.innerHTML="<h4>You have succesfully send your contact information. Thanks!</h4>";

            break;   
        }
        contactInfo.push(insertObject);
    };
};    