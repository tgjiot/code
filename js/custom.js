$(document).ready(function () {
    var date = new Date(2017, 3, 20),// Change your date here (YYYY, MONTH, DATE)
    clock = $('#countdown-clock').FlipClock(date.getTime() / 1000 - new Date().getTime() / 1000, {
        clockFace: 'DailyCounter',
        countdown: true
        //language: 'turkish'
    });

    $("#countdown-clock").append('<span class="modify">');
    $("span.days").nextUntil("span.hours").wrapAll("<div class='days-wrapper'></div>");
    $("span.hours").nextUntil("span.minutes").wrapAll("<div class='hours-wrapper'></div>");
    $("span.minutes").nextUntil("span.seconds").wrapAll("<div class='minutes-wrapper'></div>");
    $("span.seconds").nextUntil("span.remove").wrapAll("<div class='seconds-wrapper'></div>");
    $(".modify").remove();

    /* Form validation*/

    $("a.tool-tip").tooltip(); 

});


if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
   $('body').addClass('chrome');
}


$(function () {
    "use strict";
    // subscribe
    $('#subscribe-submit').click(function () {
        $('.subscribe-error-field').hide();
        $('.subscribe-message').hide();

        var emailReg = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
        var emailVal = $('#subscribe-email').val();

        if (emailVal == "" || emailVal == "Email Address *") {
            $('.subscribe-error-field').html('<p><i class="fa fa-times"></i>Email address required.</p>').fadeIn();
            return false;

        } else if (!emailReg.test(emailVal)) {
            $('.subscribe-error-field').html('<p><i class="fa fa-times"></i>Invalid email address.</p>').fadeIn();
            return false;
        }

        var data_string = $('.subscribe-form').serialize();
        $.ajax({
            type: "POST",
            url: "subscribe.php",
            data: data_string,

            //success
            success: function (data) {
                $('.subscribe-message').html('<p class="subscribe-success"><i class="fa fa-check"></i>You have been subscribed.</p>').fadeIn();
            },
            error: function (data) {
                $('.subscribe-message').html('<p class="subscribe-error"><i class="fa fa-times"></i>Something went wrong.</p>').fadeIn();
            }

        }) //end ajax call
        return false;
    });

});