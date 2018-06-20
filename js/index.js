/*global $, jQuery, alert*/
$(document).ready(function () {

    'use strict';

    var typed = $(".typed");

    $(function () {
        typed.typed({
            strings: [
                "Student.",
                "Developer.",
                "ML Researcher"
            ],
            typeSpeed: 10000,
            backDelay: 10000,
            loop: true
        });
    });

});
