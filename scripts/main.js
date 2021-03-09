$(document).ready(function() {

    //  Adding Hover Styles to all Buttons
    //  Button 1
    $('.top .a').on('mouseenter', function() {
        $('.card-body .add_btn_1').css({
            "transition": "all 300ms ease-in-out",
            "color": "white",
            "background": "#a24f5e",
        });
    });
    $('.top .a').on('mouseleave', function() {
        $('.card-body .add_btn_1').css({
            "transition": "all 300ms ease-in-out",
            "color": "black",
            "background": "white",
        });
    });

    //  Button 2

    $('.top .b').on('mouseenter', function() {
        $('.card-body .add_btn_2').css({
            "transition": "all 300ms ease-in-out",
            "color": "white",
            "background": "#a24f5e",
        });
    });
    $('.top .b').on('mouseleave', function() {
        $('.card-body .add_btn_2').css({
            "transition": "all 300ms ease-in-out",
            "color": "black",
            "background": "white",
        });
    });

    //  Button 3

    $('.top .c').on('mouseenter', function() {
        $('.card-body .add_btn_3').css({
            "transition": "all 300ms ease-in-out",
            "color": "white",
            "background": "#a24f5e",
        });
    });
    $('.top .c').on('mouseleave', function() {
        $('.card-body .add_btn_3').css({
            "transition": "all 300ms ease-in-out",
            "color": "black",
            "background": "white",
        });
    });

    // Adding OnClick Styles for button 

    $('.add_btn_1').on('click', function() {
        $(this).css({
            "background": "#b32740",
            "transition": "background 300ms ease-in-out",
            "color": "white"
        });
    });

    $('.add_btn_2').on('click', function() {
        $(this).css({
            "background": "#b32740",
            "transition": "background 300ms ease-in-out",
            "color": "white"
        });
    });

    $('.add_btn_3').on('click', function() {
        $(this).css({
            "background": "#b32740",
            "transition": "background 300ms ease-in-out",
            "color": "white"
        });
    });

});