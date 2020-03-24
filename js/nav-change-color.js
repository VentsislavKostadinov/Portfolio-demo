$(document).ready(function(){

    $(window).scroll(function(){

        let scroll = $(window).scrollTop();
        let viewWidth = $(window).width();
        let btn = $('#top-button');

        // Desktop navigation scroll change opacity
        
        if (scroll > 420) {
            $(".navbar").css({'background' : '#000000', 'opacity' : '0.7'});
        }
       else {
           $(".navbar").css({'background' : 'transparent', 'opacity': '1'});
       }

       // For Mobile: max-width 991px and scrolling 220px hide navigation and showing pop-tip button - Go to top

       if(viewWidth <= 991 && scroll > 220) {
           $('.fixed-top').css({'visibility' : 'hidden'});
           btn.css({'display' : 'block'});

       } else {
           $('.fixed-top').css({'visibility' : 'visible'});
           btn.css({'display' : 'none'});
       }

      btn.on('click', function (e) {

          e.preventDefault();
          $('html, body').animate({scrollTop:0}, '300');
      })

    });


});