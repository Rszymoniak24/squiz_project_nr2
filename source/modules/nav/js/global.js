if((navigator.userAgent.indexOf("MSIE 10") != -1 ))
ievar=true;
if(!ievar){


  $('.searchfield').removeClass('searchfield_nojs');
  $('.searchfield').removeClass('searchinput_nojs');
  $('.navi').removeClass('navi_nojs');
  $('.navi--bottom__menu').removeClass('navi--bottom__menu_nojs');
  $('.hamb').removeClass('hamb_nojs');

  $( ".cross" ).hide();
  $( ".hamburger" ).click(function() {
    $( ".navi--bottom__menu" ).slideToggle( 400, function() {
      $( ".hamburger" ).hide();
      $( ".cross" ).show();
    });
    $('.navi').animate({height:'340px'}, 500);
  });
  $( ".cross" ).click(function() {
    $( ".navi--bottom__menu" ).slideToggle( 400,function() {
      $( ".cross" ).hide();
      $( ".hamburger" ).show();
    });
    $('.navi').animate({height:'115px'}, 500);
  });

}
