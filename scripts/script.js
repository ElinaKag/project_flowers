'use strict';

$(document).ready(function () {

    new WOW({
        animateClass: 'animate__animated',
    }).init();

    $('.popup-link').magnificPopup({
        type: 'image'
    });

    // $(".multiple-items").slick({
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 3,
    //     slidesToScroll: 3,
    // });

    $(".responsive").slick({
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 590,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });


    $("#menu").on("click", "a", function (event) {
        event.preventDefault();
        let id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });


    $('#show').click(function () {
        $('html, body').animate({scrollTop: $('.products').offset().top}, 1500);
    })


    $('.bonus-button').click(function () {
        $('html, body').animate({scrollTop: $('.products').offset().top}, 1500);
    })


    $('.second').click(function () {
        $('.type-two').css('display', 'block')
        $('.type-one').css('display', 'none')
        $('html, body').animate({scrollTop: $('#type-two').offset().top}, 1000);
        $('.second').addClass('active');
        $('.first').removeClass('active');

    })

    $('.first').click(function () {
        $('.type-one').css('display', 'block')
        $('.type-two').css('display', 'none')
        $('html, body').animate({scrollTop: $('#type-one').offset().top}, 1000);
        $('.first').addClass('active')
        $('.second').removeClass('active')

    })


    $('.product-button').click(function () {
        $('.popup-forms').css('display', 'flex');
    })

    $('#submit').click(function () {
        let name = $('#name');
        let phone = $('#phone');
        let order = $('#order');
        let hasError = false;

        $(".error-input").hide();
        $(".order-input").css('border-color', '#273C11')
        $(".order-textarea").css('border-color', '#273C11')


        if (!name.val()) {
            name.next().show();
            name.css('border-color', 'red');
            hasError = true;
        }
        if (!phone.val()) {
            phone.next().show();
            phone.css('border-color', 'red');
            hasError = true;
        }
        if (!order.val()) {
            order.next().show();
            order.css('border-color', 'red');
            hasError = true;
        }
        if (!hasError) {
            $.ajax({
                method: "POST",
                url: "https://testologia.site/checkout",
                data: {name: name.val(), phone: phone.val(), order: order.val()}
            })
                .done(function (msg) {
                    if (msg.success) {
                        $('.popup-mercy').css('display', 'flex');
                        $('.popup-forms').css('display', 'none');
                    } else {
                        alert("Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ.");
                    }
                    $('#form')[0].reset();
                });
        }
    })

    $('.quit').click(function () {
        $('.popup-forms').css('display', 'none');
        $('.popup-mercy').css('display', 'none');
        $('.popup-call').css('display', 'none');
        $('#form')[0].reset();
        $('#call-form')[0].reset();
    })

    $('.mercy-button').click(function () {
        $('.popup-mercy').css('display', 'none');
    })


    $('.call-button').click(function () {
        $('.popup-call').css('display', 'flex');
    })

    $('#callback').click(function () {
        let mobile = $('#mobile');
        let hasError = false;

        $(".error-input").hide();
        $(".order-input").css('border-color', '#273C11')

        if (!mobile.val()) {
            mobile.next().show();
            mobile.css('border-color', 'red');
            hasError = true;
        }

        if (!hasError) {
            $.ajax({
                method: "POST",
                url: "https://testologia.site/checkout",
                data: {mobile: mobile.val(), name: 'itlogia'}
            })
                .done(function (msg) {
                    if (msg.success) {
                        $('.success').css('display', 'flex');

                    } else {
                        alert("Возникла ошибка, позвоните нам и сделайте заказ.");
                    }
                    $('#call-form')[0].reset();
                });
        }
    })


    document.getElementById('burger').onclick = function () {
        document.getElementById('menu').classList.add('open');
    }
    document.querySelectorAll('#menu *').forEach((item) => {
        item.onclick = () => {
            document.getElementById('menu').classList.remove('open');
        }
    })

});


