// remap jQuery to $
(function($){})(window.jQuery);

$(document).ready(function (){

/*-----------------------------------------------------------------------------------*/
/*  FOOTER COPYRIGHT YEAR
/*-----------------------------------------------------------------------------------*/
    var currentYear = (new Date).getFullYear();
    $('span.date').text(currentYear);

/*-----------------------------------------------------------------------------------*/
/*  FRONTPAGE IMAGE OVERLAYS
/*-----------------------------------------------------------------------------------*/
    $('.bar').mosaic({
      animation : 'slide'
    });

/*-----------------------------------------------------------------------------------*/
/*  INPUT WATERMARKS (PLACEHOLDERS)
/*-----------------------------------------------------------------------------------*/
  $('.jq_watermark').watermark();

/*-----------------------------------------------------------------------------------*/
/*  CONTACT FORM
/*-----------------------------------------------------------------------------------*/
  $("#ajax-contact-form").submit(function() {
    var str = $(this).serialize();

    $.ajax({
      type: "POST",
      url: "includes/contact-process.php",
      data: str,
      success: function(msg) {
          // Message Sent? Show the 'Thank You' message
          if(msg == 'OK') {
            result = '<div class="notification_ok">Your message has been sent. Thank you!</div>';
            //$("#fields").hide();
          } else {
            result = msg;
          }
          $('#note').html(result);
      }
    });
    return false;
  });

/*-----------------------------------------------------------------------------------*/
/*  HOMEPAGE SLIDER - thanks to user Samich: http://jsfiddle.net/GPuh6/23/light/
/*-----------------------------------------------------------------------------------*/

$('.slider .slide:first').addClass('active').fadeIn(200);

function rotate(index) {
  $('.slider .slide.active').removeClass('active').fadeOut(300, function() {
    $('.slider .slide:eq(' + index + ')').addClass('active').fadeIn(300);
  });   
}

$('.slider-nav li a').click(function() {    
  var index = $(this).parent().index('li');
  rotate(index);
  return false;
});


});