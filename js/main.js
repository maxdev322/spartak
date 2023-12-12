$(document).ready(function () {

    // videojs(document.querySelector('.video-js'))
    Marquee3k.init();

    // videojs(document.querySelector('.video-js'))

    // $('.faq__item').on('click', function () {
    //     $('.faq__item_desc')
    // })

    const swiper = new Swiper('.swiper', {
        // Optional parameters
        // direction: 'gorizontal',
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
        centeredSlides: true,

        allowTouchMove: false
        // allowSlideNext: false,
        // allowSlidePrev: false,
    });

    $(document).ready(function () {
        $('.faq__item').click(function () {
            $(this).find('.faq__item_desc').slideToggle();
            $(this).find('.faq__item_btn').toggleClass('rotate');
        });
    });

    // остановка видео
    $('.swiper-button-prev, .swiper-button-next').on('click', function () {
        var allVideos = document.querySelectorAll('video');
        allVideos.forEach(function (video) {
            if (!video.paused) {
                video.pause();
                video.currentTime = 0; // Сбросить время видео до начала
            }
        });
    });


    $('.header__burger').on('click', function () {
        $('html').toggleClass('active')
        $('.header__burger').toggleClass('active')
        $('.header__burger_wrap').toggleClass('active')
        // $('.header__burger_wrap').show()
    })

    $('.header__burger_nav_link').on('click', function () {
        $('html').toggleClass('active')
        $('.header__burger').toggleClass('active')
        $('.header__burger_wrap').toggleClass('active')
    })

    // Получаем текущую дату
    let currentDate = new Date();

    // Получаем текущее число месяца
    let currentDayOfMonth = currentDate.getDate();

    // Вычисляем значение по формуле
    let result = 70 - (currentDayOfMonth + 2);

    // Находим элемент с классом stock__abons_count
    let abonsCountElement = document.querySelector('.stock__abons_count');

    // Устанавливаем полученное значение как текст в этот элемент
    abonsCountElement.textContent = result;

})