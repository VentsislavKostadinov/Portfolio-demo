
$(document).ready(function() {

    $(window).scroll(function () {

        let scroll = $(window).scrollTop();
        let viewWidth = $(window).width();
        let btn = $('#top-button');

        // Desktop navigation scroll change opacity

        if (scroll > 420) {
            $(".navbar").css({'background': '#000000', 'opacity': '0.7'});
        } else {
            $(".navbar").css({'background': 'transparent', 'opacity': '1'});
        }

        // For Mobile: max-width 991px and scrolling 220px hide navigation and showing pop-tip button - Go to top

        if (viewWidth <= 991 && scroll > 220) {
            $('.fixed-top').css({'visibility': 'hidden'});
            btn.css({'display': 'block'});

        } else {
            $('.fixed-top').css({'visibility': 'visible'});
            btn.css({'display': 'none'});
        }

        btn.on('click', function (e) {

            e.preventDefault();
         window.scrollTo({top: 0, behavior: 'smooth'});
        
        });
    });

    // Scrolling

    let scrollLink = $('.scroll');

    // Smooth scrolling
    scrollLink.click(function (e) {
        e.preventDefault();
        $('body, html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000);
    });

    // Active link switching
    $(window).scroll(function () {
        let scrollbarLocation = $(this).scrollTop();

        scrollLink.each(function () {

            let sectionOffset = $(this.hash).offset().top - 20;

            if (sectionOffset <= scrollbarLocation) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        })

    })
});


