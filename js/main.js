
function colReverse(){
  $("#about-me .col-rev").addClass("flex-column-reverse");
  console.log('added flex-column-reverse');
}

$(document).ready(function () {
  
  /*** pre loader  ***/
  preloaderFadeOutTime = 700;
  function hidePreloader() {
    var preloader = $('.sk-chase');
    $('.whole-page').fadeIn();
    preloader.fadeOut(preloaderFadeOutTime);
  } hidePreloader();
  $('.load-layer').fadeOut();
  /*** pre loader  ***/


  /**** Pc nav ****/
  $(' nav li a').click(function () {
    $('html , body').animate({
      scrollTop: $('#' + $(this).data("scrolling")).offset().top
    }, 2000);
  });
  /**** Pc nav ****/


  /***  Mobile nav ***/
  $(' navbar li a').click(function () {
    $('html , body').animate({
      scrollTop: $('#' + $(this).data("scrolling")).offset().top
    }, 2000);
  });
  $(".navbar li a").on("click", function (){
    $(".nav-toggle").click();
  });
  /***  Mobile nav ***/



  /* into Button */
  $('#home .big-btn').click(function () {
    $('html , body').animate({
      scrollTop: $('#' + $(this).data("scrolling")).offset().top
    }, 2000);
  });
  /* into Button */



  $("#go-top").on("click", function () {
    $('html, body').animate({ scrollTop: 0 }, 2000);
  });



  /*scrolling events */
  /*scrolling events */

  $(window).scroll(function () {

    //nav color scroll change
    if ($(this).scrollTop() > 30) {
      $('nav').addClass('bg-light');
    } else {
      $('nav').removeClass('bg-light');
    }

    //go to top buttom
    if ($(this).scrollTop() > 650) {
      $('#go-top').fadeIn();
    } else {
      $('#go-top').fadeOut();
    }

  });




  //go to top buttom

  let win = $(window);

  if (win.width() <= 991) {
    colReverse();
  };


  if (win.width() >= 1249) {
    $('#my-img').enllax();
    $('#min-projects').enllax();
    $('#sponsorship').enllax();
    let currentProjectHeight = $("#min-projects").height();
    let doubledProjectHeight = currentProjectHeight * 1.3;
    $("#min-projects").height(doubledProjectHeight);
  };



});

/*  Hamburger   */
/*  Hamburger   */
/*  Hamburger   */
(function() {
  
  var hamburger = {
    navToggle: document.querySelector('.nav-toggle'),
    nav: document.querySelector('navbar'),
    
    doToggle: function(e) {
      e.preventDefault();
      this.navToggle.classList.toggle('expanded');
      this.nav.classList.toggle('expanded');
    }
  };
  
  hamburger.navToggle.addEventListener('click', function(e) { hamburger.doToggle(e); });
  
}());


// function goBack() {
//   window.history.back();
// }



