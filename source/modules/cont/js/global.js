
//if((navigator.userAgent.indexOf("MSIE 8") != -1 ) || (navigator.userAgent.indexOf("MSIE 9") != -1 ) || (navigator.userAgent.indexOf("MSIE 7") != -1 ) )
//{
/*$(".form__2--error--name").show('slow');
$(".form__2--error--email").show('slow');
$(".form__2--error--address").show('slow');
$(".form__2--error--city").show('slow');*/
//$(".form__2__nojs").animate({height:'320px'}, 400);
//$("#credit--card__input").css( "border", "1px solid #bbb" );
//$(".step_3__nojs").css( "border", "1px solid #bbb" );
//$(".step_2__nojs").css( "border", "1px solid #bbb" );
//$(".step_4__nojs").css( "border", "1px solid #bbb" );


//}


if((navigator.userAgent.indexOf("MSIE 10") != -1 ))
ievar=true;
if(!ievar){
  $(".step_4__nojs").addClass('on--border');

  $('.test').toggleClass('form__1--slider__nojs');
  $('.test').toggleClass('form__1--slider');
  $('.slider').toggleClass('hide');
  $('#red--price').toggleClass('hide');
  $('.input__nojs').toggleClass('hide');
  $('.form__2').toggleClass('form__2__nojs');
  $('.form__1').toggleClass('form__1__nojs');
  $('.form__3').toggleClass('form__3__nojs');
  $('#submit').show();
  $('#realsubmit').hide();
  $('.navi--top__search__fake').show();
  $('.navi--top__search').hide();
  $('.cc_2').toggleClass('step_2__nojs');
  $('.cc_3').toggleClass('step_3__nojs');
  $('.cc_4').toggleClass('step_4__nojs');
  $('.bigdolar').hide();
  $('.cc_2').attr('id','credit--card__input__step--2');
  $('.cc_3').attr('id','credit--card__input__step--3');
  $('.cc_4').attr('id','credit--card__input__step--4');
  $("#credit--card__input").attr('maxlength','19');
  $('#credit--card__input').toggleClass('on--border');
  $('.cc_2').toggleClass('on--border');
  $('.cc_3').toggleClass('on--border');
  $('.cc_4').toggleClass('on--border');
  $('.font__12').toggleClass('font__12__ie7');


  var tablet = Modernizr.mq('(max-width: 1000px)');
  var mobile = Modernizr.mq('(max-width: 800px)');



  var showVal=function(){
    document.getElementById("output").innerHTML=document.getElementById("input").value;
    document.getElementById("output__slider").innerHTML=document.getElementById("input").value;

    var donate=document.getElementById("input").value;
    $('.input__nojs').val(donate);
    if (donate <= 100){
      $('#donate--text').html(' goes a long way. If you\'d like to consider becoming a sponsor, please contact us');
    }
    if (donate <= 80){
      $('#donate--text').html(' can help us expand this product to other platforms');
    }
    if (donate <= 50){
      $('#donate--text').html(' can help us improve this product');
    }
    if (donate <= 20){
      $('#donate--text').html(' will let us to add a few new modules');
    }
    //var donate2=document.getElementById("input").value;
    document.styleSheets[1].cssRules[71].style.backgroundSize = donate +"% 100%";

    var badge = $('#slider--price');
    if(mobile && donate>33 && donate<66)
    donate=donate-5;
    else if(donate>=66 && donate<=87 && mobile)
    donate=donate-8;
    else if(donate>=88 && mobile)
    donate=donate-11;

    else
    donate=donate-2.8;
    /*badge.css({
    'left': donate+'%'
  });
  */
  document.getElementById("slider--price").style.left=donate+'%';

}/*
$(window).on("resize",function(){

    showVal();
}

);*/

/*$(".form__1--slider").on("mousemove",function(e){

document.getElementById("slider--price").style.left=e.pageX-500+"%";


});*/

$(".navi--top__search__fake").click(
  function(){
    $(".searchfield").show();
    $(".searchinput").show();
    $(".navi--top__search").show();
    $(".navi--top__search__fake").hide();

    //  $(".searchfield").animate({width:'250px'},400);
    //  $(".searchinput").animate({width:'229px'},400);
    $(".searchinput").focus();
  })
  $(".form--search ").mouseleave(
    function(){
      var type=$('input[name="search"]').val()
      if(!type=="")
      return true;
      //  $(".searchfield").show();
      //  $(".searchfield").animate({'width':'0px'},400);
      //    $(".searchinput").animate({'width':'0px'},400);
      $(".searchfield").hide();
      $(".searchinput").hide();
      $(".navi--top__search").hide();
      $(".navi--top__search__fake").show();
    })

    $( "#submit" ).click(function(e) {
      var clientHeight = document.getElementsByClassName('form__2').clientHeight;
      var dolar= document.getElementById("output").innerHTML;

      if(dolar==0)
      {
        $("#error__no--dolar").show("slow");
        return;
      }

      $("#error__no--dolar").hide("slow");

      if($('.form__2').height()>0 && !validate__all() && $('.form__3').height()==0)
      {
        $(".donate__error").show("slow");
        return;
      }
      if($('.form__3').height()>0 && !validate__cc__step_4())
      {
        $(".donate__error").show("slow");
        return;
      }
      $(".donate__error").hide("slow");

      if($('.form__2').height()==0)
      {
        $('.form__2').show();
        if (mobile)
        $('.form__2').animate({height:'600px'}, 400);
        else if(tablet)
        $('.form__2').animate({height:'525px'}, 400);

        else
        $('.form__2').animate({height:'350px'}, 400);
      }
    });



    var validate__name=function(){
      var nameval=$('#form__2--name').val();
      var namelength=nameval.length;
      if(namelength==0)
      return false;

      if(regex__name()==false)
      {
        $(".form__2--error--name").show("slow");
        $("#form__2--name").css("border-color", "#a80c1e");
      }
      else
      {
        $(".form__2--error--name").hide("slow");
        $("#form__2--name").css("border-color", "#bbb");

        return true;
      };
    };

    var validate__email=function(){
      var nameval=$('#form__2--email').val();
      var namelength=nameval.length;
      if(namelength==0)
      return false;
      if(regex__email()==false)
      {
        $(".form__2--error--email").show("slow");
        $("#form__2--email").css("border-color", "#a80c1e");
      }
      else
      {
        $(".form__2--error--email").hide("slow");
        $("#form__2--email").css("border-color", "#bbb");
        return true;
      };
    };
    var validate__address=function(){
      var nameval=$('#form__2--address').val();
      var namelength=nameval.length;
      if(namelength==0)
      return false;
      if(regex__address()==false )
      {
        $(".form__2--error--address").show("slow");
        $("#form__2--address").css("border-color", "#a80c1e");
      }
      else
      {
        $(".form__2--error--address").hide("slow");
        $("#form__2--address").css("border-color", "#bbb");
        return true;
      };
    };

    var validate__city=function(){
      var nameval=$('#form__2--city').val();
      var namelength=nameval.length;
      if(namelength==0)
      return false;
      if( regex_city()==false)
      {
        $(".form__2--error--city").show("slow");
        $("#form__2--city").css("border-color", "#a80c1e");
      }
      else
      {
        $(".form__2--error--city").hide("slow");
        $("#form__2--city").css("border-color", "#bbb");
        return true;
      };
    };

    var validate__all=function(){

      if( validate__city() &&  validate__email() &&  validate__address() &&  validate__name() && $('.form__3').height()==0)
      {
        $('#credit--card__input').focus();
        $(".donate__error").hide("slow");
        $('.form__3').show();
        $('.form__3').animate({height:'145px'});


      }
      else {
        return false;
      }
    };

    var regex__name=function(){
      var email = document.getElementById('form__2--name').value;
      var filter = /^[a-zA-Z ]{3,30}\s[a-zA-Z]{3,30}$/;
      if (filter.test(email)) {
        return true;
      }
      else
      {return false;}
    }
    var regex__address=function(){
      var email = document.getElementById('form__2--address').value;
      var filter = /^[A-Za-z0-9 _,]*[A-Za-z0-9][A-Za-z0-9 _,]*$/;
      if (filter.test(email)) {
        return true;
      }
      else
      {return false;}
    }
    var regex__email=function(){
      var email = document.getElementById('form__2--email').value;
      var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      if (filter.test(email)) {
        return true;
      }
      else
      {return false;}
    }
    var regex_city=function(){
      var city = document.getElementById('form__2--city').value;
      var filter = /^[A-Za-z]+,[ ]?[A-Za-z]{2,}$/;
      if (filter.test(city))
      {
        return true;
      }
      else{
        return false;
      }
    }


    $("#credit--card__input").inputmask({ mask: "9999-9999-9999-9999" });
    $("#credit--card__input__step--2").inputmask({ mask: "99/99" });
    $("#credit--card__input__step--3").inputmask({ mask: "999" });
    $("#credit--card__input__step--4").inputmask({ mask: "99999" });


    var validate__cc=function(){
      /*  var cc = document.getElementById('credit--card__input').value;
      var visa=/^[4][0-9]{14}$/;
      if(visa.test(cc)){
      $("credit--card__input").addClass("visa");
    }*/
    var nameval=$('#credit--card__input').val();
    var namelength=nameval.length;
    if(namelength==0)
    return false;
    if( document.getElementById('credit--card__input').value === '' || regex_credit_card()==false)
    {
      $("#credit--card__input-container").css("border-color", "#a80c1e");
      $('.font__12').html('Please enter your card number');

    }
    else
    {
      $("#credit--card__input-container").css("border-color", "#bbb");
      $("#credit--card__input__step--2").show("slow");

      $("#credit--card__input__step--2").focus();
      if(mobile)
      $("#credit--card__input").hide("slow");
      add_master_cc();
      validate__cc__step_2();
    };
  };



  var validate__cc__step_2=function(){
    $('.font__12').html('Please enter your card\'s expiration month and year');
    $('.credit--card__input--error').html('Please enter correct card\'s expiration month and year');

    var nameval=$('#credit--card__input__step--2').val();
    var namelength=nameval.length;
    if(namelength==0)
    return false;

    if( document.getElementById('credit--card__input__step--2').value === '' || regex_credit_card__step_2()==false)
    {
      $("#credit--card__input-container").css("border-color", "#a80c1e");
    }
    else
    {
      $("#credit--card__input-container").css("border-color", "#bbb");
      $("#credit--card__input__step--3").show("slow");
      $("#credit--card__input__step--3").focus();
      validate__cc__step_3();
    }
  }
  var add_back_cc=function(){
    $('.card__ico').addClass('back');

  }
  var add_master_cc=function(){
    $('.card__ico').addClass('mastercard');

  }

  var validate__cc__step_3=function(){
    $('.card__ico').addClass('back');
    $('.credit--card__input--error').html('Please enter correct CVC number');
    $('.font__12').html('Please enter CVC number');
    var nameval=$('#credit--card__input__step--3').val();
    var namelength=nameval.length;
    if(namelength==0)
    return false;


    if( document.getElementById('credit--card__input__step--3').value === '' || regex_credit_card__step_3()==false)
    {
      $("#credit--card__input-container").css("border-color", "#a80c1e");

    }
    else
    {
      $("#credit--card__input-container").css("border-color", "#bbb");
      $("#credit--card__input__step--4").show("slow");

      $("#credit--card__input__step--4").focus();
      validate__cc__step_4();

    }
  }
  var validate__cc__step_4=function(){
    $('.card__ico').removeClass('back');

    $('.credit--card__input--error').html('Please enter correct ZIP code');
    $('.font__12').html('Please enter ZIP code');
    var nameval=$('#credit--card__input__step--4').val();
    var namelength=nameval.length;
    if(namelength==0)
    return false;


    if( document.getElementById('credit--card__input__step--4').value === '' || regex_credit_card__step_4()==false)
    {
      $("#credit--card__input-container").css("border-color", "#a80c1e");
      $(".credit--card__input--correct").hide("slow");

    }
    else
    {
      $(".donate__error").hide("slow");
      $("#credit--card__input-container").css("border-color", "green");
      $(".credit--card__input--correct").show("slow");

      $("#submit").hide();
      $("#realsubmit").show();
    }
  }


  var regex_credit_card=function(){
    var cc = document.getElementById('credit--card__input').value;

    var filter = /(?:\d[ -]?){15}\d/;
    if (filter.test(cc))
    {
      return true;
    }
    else{
      return false;
    }
  }
  var regex_credit_card__step_2=function(){
    var cc = document.getElementById('credit--card__input__step--2').value;
    var filter = /^((1[012])|(0[1-9]))[/]((1[6-9])|(2[1-9]))$/; //invalid regex
    if (filter.test(cc))
    {
      return true;
    }
    else{
      return false;
    }
  }
  var regex_credit_card__step_3=function(){
    var cc = document.getElementById('credit--card__input__step--3').value;
    var filter = /(?:\d[ -]?){2}\d/;
    if (filter.test(cc))
    {
      return true;
    }
    else{
      return false;
    }
  }
  var regex_credit_card__step_4=function(){
    var cc = document.getElementById('credit--card__input__step--4').value;
    var filter = /(?:\d[ -]?){4}\d/; //invalid regex
    if (filter.test(cc))
    {
      return true;
    }
    else{
      return false;
    }
  }
}
