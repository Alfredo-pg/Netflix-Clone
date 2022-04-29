$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1.2
        },
        600:{
            items:3.2
        },
        1000:{
            items:6.2
        }
    }
})

$(window).scroll(function() {
    if ($(window).scrollTop() >= 50) {
      $('.navbar').css('background', 'black');
    } else {
      $('.navbar').css('background', 'transparent');
    }
});