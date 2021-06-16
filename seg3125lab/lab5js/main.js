
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
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
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


// HERE, JQuery "LISTENING" starts
$(document).ready(function(){


    $("#emailInput").on("change", function(){
        if (!isEmail("emailInput")){
            alert("Email format is incorrect!")
            $("#emailInput").val("");
        }
    });

    $("#ccInput").on("change", function(){
        if (!isCCNumber("ccInput")){
            alert("Credit card number is invalid!")
            $("#ccInput").val("");
        }
    });

    $("#cvcInput").on("change", function(){
        if (!isCVCNumber("cvcInput")){
            alert("CVC number is invalid!")
            $("#cvcInput").val("");
        }
    });

    $("#ccdateInput").on("change", function(){
        if (!isCCDateNumber("ccdateInput")){
            alert("CC Date is invalid!")
            $("#ccdateInput").val("");
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
    });

    $('#timeInput').on('timeRangeError', function() {
        alert("Please select a time between 7am and 6pm")
        $('#timeInput').val('');
    });


    $('#phoneInput').usPhoneFormat({
        format: '(xxx) xxx-xxxx'
    })

});

