
function validatePhone(txtPhone) {
    var a = document.getElementById(txtPhone).value;
    // This filter asks for something like (12345), so parentheses with any number (at least 1)
    // of digits
    var filter = /^(\([-+]?[0-9]+)\)$/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}



var unavailableDates = ["07/01/2021","12/20/2021","12/21/2021","12/22/2021","12/23/2021","12/24/2021",
"08/02/2021","09/06/2021","10/11/2021",];
const setDateFormat = "mm/dd/yy";

function disableDates(date) {
    if (date.getDay() === 0 || date.getDay() == 6)
        return [false];
    var string = jQuery.datepicker.formatDate(setDateFormat, date);
    return [ unavailableDates.indexOf(string) === -1 ]
}

function isEmail(email) {
    var a = document.getElementById(email).value;
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z]{2,4})+$/;
    return regex.test(a);
}

function isCCNumber(cc) {
    var ccnumber = document.getElementById(cc).value;
    
    if (isNaN(ccnumber)){
        return false;
    }
    else{
        if (ccnumber.length == 16){
            return true;
        }
        else{
            return false;
        }
    }
}

function isCVCNumber(cvc) {
    var cvcnumber = document.getElementById(cvc).value;
    
    if (isNaN(cvcnumber)){
        return false;
    }
    else{
        if (cvcnumber.length == 3){
            return true;
        }
        else{
            return false;
        }
    }
}

function isCCDateNumber(cvc) {
    var ccdate = document.getElementById(cvc).value;
    var ccmonth = ccdate.split("/")[0];
    var ccyear = ccdate.split("/")[1];

    if (isNaN(ccmonth) && isNaN(ccyear)){
        return false;
    }
    else{
        if (ccmonth.length == 2 && ccyear.length==4){
            if (parseInt(ccmonth)>12){
                return false;
            }
            else{
                return true;
            }
            
        }
        else{
            return false;
        }
    }
}

function dropDownSelect(id, selection){
    try{
        $("#"+id).val(selection);
    }
    catch{

    }
    
}

function bookingFinished(){
    var firstName = document.getElementById("firstName");
    var middleName = document.getElementById("middleName");
    var lastName = document.getElementById("lastName");
    var email= document.getElementById("emailInput");
    var phoneNumber = document.getElementById("phoneInput");
    var ccNumber = document.getElementById("ccInput");

    var date = document.getElementById("dateInput");
    var time = document.getElementById("timeInput");

    var bookingNumber = Math.floor(Math.random() * (999999 - 100000) + 100000)

    $(document.getElementById('confirmName')).text("Name: " + firstName.value + " " + middleName.value + " " + lastName.value);
    $(document.getElementById('confirmEmail')).text("✉ " + email.value);
    $(document.getElementById('confirmPhone')).text("📞 " + phoneNumber.value);
    $(document.getElementById('confirmCCNumber')).text("💳 " + ccNumber.value);


    $(document.getElementById('confirmService')).text("Service: " + $("#serviceSelection option:selected").text());
    $(document.getElementById('confirmDate')).text("📅 " + date.value);
    $(document.getElementById('confirmTime')).text("🕓 " + time.value);
    $(document.getElementById('confirmExpert')).text("Expert: " + $("#expectSelection option:selected").text());

    $(document.getElementById('confirmBookingNumber')).text("Booking Number: " + bookingNumber.toString());

}

function validateFields(){
    var elements = [];
    var check = true ;
    elements.push(document.getElementById("firstName"));
    elements.push(document.getElementById("lastName"));

    elements.push(document.getElementById("emailInput"));
    elements.push(document.getElementById("phoneInput"));
    elements.push(document.getElementById("dateInput"));
    elements.push(document.getElementById("timeInput"));

    elements.push(document.getElementById("ccInput"));
    elements.push(document.getElementById("cvcInput"));
    elements.push(document.getElementById("ccdateInput"));

    for (val of elements){
        if (val.value == ""){
            check = false;
            $(val).css('border-color',"#ff1100" );
        }
        else{
            $(val).css('border-color',"#ced4da" );

        }
    }
    if (!check){
        alert("Properly fill out all marked fields!");
    }
    else{
        // alert("Booking successful!");
        $('#bookPopup').modal('hide');
        
        $('#confirmationPopup').modal('show');
        bookingFinished();
    }
    

}

// HERE, JQuery "LISTENING" starts
$(document).ready(function(){


    $("#emailInput").on("change", function(){
        if (!isEmail("emailInput")){
            alert("Email format is incorrect!")
            $("#emailInput").val("");
            $(this).css('border-color',"#ff1100" );
        }
        else{
            $(this).css('border-color',"#ced4da" );
        }
    });

    $("#ccInput").on("change", function(){
        if (!isCCNumber("ccInput")){
            alert("Credit card number is invalid!")
            $("#ccInput").val("");
            $(this).css('border-color',"#ff1100" );
        }
        else{
            $(this).css('border-color',"#ced4da" );
        }
    });

    $("#cvcInput").on("change", function(){
        if (!isCVCNumber("cvcInput")){
            alert("CVC number is invalid!")
            $("#cvcInput").val("");
            $(this).css('border-color',"#ff1100" );
        }
        else{
            $(this).css('border-color',"#ced4da" );
        }
    });

    $("#ccdateInput").on("change", function(){
        if (!isCCDateNumber("ccdateInput")){
            alert("CC Date is invalid!")
            $("#ccdateInput").val("");
            $(this).css('border-color',"#ff1100" );
        }
        else{
            $(this).css('border-color',"#ced4da" );
        }
    });





    $( "#dateInput" ).datepicker(
        {
            dateFormat: setDateFormat,
            minDate: '+0D',
            maxDate: '+7M',
            // used to disable some dates
            beforeShowDay: $.datepicker.noWeekends,
            beforeShowDay: disableDates
        }
    );

    
    $('#timeInput').timepicker({
        'disableTimeRanges': [
            ['12am', '7am'],
            ['6:30pm','11:31pm']
        ],
        'minTime': '7am',
        'maxTime': '6pm'
    });

    $('#timeInput').on('timeFormatError', function() {
        alert("Time format is incorrect!")
        $('#timeInput').val('');
        $(this).css('border-color',"#ff1100" );
    });

    $('#timeInput').on('timeRangeError', function() {
        alert("Please select a time between 7am and 6pm")
        $('#timeInput').val('');
        $(this).css('border-color',"#ff1100" );
    });

    $('#timeInput').on('changeTime', function() {
        $(this).css('border-color',"#ced4da" );
    });


    $('#phoneInput').usPhoneFormat({
        format: '(xxx) xxx-xxxx'
    })

});

