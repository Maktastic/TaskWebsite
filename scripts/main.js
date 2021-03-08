$(document).ready(function() {
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
});