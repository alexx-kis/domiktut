'use strict';

// Кнопка показа nav
let headerHideLink = document.querySelector('.header__hide-button');
let headerTop = document.querySelector('.header__top');

headerHideLink.addEventListener('click', function (e) {
	e.preventDefault();
	headerTop.classList.toggle('header__top--hidden');
});


// Поиск

let searchLink = document.querySelector('.header__search-link');
let searchPopUp = document.querySelector('.header__search-pop-up');
let wrapper = document.querySelector('.wrapper');
wrapper.addEventListener('click', function (e) {
	searchPopUp.classList.remove('header__search-pop-up--active');
	e.stopPropagation();
});
searchLink.addEventListener('click', function (e) {
	e.stopPropagation();
	e.preventDefault();
	searchPopUp.classList.toggle('header__search-pop-up--active');
});
searchPopUp.addEventListener('click', function (e) {
	e.stopPropagation();
});


/*------------------------------ header top fixed ------------------------------*/

// nav



$(function () {
	let logoImg = document.querySelector('.header__logo-link img');
	let arrow = document.querySelector('.header__city-arrow img');

	$(window).scroll(function () {
		if ($(this).scrollTop() > 1) {
			$('.header__top').addClass('header__top--fixed');
			logoImg.src = './img/1.header/header__logo-dark.png';
			arrow.src = './img/1.header/arrow-down-icon-dark.svg';
			$('.header__button').addClass('header__button--fixed');
			$('.header__dropdown').addClass('header__dropdown--fixed');
			$('.header__compilations').addClass('header__compilations--fixed');
			$('.header__favourites').addClass('header__favourites--fixed');
			$('.header__search').addClass('header__search--fixed');
			$('.header__search-icon').addClass('header__search-icon--fixed');
			$('.header__search-text').addClass('header__search-text--fixed');
			$('.header__phone').addClass('header__phone--fixed');
			$('.header__burger').addClass('header__burger--fixed');
			$('.header__menu-items--right').addClass('header__menu-items--right--fixed');
			$('.header__hide-button').addClass('header__hide-button--fixed');
			$('.header__compilation-button').addClass('header__compilation-button--fixed');
			$('.header__search-pop-up').addClass('header__search-pop-up--fixed');
		} else {
			$('.header__top').removeClass('header__top--fixed');
			logoImg.src = './img/1.header/header__logo.png';
			arrow.src = './img/1.header/arrow-down-icon.svg';
			$('.header__button').removeClass('header__button--fixed')
			$('.header__dropdown').removeClass('header__dropdown--fixed');
			$('.header__compilations').removeClass('header__compilations--fixed');
			$('.header__favourites').removeClass('header__favourites--fixed');
			$('.header__search').removeClass('header__search--fixed');
			$('.header__search-icon').removeClass('header__search-icon--fixed');
			$('.header__search-text').removeClass('header__search-text--fixed');
			$('.header__phone').removeClass('header__phone--fixed');
			$('.header__menu-items--right').removeClass('header__menu-items--right--fixed');
			$('.header__burger').removeClass('header__burger--fixed');
			$('.header__hide-button').removeClass('header__hide-button--fixed');
			$('.header__compilation-button').removeClass('header__compilation-button--fixed');
			$('.header__search-pop-up').removeClass('header__search-pop-up--fixed');

		}
	});
});

// Слайдер

$(function () {
	$('.header__slider').slick({
		arrows: false,
		slidesToShow: 3,
		infinite: true,
		dragable: false,
		waitForAnimate: false,
		autoplay: true,
		autoplaySpeed: 2000,
		responsive:
			[
				{
					breakpoint: 700,
					settings: {
						slidesToShow: 1,
					}
				},
			],
		arrows: false,
		waitForAnimate: false,
	})
})

$('.header__slider-prev').on('click', function (e) {
	e.preventDefault()
	$('.header__slider').slick('slickPrev')
})
$('.header__slider-next').on('click', function (e) {
	e.preventDefault()
	$('.header__slider').slick('slickNext')
})

// Ползунок 

$(".header__form-range").slider({
	min: 0,
	max: 150000,
	values: [13000, 150000],
	range: true,
	animate: "fast",
	slide: function (event, ui) {
		$(".header__form-price-left").val(ui.values[0]);
		$(".header__form-price-right").val(ui.values[1]);
	}
});
$(".header__form-price-left").val($(".header__form-range").slider("values", 0));
$(".header__form-price-right").val($(".header__form-range").slider("values", 1));
$(".polzunok-container-5 input").change(function () {
	var input_left = $(".header__form-price-left").val().replace(/[^0-9]/g, ''),
		opt_left = $(".header__form-range").slider("option", "min"),
		where_right = $(".header__form-range").slider("values", 1),
		input_right = $(".header__form-price-right").val().replace(/[^0-9]/g, ''),
		opt_right = $(".header__form-range").slider("option", "max"),
		where_left = $(".header__form-range").slider("values", 0);
	if (input_left > where_right) {
		input_left = where_right;
	}
	if (input_left < opt_left) {
		input_left = opt_left;
	}
	if (input_left == "") {
		input_left = 0;
	}
	if (input_right < where_left) {
		input_right = where_left;
	}
	if (input_right > opt_right) {
		input_right = opt_right;
	}
	if (input_right == "") {
		input_right = 0;
	}
	$(".header__form-price-left").val(input_left);
	$(".header__form-price-right").val(input_right);
	if (input_left != where_left) {
		$(".header__form-range").slider("values", 0, input_left);
	}
	if (input_right != where_right) {
		$(".header__form-range").slider("values", 1, input_right);
	}
});

let likeButtons = document.querySelectorAll('.popular__cards-like');
for (let likeButton of likeButtons) {
	likeButton.addEventListener('click', function (e) {
		e.preventDefault();
		likeButton.classList.toggle('popular__cards-like--active')
	});
}


// Аккордеон


$('.faq__acc-item').on('click', function (e) {
	e.preventDefault()
	if ($(this).hasClass('faq__acc-item--active')) {
		$(this).removeClass('faq__acc-item--active');
		$(this).children('.faq__acc-answer').slideUp();
	}
	else {
		$('.faq__acc-question').removeClass('faq__acc-item--active');
		// $('.faq__acc-answer').slideUp();
		$(this).addClass('faq__acc-item--active');
		$(this).children('.faq__acc-answer').slideDown();
	}
})

// tooltip

let tooltip = document.querySelector('.form__tooltip');
let tooltipFrame = document.querySelector('.form__tooltip-frame');

tooltip.addEventListener('mouseover', function () {
	tooltipFrame.classList.add('form__tooltip-frame--visible');
});
tooltip.addEventListener('mouseout', function () {
	tooltipFrame.classList.remove('form__tooltip-frame--visible');
});



/*------------------------------ cervices form ------------------------------*/

let learnBtn = document.querySelector('.cervices__button');
let cervForm = document.querySelector('.cervices__form');

learnBtn.addEventListener('click', function (e) {
	e.preventDefault();
	cervForm.classList.add('form--visible');
});

let cervFormButton = document.querySelector('.cervices__form-button');
let inpName = document.querySelector('#inp-name');
let inpTel = document.querySelector('#inp-tel');
let cervFormInpFields = document.querySelectorAll('.cervices__form-input');

let cervFormTitle = document.querySelector('.cervices__form-title');

let cervFormSubtitle = document.querySelector('.cervices__form-subtitle');

cervFormButton.addEventListener('click', function f(e) {
	if (inpName.value == '' && inpTel.value == '') {
		for (let cervFormInpField of cervFormInpFields) {
			cervFormInpField.classList.add('form__input--incorrect')
		}
	}
	else {
		cervFormTitle.textContent = 'Ваша заявка отправлена!';
		for (let cervFormInpField of cervFormInpFields) {
			cervFormInpField.remove();
		}
		let p = document.createElement('p');
		p.textContent = 'Мы свяжемся с вами в течение 15 минут для уточнения деталей';
		p.classList.add('form__text');
		cervFormTitle.insertAdjacentElement('afterEnd', p);
		cervFormSubtitle.remove();
		cervFormButton.remove();
		let cervCloseBtn = document.createElement('button');
		cervCloseBtn.textContent = 'Закрыть';
		cervCloseBtn.classList.add('button', 'form__close-button');
		cervForm.append(cervCloseBtn);
		cervCloseBtn.addEventListener('click', function (e) {
			e.preventDefault();
			cervForm.classList.remove('form--visible');
		});
	}
});

let cervFormCross = document.querySelector('.cervices__form-cross-link');

cervFormCross.addEventListener('click', function (e) {
	e.preventDefault();
	cervForm.classList.remove('form--visible');
});



/*------------------------------ rent form ------------------------------*/

let rentButton = document.querySelector('.rent__button');
let rentForm = document.querySelector('.rent__form');

rentButton.addEventListener('click', function (e) {
	e.preventDefault();
	rentForm.classList.add('form--visible');
});

let rentFormBtn = document.querySelector('.rent__form-button');
let rentFormInpFields = document.querySelectorAll('.rent__form-input');
let rentFormTitle = document.querySelector('.rent__form-title');
let name = document.querySelector('#name');
let tel = document.querySelector('#tel');
let email = document.querySelector('#email');

rentFormBtn.addEventListener('click', function f(e) {
	if (name.value == '' && tel.value == '' || email.value == '') {
		for (let rentFormInpField of rentFormInpFields) {
			rentFormInpField.classList.add('form__input--incorrect')
		}
	}
	else {
		rentFormTitle.textContent = 'Ваша заявка отправлена!';
		for (let rentFormInpField of rentFormInpFields) {
			rentFormInpField.remove();
		}
		let p = document.createElement('p');
		p.textContent = 'Мы свяжемся с вами в течение 15 минут для уточнения деталей';
		p.classList.add('form__text');
		p.classList.add('rent__form-text');
		rentFormTitle.insertAdjacentElement('afterEnd', p);
		rentFormBtn.remove();
		let closeButton = document.createElement('button');
		closeButton.textContent = 'Закрыть';
		closeButton.classList.add('button', 'form__close-button');
		rentForm.append(closeButton);
		closeButton.addEventListener('click', function (e) {
			e.preventDefault();
			rentForm.classList.remove('form--visible');
		});
	}
});

// form cross

let rentFormCross = document.querySelector('.rent__form-cross-link');

rentFormCross.addEventListener('click', function (e) {
	e.preventDefault();
	rentForm.classList.remove('form--visible');
});



/*------------------------------ burger ------------------------------*/

$('.header__burger-link, .overlay, .header__side a, .header__side-close-link').on('click', function (e) {
	e.preventDefault();
	$('.header__side').toggleClass('header__side--open');
	$('.overlay').toggleClass('overlay--show');
	// $('.burger').toggleClass('burger__active');
})


/*------------------------------ footer ------------------------------*/

$('.footer__catalog-title').on('click', function () {
	$(this).next().slideToggle()
})
