
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


// HERE, JQuery "LISTENING" starts
$(document).ready(function(){

    // phone validation, it calls validatePhone
    // and also some feedback as an Alert + putting a value in the input that shows the format required
    // the "addClass" will use the class "error" defined in style.css and add it to the phone input
    // The "error" class in style.css defines yellow background and red foreground
    $("#phone").on("change", function(){
        if (!validatePhone("phone")){
            alert("Wrong format for phone");
            $("#phone").val("(xxxx)");
            $("#phone").addClass("error");
        }
        else {
            $("#phone").removeClass("error");
        }
    });

    // To change the style of the calender, look in jqueryui.com, under Themes, in the ThemeRoller Gallery
    // You can try different themes (the names are under the calendars) / This is Excite Bike
    // To use a different theme you must include its css in your HTML file.
    // The one I included in my HTML is the Excite Bike, but you can try others

    // Also, here is a good tutorial for playing with the datepicker in https://webkul.com/blog/jquery-datepicker/
    // Datepicker is also documented as one of the widgets here: https://api.jqueryui.com/category/widgets/
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

    $('#phoneInput').usPhoneFormat({
        format: '(xxx) xxx-xxxx'
    })

});

