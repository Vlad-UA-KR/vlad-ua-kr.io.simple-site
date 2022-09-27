$(document).ready(function () {

	// -------------Menu-blok---------------------

	$('.burger,.menu__link').click(function (event) {
		$('.burger,.menu__link,.menu,.wrapper__overlay').toggleClass('show')
		$('body').toggleClass('lock');
	});

	// -------------Cookie---------------------

	$('.cookies__btn').click(function (event) {
		$('.cookies').toggleClass('hide')
	})

	// -------------Hire-blok---------------------

	$('.btn-hire').click(function (event) {
		$('.hire,.wrapper__overlay').toggleClass('show')
		$('body').toggleClass('lock');
	})
	$('.hire__close,hire__btn').click(function (event) {
		$('.hire,.wrapper__overlay').removeClass('show')
		$('body').removeClass('lock');
	})
});