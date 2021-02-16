/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        // MODIFIED FOR ANIBAL
        var sumAllcomponentHeader = parseInt($('nav').css("padding-top"));
        sumAllcomponentHeader += parseInt($('nav').css("padding-bottom"));
        sumAllcomponentHeader += parseInt($('nav').css("margin-top"));
        sumAllcomponentHeader += parseInt($('nav').css("margin-bottom"));
        
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - sumAllcomponentHeader
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});