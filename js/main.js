$(function () {
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        if (sct > 0) {
            $('.header').addClass('on')
        } else {
            $('.header').removeClass('on')
        }
    })

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        if (sct < 2800) {
            $('.to_top').addClass('on')
        } else {
            $('.to_top').removeClass('on')
        }
    });



    $('.main_slide').on('init afterChange', function (e, s, c) {
        let _this = $(this).find('.slick-current');
        _this.addClass('on').siblings().removeClass('on');


    });

    $('.main_slide').slick({
        dots: true,
        autoplay: true,
        arrows: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        centerMode: true,
    });


    $('.main_visual .arrows .left').on('click', function () {
        $('.main_slide').slick('slickPrev')
    });
    $('.main_visual .arrows .right').on('click', function () {
        $('.main_slide').slick('slickNext')
    });

    $(".tab_title li").click(function () {
        var idx = $(this).index();
        $(".tab_title li").removeClass("on");
        $(".tab_title li").eq(idx).addClass("on");
        $(".tab_cont > div").hide();
        $(".tab_cont > div").eq(idx).show();
    })

    // $('.detail01 .itm').on('click', function (e) {
    //     $(this).addClass('on').siblings().removeClass('on');
    // })

})