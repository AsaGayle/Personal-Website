$(document).ready(function () {
    
    "use strict";
    // Small program to make images with the .zoom class 
    // to remove .faded class and expand image using webkit
    // transitions
    
    // 1. start function on .zoom class when document is loaded
        $('.zoom').hover(function () {
            // 2.1. function adds transition class and removes faded
            // thus making image larger and back to normal opacity
            $(this).addClass('transition');
            $(this).removeClass('faded');
        }, 
            // 2.2. function returns image back to nomarl
            function () {
            $(this).removeClass('transition');
            $(this).addClass('faded');
        });
    });
