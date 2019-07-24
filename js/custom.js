/*--- jQuery Line Progress Bar --*/
jQuery(document).ready(function($) {
  

  function DemoProgressbars(){
    $('#bar-1').LineProgressbar({
      percentage: 95,
      fillBackgroundColor: '#5291c9',
      height: '1.2rem',
      radius: '0'
    });
    $('#bar-2').LineProgressbar({
      percentage: 91,
      fillBackgroundColor: '#5a68a5',
      height: '1.2rem',
      radius: '0'
    });
    $('#bar-3').LineProgressbar({
      percentage: 88,
      fillBackgroundColor: '#2abc68',
      height: '1.2rem',
      radius: '0'
    });
    $('#bar-4').LineProgressbar({
      percentage: 87,
      fillBackgroundColor: '#ff414f',
      height: '1.2rem',
      radius: '0'
    });
    $('#bar-5').LineProgressbar({
      percentage: 92,
      fillBackgroundColor: '#6C86B7',
      height: '1.2rem',
      radius: '0'
    });
    $('#bar-6').LineProgressbar({
      percentage: 88,
      fillBackgroundColor: '#009BC9',
      height: '1.2rem',
      radius: '0'
    });
  }


  $('.progressbar-start').waypoint(function(){
    DemoProgressbars();
  },{
    offset: '70%',
    triggerOnce: true 
  }); // waypoint
  
  DemoProgressbars();
  hljs.initHighlightingOnLoad();

});


/*========== CLOSE MOBILE NAV ON CLICK ==========*/

$(document).ready(function () { //when document loads completely.
    $(document).click(function (event) { //click anywhere
        var clickover = $(event.target); //get the target element where you clicked
        var _opened = $(".navbar-collapse").hasClass("show"); //check if element with 'navbar-collapse' class has a class called show. Returns true and false.
        if (_opened === true && !clickover.hasClass("navbar-toggler")) { // if _opened is true and clickover(element we clicked) doesn't have 'navbar-toggler' class
            $(".navbar-toggler").click(); //toggle the navbar; close the navbar menu in mobile.
        }
    });
});


/*========== OPEN NAV LINK WITH DROPDOWN ON SECOND TAP ==========*/
/*---DOESN'T WORK  ... $('a.nav-link.dropdown-toggle').dblclick(function(e) {
    window.location.replace($(this).attr("href"));
}); 
*/


/*========== SMOOTH SCROLLING TO LINKS ==========*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


/*========== CAROUSEL SLIDER PREV & NEXT LINKS ==========*/
$('.carousel-control-next').click(function(){ $('.carousel').carousel('next')});
$('.carousel-control-prev').click(function(){ $('.carousel').carousel('prev')});


/*========== HOME PAGE CLIENT CAROUSEL ==========*/

$(document).ready(function(){
  $('#owl-carousel .carousel-wrap .owl-carousel').owlCarousel({
  autoplay: true,
  autoplayHoverPause: true,
  loop: true,
  autoplayTimeout: 8000,
  autoplaySpeed: 2000,
  nav: true,
  navText: [
    "<i class='fas fa-chevron-left'></i>",
    "<i class='fas fa-chevron-right'></i>"
  ],
  navSpeed: 1500,
  responsive: {
    0: {
      items: 1
    }
  }
});
});


/*========== TOP SCROLL BUTTON ==========*/

$(document).ready(function() { //when document is ready
  $(window).scroll(function() { //when webpage is scrolled
    if ($(this).scrollTop() > 500) { //if scroll from top is more than 500
      $('.top-scroll').fadeIn(); //display element with class 'top-scroll'; opacity increases
    } else { //if not
      $('.top-scroll').fadeOut(); //hide element with class 'top-scroll'; opacity decreases
    }
  });
});


/*========== LOGO IMAGE CAROUSEL ==========*/

$(document).ready(function(){
  $('#logo-carousel .carousel-wrap .owl-carousel').owlCarousel({
  loop: true,
  smartSpeed:1700,
  margin: 10,
  nav: true,
  navText: [
    "<i class='fas fa-chevron-left'></i>",
    "<i class='fas fa-chevron-right'></i>"
  ],
  autoplay: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 5
    }
  }
});
});


/*========== ABOUT US PAGE TEAM CAROUSEL ==========*/

$(document).ready(function(){
  $('#team-carousel .carousel-wrap .owl-carousel').owlCarousel({
  loop: true,
  smartSpeed:1700,
  margin: 10,
  nav: true,
  navText: [
    "<i class='fas fa-chevron-left'></i>",
    "<i class='fas fa-chevron-right'></i>"
  ],
  autoplay: false,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    768: {
      items: 1
    },
    992: {
      items: 2
    }
  }
});
});


/*========== KEEP TEAM MEMBER CARDS THE SAME HEIGHT ==========*/

$(document).ready(function(){

    // Select and loop the container element of the elements you want to equalise
    $('.owl-stage').each(function(){  
      
      // Cache the highest
      var highestBox = 0;
      
      // Select and loop the elements you want to equalise
      $('.row.no-gutters.col-md-6', this).each(function(){
        
        // If this box is higher than the cached highest then store it
        if($(this).height() > highestBox) {
          highestBox = $(this).height(); 
        }
      
      });  
            
      // Set the height of all those children to whichever was highest 
      $('.row.no-gutters.col-md-6',this).height(highestBox);
                    
    }); 
});


/*========== PROJECTS PAGE PROJECT DESCRIPTION CAROUSEL ==========*/

$(document).ready(function(){
  $('.projects-carousel .carousel-wrap .owl-carousel').owlCarousel({
  autoplay: false,
  autoplayHoverPause: true,
  loop: true,
  autoplayTimeout: 8000,
  autoplaySpeed: 2000,
  nav: true,
  navText: [
    "<i class='fas fa-chevron-left'></i>",
    "<i class='fas fa-chevron-right'></i>"
  ],
  navSpeed: 1500,
  responsive: {
    0: {
      items: 1
    }
  }
});
});


/*========== FILTERIZR IMAGE GALLERY FILTER ==========*/

$(document).ready(function() {

    $('.filterizr-filter li').click(function() {
      $('.filterizr-filter li').removeClass('filtr-active');
      $(this).addClass('filtr-active');
    });
    $('.filterizr-sorting li').click(function() {
      $('.filterizr-sorting li').removeClass('filtr-active');
      $(this).addClass('filtr-active');
    });

    var filterizd = $('.filtr-container').filterizr();

    filterizd.filterizr('sort', 'title', 'asc');

  });


/*========== MAGNIFIC POPUP LIGHTBOX IMAGE GALLERY ==========*/

  $(document).ready(function() {
    $('.img-popup').magnificPopup({ 
      type: 'image',
      gallery:{enabled:true},
      removalDelay: 100, // Delay in milliseconds before popup is removed
      image: {
          titleSrc: 'title' 
          // this tells the script which attribute has your image caption
      }
    });
});


/* MAKE ALL ANIMATIONS THE SAME "FADEINUP" ANIMATION ON MOBILE DEVICES */

$(document).ready(function() { 
if ($(window).width() < 768 ) {
   $("div").attr('data-animation','fadeInUp');
}
});


/*========== WAYPOINTS ANIMATION DELAY ==========*/

$(function(){ // a self calling function
    function onScrollInit( items, trigger ) { // a custom made function
        items.each( function() { //for every element in items run function
        var osElement = $(this), //set osElement to the current 
            osAnimationClass = osElement.attr('data-animation'), //get value of attribute data-animation type
            osAnimationDelay = osElement.attr('data-delay'); //get value of attribute data-delay time

            osElement.css({ //change css of element
                '-webkit-animation-delay':  osAnimationDelay, //for safari browsers
                '-moz-animation-delay':     osAnimationDelay, //for mozilla browsers
                'animation-delay':          osAnimationDelay //normal
            });

            var osTrigger = ( trigger ) ? trigger : osElement; //if trigger is present, set it to osTrigger. Else set osElement to osTrigger

            osTrigger.waypoint(function() { //scroll upwards and downwards
                osElement.addClass('animated').addClass(osAnimationClass); //add animated and the data-animation class to the element.
                },{
                    triggerOnce: true, //only once this animation should happen
                    offset: '70%' // animation should happen when the element is 70% below from the top of the browser window
            });
        });
    }

    onScrollInit( $('.os-animation') ); //function call with only items
    onScrollInit( $('.staggered-animation'), $('.staggered-animation-container') ); //function call with items and trigger
});


/*========== CONTACT FORM INPUT VALIDATION ==========*/

$(function () {

    // init the validator
    // validator files are included in the download package
    // otherwise download from http://1000hz.github.io/bootstrap-validator

    $('#contact-form').validator();


    // when the form is submitted
    $('#contact-form').on('submit', function (e) {

        // if the validator does not prevent form submit
        if (!e.isDefaultPrevented()) {
            var url = "contact.php";

            // POST values in the background the the script URL
            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data)
                {
                    // data = JSON object that contact.php returns

                    // we recieve the type of the message: success x danger and apply it to the 
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;

                    // let's compose Bootstrap alert box HTML
                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                    
                    // If we have messageAlert and messageText
                    if (messageAlert && messageText) {
                        // inject the alert to .messages div in our form
                        $('#contact-form').find('.messages').html(alertBox);
                        // empty the form
                        $('#contact-form')[0].reset();
                    }
                }
            });
            return false;
        }
    })
});


