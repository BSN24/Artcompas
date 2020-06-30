$(document).ready(function() {
    $('body > .wrapper').addClass('catalog_page');
	$('#soa-property-1').attr("placeholder", "Иванов Иван Иванович");
	$('#soa-property-2').attr("placeholder", "email@email.ru");
	$('#soa-property-3').attr("placeholder", "_(___)___-__-__");
	$("#soa-property-3").inputmask("9(999)999-99-99");

    $('.menu-desktop__btn').click(function (e) {
        e.preventDefault();

        var parentItem = $(this).parents('.menu-desktop__main').siblings('.menu-desktop__submenu');

        $(this).toggleClass('menu-desktop__btn--open');

        parentItem.eq(0).slideToggle(250);
    })
});