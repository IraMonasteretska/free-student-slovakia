$(document).ready(function () {
    // input mask
    if ($(".phoneinp").length) {
        $('.phoneinp').inputmask({
            "mask": "99 /999/ 9999999",
            showMaskOnHover: false,
            showMaskOnFocus: false,
        });
    }

    // slider

    $('.universities__litslider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        focusOnSelect: true,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                },
            },
        ],
    });

    // accordeon
    $('.specialization__header').click(function () {
        $(this).toggleClass('open');
        $(this).next('.specialization__body').slideToggle();
    });

    $('.faq__header').click(function () {
        $(this).toggleClass('open');
        $(this).next('.faq__body').slideToggle();
    });

    // ---
    $('.arrowtoggle').click(function () {
        $(this).prev().slideToggle();
        $(this).toggleClass('rotate');
    });

    // datepicker
    if ($('body *').is('.datepicker')) {
        $('.datepicker').datepicker({
            autoclose: true,
            todayHighlight: true,
            orientation: 'bottom',
            format: 'dd/mm/yyyy',
        });
    }
    // form styler
    if ($('body *').is('select')) {
        $(function () {
            $('input, select').styler();
        });
    }




});