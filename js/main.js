var phoneMask = IMask(
    document.getElementById('InputPhone1'), {
    mask: '+{7}(000)000-00-00'
});

var phoneMask = IMask(
    document.getElementById('InputPhone2'), {
    mask: '+{7}(000)000-00-00'
});

var phoneMask = IMask(
    document.getElementById('InputPhone3'), {
    mask: '+{7}(000)000-00-00'
});

const swiper = new Swiper('.swiper-1', {
    loop: false,
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
    },
});


$(document).ready(function () {

    $(".section-02 .quiz-wrap .quiz-step .pol1 .btn-next a:not(.button)").click(function () {
        $(".section-02 .quiz-wrap .quiz-step").hide();
        $(".section-02 .quiz-wrap .quiz-step#" + $(this).attr("data-class")).show();
        return false;
    });

    $(".section-02 .quiz-wrap .quiz-step .pol1 .btn-next a.button").click(function () {
        $(".section-02 .skrit input").click()
        return false;
    });

    setInterval(function () {
        var $summa = 0;
        var $ekranov = 0;
        var $sum_ekran = 0;
        var $sum_logo = 0;
        var $sum_napolne = 0;
        var $sum_dopo = 0;
        var $sum_cms = 0;
        var $sum_stranic = 0;
        var $sum_dopo2 = 0;
        var $sum_cms2 = 0;
        if ($("#shag1 .vibor input:checked").val() == "Одностраничный сайт (лендинг)") {
            $ekranov = parseInt($("#shag2 .vibor input[name='number-741']").val());
            $ekranov = parseInt($ekranov - 8);
            $sum_ekran = parseInt($ekranov * 5500);
            if ($("#shag3 .vibor input:checked").val() == "Сложное лого") {
                $sum_logo = 5000;
            }
            $summa = parseInt(44000 + $sum_ekran + $sum_logo);
            $(".section-02 .quiz-wrap .quiz-step .pol1 .podzag .price div").text($summa.toLocaleString());
        }
        if ($("#shag1 .vibor input:checked").val() == "Интернет-магазин") {
            $("#shag10 .vibor input:checked").each(function () {
                if ($(this).val() == "Массовый импорт товаров") {
                    $sum_napolne = parseInt($sum_napolne + 20000);
                }
                if ($(this).val() == "Дополнительные уровни доступа пользователей") {
                    $sum_napolne = parseInt($sum_napolne + 20000);
                }
                if ($(this).val() == "Интеграция с CRM-системой") {
                    $sum_napolne = parseInt($sum_napolne + 20000);
                }
                if ($(this).val() == "Онлайн-оплата") {
                    $sum_napolne = parseInt($sum_napolne + 10000);
                }
                if ($(this).val() == "Личный кабинет") {
                    $sum_napolne = parseInt($sum_napolne + 10000);
                }
            });
            $("#shag11 .vibor input:checked").each(function () {
                if ($(this).val() == "Главная страница" || $(this).val() == "Каталог товаров") {

                } else {
                    if ($(this).val() == "Страница о компании" || $(this).val() == "Страница контакты") {
                        $sum_dopo = parseInt($sum_dopo + 15000);
                    } else {
                        $sum_dopo = parseInt($sum_dopo + 20000);
                    }
                }
            });
            if ($("#shag12 .vibor input:checked").val() == "Bitrix") {
                $sum_cms = 50000;
            }
            $summa = parseInt(150000 + $sum_napolne + $sum_dopo + $sum_cms);
            $(".section-02 .quiz-wrap .quiz-step .pol1 .podzag .price div").text($summa.toLocaleString());
        }
        if ($("#shag1 .vibor input:checked").val() == "Корпоративный сайт услуг") {
            $("#shag20 .vibor input:checked").each(function () {
                if ($(this).val() == "Страница о нас") {
                    $sum_stranic = parseInt($sum_stranic + 20000);
                }
                if ($(this).val() == "Страница кейсы/отзывы") {
                    $sum_stranic = parseInt($sum_stranic + 20000);
                }
                if ($(this).val() == "Страница контакты") {
                    $sum_stranic = parseInt($sum_stranic + 10000);
                }
            });
            $sum_dopo2 = parseInt($("#shag21 .vibor input[name='number-742']").val());
            if ($sum_dopo2 == 0) {
                $sum_dopo2 = 0;
            } else {
                $sum_dopo2 = parseInt($sum_dopo2 - 1);
            }
            $sum_dopo2 = parseInt($sum_dopo2 * 20000);
            if ($("#shag22 .vibor input:checked").val() == "Bitrix") {
                $sum_cms2 = 50000;
            }
            $summa = parseInt(150000 + $sum_stranic + $sum_dopo2 + $sum_cms2);
            $(".section-02 .quiz-wrap .quiz-step .pol1 .podzag .price div").text($summa.toLocaleString());
        }
        if ($("#shag1 .vibor input:checked").val() == "Портал") {
            $summa = 600000;
            if ($("#shag30 .vibor input:checked").val() == "Да") {
                $summa = $summa + 400000;
            }
            $(".section-02 .quiz-wrap .quiz-step .pol1 .podzag .price div").text($summa.toLocaleString());
        }

    }, 1000);


    $("#shag1 .vibor input").change(function () {
        if ($("#shag1 .vibor input:checked").val() == "Одностраничный сайт (лендинг)") {
            $(".section-02 .quiz-wrap .quiz-step#shag1 .pol1 .btn-next a").attr("data-class", "shag2");
        }
        if ($("#shag1 .vibor input:checked").val() == "Интернет-магазин") {
            $(".section-02 .quiz-wrap .quiz-step#shag1 .pol1 .btn-next a").attr("data-class", "shag10");
        }
        if ($("#shag1 .vibor input:checked").val() == "Корпоративный сайт услуг") {
            $(".section-02 .quiz-wrap .quiz-step#shag1 .pol1 .btn-next a").attr("data-class", "shag20");
        }
        if ($("#shag1 .vibor input:checked").val() == "Портал") {
            $(".section-02 .quiz-wrap .quiz-step#shag1 .pol1 .btn-next a").attr("data-class", "shag30");
        }
    });

    $("#shag10 input[value='Корзина'], #shag10 input[value='Фильтры категорий товаров']").attr("disabled", "disabled");
    $("#shag11 input[value='Главная страница'], #shag11 input[value='Каталог товаров']").attr("disabled", "disabled");
    $("#shag20 input[value='Разработка стилистики и логотипа'], #shag20 input[value='Главная страница'], #shag20 input[value='Страница услуги']").attr("disabled", "disabled");
    $("#shag21 input[value='Разработка стилистики и логотипа'], #shag21 input[value='Главная страница'], #shag21 input[value='Страница услуги']").attr("disabled", "disabled");

});