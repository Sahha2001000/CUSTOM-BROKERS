
//burger menu
$(document).ready(function() {
    $(document).ready(function () {
        $('.header__burger').click(function () {
            $('.header__menu-list').slideToggle('');
        });
    });
});

// AJAX for contact-form
(function ($) {
    $(".form").submit(function (event) {
        event.preventDefault();
        // Сохраняем в переменную form id текущей формы, на которой сработало событие submit
        let form = $('#' + $(this).attr('id'))[0];
        // Сохраняем в переменную класс с параграфом для вывода сообщений
        let message = $(this).find(".form__item");
        let fd = new FormData(form);
        $.ajax({
            url: "/php/sendMsgTG.php",
            type: "POST",
            data: fd,
            processData: false,
            contentType: false,
            success: function success() {
                let respond = true
                if (!respond) {
                    alert('Щось пішло не так. Спробуйте відправити форму ще раз.');
                } else {
                    alert('Дякую! Ваша заявка прийнята. Ми зв\'яжемося з вами найближчим часом.');
                }
            },
        });
    });
}(jQuery));
