$(function () {
    $(window).on('scroll', function () {
        let num = $(window).scrollTop();

        if (num > 0) {
            $('.header').addClass('on')
        } else {
            $('.header').removeClass('on')
        }

        if (num > 800) {
            $('.to_top').addClass('on')
        } else {
            $('.to_top').removeClass('on')
        }
    });

    $('.to_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 1000)
    })
});

$(function () {
    lucide.createIcons();
});

$(function () {
    const main_visual_slide = new Swiper('.main_visual_slide', {
        effect: 'fade',
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        fadeEffect: {
            crossFade: true
        },
        pagination: {
            el: '.main_visual .page',
            clickable: true,
        },
        navigation: {
            nextEl: '.main_visual .arrows .next',
            prevEl: '.main_visual .arrows .prev',
        },
        speed: 1000
    });

    const main_info_slide = new Swiper('.main_info_slide', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 24,
        breakpoints: {
            640: {
                slidesPerView: 2
            },
            1024: {
                slidesPerView: 3,
            }
        },
        pagination: {
            el: '.main_info .page',
            clickable: true,
        },
        navigation: {
            nextEl: '.main_info .arrows .next',
            prevEl: '.main_info .arrows .prev',
        },
    })
});

$(function () {
    $('.tab_menu li').on('click', function (e) {
        e.preventDefault();

        $(this).addClass('on').siblings().removeClass('on');

        let idx = $(this).index();
        $('.tab_item').eq(idx).addClass('on').siblings().removeClass('on');

        window.dispatchEvent(new Event('resize'));
    });

    const main_info_slide = new Swiper('.main_info_slide', {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: '.main_business .next',
            prevEl: '.main_business .prev',
        },
        breakpoints: {
            1024: { slidesPerView: 3 },
            0: { slidesPerView: 1 }
        }
    });
});