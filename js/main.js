$(document).ready(function () {
  
  /* pre loader*/
  preloaderFadeOutTime = 700;
  function hidePreloader() {
    var preloader = $('.sk-chase');
    $('.whole-page').fadeIn();
    preloader.fadeOut(preloaderFadeOutTime);
  }hidePreloader();
  $('.load-layer').fadeOut();
  /* pre loader*/
  
  
  /*scroll to contact us*/
  /*scroll to contact us*/
  
  $(' nav li a').click(function(event){
    $('html , body').animate({
      scrollTop: $('#' + $(this).data("scrolling")).offset().top
    }, 1000);
  }); 
 
  /*scroll to contact us*/
  /*scroll to contact us*/
  
  $(window).scroll(function() {
    if ($(this).scrollTop() > 30) {
    $('nav').addClass('bg-light');
    } else {
      $('nav').removeClass('bg-light');      
    }
  });
  
  
  
  //go to top buttom
  $(window).scroll(function() {
    if ($(this).scrollTop() > 650) {
      $('#go-top').fadeIn();
    } else {
      $('#go-top').fadeOut();      
    }
  });
  
  $("#go-top").on("click", function(){
    $('html, body').animate({scrollTop:0}, '300');  
  });
  
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


var c= {
 name : "the c object",
 log : function(){
  this.name= 'updated the c object';
  console.log(this);
 }   
}