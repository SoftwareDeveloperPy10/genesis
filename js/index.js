$(function(){
    let owl= $(".owl-carousel").owlCarousel({
        autoplay : true,
        dots : true,
        dotsData : true,
        loop : true,
        nav : false,
        items: 1
        
    });

    $('.owl-dot').click(function() {
        owl.trigger('to.owl.carousel',[$(this).index(),1500]);
    });




});