$(function(){
  $('.menu').on('click',function(){
    $('.main_menu').toggleClass('main_menu_open');
    $(this).toggleClass('menu_open');
  });
});

$(function(){
  $('.slider').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
  });
});

$(function(){
  $(window).scroll(function (){
      $('.under__box').each(function(){
          var position = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > position - windowHeight + 200){
              $(this).addClass('active');
          }
      });

      $('.theme').each(function(){
        var position = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > position - windowHeight + 200){
            $(this).addClass('move');
        }
    });

    $('.color').each(function(){
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > position - windowHeight + 200){
          $(this).addClass('move');
      }
    });

    $('.guide').each(function(){
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > position - windowHeight + 200){
          $(this).addClass('after');
      }
    });

    $('.online').each(function(){
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > position - windowHeight + 200){
          $(this).addClass('after');
      }
    });


  });
});