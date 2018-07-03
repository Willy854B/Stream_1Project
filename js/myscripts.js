
function checkScheEvents(){ 

    var scheEvents = [{
        fname : "Thomas",
        lname : "Heinz",
        phone : "2013303456",
        email : "thomas323@aol.com",
        edate : "10-20-2018",
        etype : "wedding",
        nhours : "3"
        }];
   
    var fnameInput = document.getElementById("fname").val();
    var lnameInput = document.getElementById("lname").val();
    var phoneInput = document.getElementById("phone").val();
    var emailInput = document.getElementById("email").val();
    var edateInput = document.getElementById("edate").val();
    var etypeInput = document.getElementById("etype").val();
    var nhoursInput = document.getElementById("nhours").val();

    var messageBox  = document.getElementById("display");

    var insertObject = {};

    for(var i = 0; i<scheEvents.length; i++){

        if (edateInput === scheEvents[i].edate){

            messageBox.innerHTML = "<h4>Sorry, this date has already been booked. Please enter a defferent date</h4>";  

        }else{ 
            
            insertObject.fname = fnameInput;
            insertObject.lname = lnameInput;
            insertObject.phone = phoneInput;
            insertObject.email = emailInput;
            insertObject.edate = edateInput;
            insertObject.etype = etypeInput;
            insertObject.nhours = nhoursInput;

            costAlert(etypeInput,nhoursInput); 

            messageBox.innerHTML="<h4>You have succesfully booked this event. Thanks!</h4>";

            break;   
        }
    }

    scheEvents.push(insertObject);
}


function costAlert(etypeInput,nhoursInput){

    var w = 2000;
    var p = 600;
                
    if(etypeInput === "wedding"){

        var resultA = w*nhoursInput;
        alert("The cost for this event is " + resultA);

    }else{

        var resultB = p*nhoursInput;
        alert("The cost for this event is " + resultB);
        
    } 
}      































