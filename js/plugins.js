$(document).ready(function () {

    /*call slick slider*/

    $('.demo').slick({
        dots: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 2,
        slidesToScroll: 2,

    });

    /* call owl slider*/
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })
    
    /* use niceScroll*/
    $("html").niceScroll({ horizrailenabled: false });
    /* end nice scroll*/

    $('.carousel').carousel({
        interval: 2000
    });

    /* show color box when select gear*/
    $(".gear-check").click(function () {
        $(".color-option").fadeToggle();
    });

    /* change color-option ul li*/
    var colorLi = $(".color-option ul li");
    colorLi.eq(0).css("backgroundColor", "#E41B17").end()
        .eq(1).css("backgroundColor", "#a63cb9").end()
        .eq(2).css("backgroundColor", "#f3e10a").end()
        .eq(3).css("backgroundColor", "#c19669").end()
        .eq(4).css("backgroundColor", "#f7b2ee").end();

    colorLi.click(function () {
        $("link[href *='theme']").attr("href", $(this).attr("data-value"));
    });

    //scroll top button

    // var scrollbutton = $("#scroll");
    // $(window).scroll(function(){
    //     // console.log( $("this").scrollTop() );
    //     if( $("this").scrollTop()>=700){
    //         scrollbutton.show();

    //     }
    //     else{
    //         scrollbutton.hide();
    //     }

    // });

});

/* loading screen*/
$(window).on('load', function () {
    $(".loading , .loading .sk-folding-cube").fadeOut(2000);
});/*ليه اللودنج مش بيختفى*/
