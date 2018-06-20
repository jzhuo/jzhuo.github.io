/*global $, jQuery, alert*/
$(document).ready(function () {

    'use strict';

    var typed = $(".dynamic_text");

    $(function () {
        typed.typed({
            strings: [
                "Student.",
                "Developer.",
                "ML Researcher"
            ],
            typeSpeed: 100,
            loop: true
        });
    });

});
