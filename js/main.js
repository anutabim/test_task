$(document).ready(function () {
    $('input[name="phone"]').inputmask("+38(099)999-99-99");
    /*MODAL*/
    $(window).ready(function(){
        var modal = $('#popup-login');
        $('.modal-button').click(function(a) {
            modal.css('display', 'block');
            $("body").css({"overflow-y": "hidden"});
            $("html").addClass("modal-margin");
            a.preventDefault();
        });
        modal.click(function(event) {
            e = event || window.event;
            if (e.target == this) {
                $(modal).css('display', 'none');
                $("body").css({"overflow-y": "visible"});
                $("html").removeClass("modal-margin");
            }
        });
        $('.popup-close').click(function() {
            modal.css('display', 'none');
            $("body").css({"overflow-y": "visible"});
            $("html").removeClass("modal-margin");
        })
    });
    /*/ MODAL*/

    /*COUNTRY CHOOSE*/
    $(".choose-country").on('click',function () {
        if (!$(this).hasClass("active")) {
            $(this).addClass("active");
            $(this).find(".choose-country-list").slideToggle();
        } else{
            $(this).removeClass("active");
            $(this).find(".choose-country-list").slideToggle();
        }
    });
    $(".choose-country-element").on('click',function () {
        if (!$(this).hasClass("chosen")) {
            var a = $(this).text(), e = $(this).parents("form"), country_name = $(this).attr('data-country');
            e.find(".choose-country-list-text").val(a).removeClass('error'), e.find(".choose-country-element.chosen").removeClass("chosen"), $(this).addClass("chosen");
            e.find('input[name="country"]').val('');
        }
    });
    /*/ COUNTRY CHOOSE*/

    /*LANGUAGE CHOOSE*/
    $(".header-language").on('click',function () {
        if (!$(this).hasClass("active")) {
            $(this).addClass("active");
            $(this).find(".header-language-list").slideToggle();
        } else{
            $(this).removeClass("active");
            $(this).find(".header-language-list").slideToggle();
        }
    });
    $(".header-language-element").on('click',function () {
        if (!$(this).hasClass("chosen")) {
            var a = $(this).text(), e = $(this).parents(".header-language"), language_name = $(this).attr('data-language');
            e.find(".header-language-list-text").val(a).removeClass('error'), e.find(".header-language-element.chosen").removeClass("chosen"), $(this).addClass("chosen");
        }
    });
    /*/LANGUAGE CHOOSE*/

    /*SEARCH*/
    $(".search-icon").on('click',function () {
        var search_content = $('.search');
        if (!$(search_content).hasClass("active")) {
            $(search_content).addClass("active");
        } else{
            $(search_content).removeClass("active");
        }
    });
    /*/ SEARCH*/

    /*SLIDER*/
    $('.product-specs-slider').slick({
        prevArrow: '<div class="slick-prev"></div>',
        nextArrow: '<div class="slick-next"></div>',
        dots: true,
        fade: true,
        adaptiveHeight: true,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    fade: false
                }
            }
        ]
    });
    /*/SLIDER*/

    /*SCROLL VIEWPORT*/
    if ($(window).width() > 768) {
        $('.get-paid-item.first').addClass("viewport_hidden").viewportChecker({
            classToAdd: 'viewport_visible viewport_fadeindown',
            offset: 100
        });
        $('.get-paid-item.second').addClass("viewport_hidden").viewportChecker({
            classToAdd: 'viewport_visible viewport_fadeindown',
            offset: 100
        });
        $('.get-paid-item.third').addClass("viewport_hidden").viewportChecker({
            classToAdd: 'viewport_visible viewport_fadeindown',
            offset: 100
        });
        $('.security-item.first').addClass("viewport_hidden").viewportChecker({
            classToAdd: 'viewport_visible viewport_fadeleft',
            offset: 100
        });
        $('.security-item.third').addClass("viewport_hidden").viewportChecker({
            classToAdd: 'viewport_visible viewport_fadeleft',
            offset: 100
        });
        $('.security-item.second').addClass("viewport_hidden").viewportChecker({
            classToAdd: 'viewport_visible viewport_faderight',
            offset: 100
        });
        $('.security-item.fourth').addClass("viewport_hidden").viewportChecker({
            classToAdd: 'viewport_visible viewport_faderight',
            offset: 100
        });

    }
    /*/SCROLL VIEWPORT*/

    /*SECURITY*/
    $('.security-more').click(function(){
        var security_item = $(this).parents('.security-item');
        if (!$(security_item).hasClass("active")) {
            $(security_item).addClass("active");
        } else{
            $(security_item).removeClass("active");
        }
    });
    /*/SECURITY*/

    /*MENU*/
    $('.header-menu-open').click(function () {
        var gamburger_menu = $('.header-menu-wrap');
        if (!$(this).hasClass("active")) {
            $(this).addClass("active");
            $(gamburger_menu).addClass("active");
            $(gamburger_menu).css('display', 'block');
            $("body").css({"overflow-y": "hidden"});
            $("html").addClass("modal-margin");
        } else{
            $(this).removeClass("active");
            $(gamburger_menu).removeClass("active");
            $(gamburger_menu).css('display', 'none');

            $("body").css({"overflow-y": "visible"});
            $("html").removeClass("modal-margin");
        }
    });
    if ($(window).width() < 980) {
        $('.menu-link-gamburger-open').click(function () {
            var menu_submenu = $('.submenu');
            if (!$(this).hasClass("active")) {
                $(this).addClass("active");
                $(menu_submenu).addClass("active");
            } else {
                $(this).removeClass("active");
                $(menu_submenu).removeClass("active");
            }
        });
    }
    /*/MENU*/

    $.validator.addMethod('regexp', function(value, element, regexp) {
        var re = new RegExp(regexp);
        return this.optional(element) || re.test(value);
    }, "Некорректно");

    $('.form').each(function () {
        $(this).validate({
            debug: false,
            onfocusout: true,
            onKeyUp: true,
            rules: {
                first_name: {
                    required: true,
                    minlength: 2
                },
                country: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                phone: {
                    required: true
                }
            },
            messages: {
                first_name: {
                    required: "Enter your name",
                    minlength: $.validator.format( "At least {0} letters" )
                },
                country: {
                    required: "Choose your country"
                },
                email: {
                    required: "Enter your email"
                },
                phone: {
                    required: "Enter your phone number",
                    regexp: "Invalid"
                }
            },
            wrapper: "div",
            errorPlacement: function(error, element) {
                if(element.siblings('.errors_block').length>0){
                    element.siblings('.errors_block').html(error[0].textContent);
                }else{
                    element.after('<span class="errors_block">'+error[0].textContent+'</span>');
                }
            },
            success: function(element) {
                if(element.siblings('.errors_block').length>0){
                    element.siblings('.errors_block').remove();
                }
            }
        });
    });

});
