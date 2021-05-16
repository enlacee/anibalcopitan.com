/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    var goToSectionWeb = function( IDselector ) {
        var $section =  $( '#' + IDselector );
        var sumAllcomponentHeader = parseInt($('nav').css("padding-top"));
        sumAllcomponentHeader += parseInt($('nav').css("padding-bottom"));
        var sizeTotal =  $('nav').height() + sumAllcomponentHeader; // 60 nav
        
        // goTo
        $('html, body').stop().animate({
            scrollTop: $section.offset().top - sizeTotal
        }, 1500, 'easeInOutExpo');
    };

    // Access by Clik by links (anchors)
    $('.page-scroll a').bind('click', function(event) {
        // event.preventDefault();
        var $linkCliked = $(this);
        goToSectionWeb( $linkCliked.attr('href').split('#')[1] );
    });
    
    // Access by URL
    var idHASH = document.location.toString().split('#')[1];
    if (typeof(idHASH) == 'string') {
        var theElement = document.querySelector('#' + idHASH);
        if ( theElement != null) {
            theElement.classList.remove('hide');

            // navigate to section ONLY JS event
            // document.querySelector('nav').remove();
            // document.querySelector('.page-scroll a[href="#' + idHASH + '"]').click();

            // **** set pposition
            // var sizeNav = document.querySelector('nav').offsetHeight;
            // var positionElement = theElement.offsetHeight;
            // window.scrollTo(0, (theElement.offsetHeight + (sizeNav*2)))

            // tricks for watch the section good (#link goto position by default)
            // theElement.insertAdjacentHTML("afterbegin", "<br/><br/>");
            goToSectionWeb(idHASH);
        }
    }
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});