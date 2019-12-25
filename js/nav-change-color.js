$(document).ready(function(){
    $(window).scroll(function(){
        let scroll = $(window).scrollTop();
        if (scroll > 420) {
            $(".navbar").css({'background' : '#000000', 'opacity' : '0.7'});

        }

       else{
           $(".navbar").css({'background' : 'transparent', 'opacity': '1'});
       }
    })
});