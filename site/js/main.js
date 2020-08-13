 $(function(){
    $('.reviews-slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:false,
        dots:true,  
        responsive: [
            {
              breakpoint: 993,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },  ]
        });
}); 
$(document).ready(function () {
    $('.btn__menu').click(function () {
        $('.menu__list').slideToggle('');
    });
});

