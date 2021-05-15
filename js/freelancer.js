/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        event.preventDefault();

        var $linkCliked = $(this);
        // MODIFIED FOR ANIBAL
        var sumAllcomponentHeader = parseInt($('nav').css("padding-top"));
        sumAllcomponentHeader += parseInt($('nav').css("padding-bottom"));
        var sizeTotal =  $('nav').height() + sumAllcomponentHeader; // 60 nav
        
        $('html, body').stop().animate({
            scrollTop: $($linkCliked.attr('href')).offset().top - sizeTotal
        }, 1500, 'easeInOutExpo');
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