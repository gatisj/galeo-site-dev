(function($) {

  $(document).ready(function(){

    $('.sky-part:not(.sky-part-v2)').css({minHeight: $(window).height()});


    $(window).scroll(function(){
      parallax()
    }).load(function(){
      parallax();
    }).resize(function(){
      $('.sky-part').css({minHeight: $(window).height()});
      parallax();
    });

    function parallax(){
      $('[data-parallax]').each(function(){
        var bgOff =  (($(window).scrollTop() - $(this).offset().top) / $(this).height()) * parseFloat($(this).attr('data-speed') * 100);

        console.log(bgOff);
        var pos = 'center ' + $(this).attr('data-from') + ' -' + bgOff + 'px';
        $(this).css('background-position', pos);
      });
    }

    $('.select select').selectBoxIt();

    $('.textarea-style').on('change, keyup', function(){
      $(this).height(0).height( $(this)[0].scrollHeight - 10 );
    });


  });

})(jQuery);