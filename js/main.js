$(function () {
    let owl = $(".owl-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        dotsData: true,
        loop: true,
        nav: false,
        items: 1

    });

    $('.owl-dot').click(function () {
        owl.trigger('to.owl.carousel', [$(this).index(), 1500]);
    });

});

// OPEN CLOSE MENU 
$("#chek").change(function () {

    if ($(this).is(':checked')) {
        $('.nav-header').addClass('active');
      
    } else {
        $('.nav-header').removeClass('active');
    }
});

