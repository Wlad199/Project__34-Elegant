// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";


// Функционал слайдера-слик (MW 3.2)
$(document).ready(function () {
	$('.main-screen__body').slick({
		autoplay: true, // автовоспроизведение (false)
		autoplaySpeed: 3000, // скорость (3000)
		pauseOnFocus: true, // остановка при фокусе
		touchThreshold: 10, // расстояние для считывания свайпа (5 1/5 экрана)
		responsive: [
			{
				breakpoint: 768,
				settings: {
					dots: true, // точки
				}
			}
		],
	});
})


// Запретить всплытие формы ====================================================================================================//

let menuSearch = document.querySelector('.menu__search')
menuSearch.addEventListener('click', function (e) {
	e.stopPropagation()
})

// Клики по меню ====================================================================================================//

let itemMenu = document.querySelectorAll('.menu__item')

itemMenu.forEach(function (item) {
	item.addEventListener('click', function (e) {
		item.classList.toggle('_active')
		e.stopPropagation()
	})
})


// Like ====================================================================================================//

let like = document.querySelectorAll('.card-arrivals__like')
like.forEach(function (i) {
	i.addEventListener('click', function (e) {
		i.classList.toggle('_active')
	})
})


// view ====================================================================================================//
/*
let viewButton = document.querySelectorAll('.item-filter__button')
let viewList = document.querySelectorAll('.item-filter__list')

viewButton.forEach(function (i) {

	i.addEventListener('click', function () {
		this.classList.toggle('_open');
		this.nextElementSibling.classList.toggle('_open');
		let itemFilter = this.nextElementSibling.querySelectorAll('li')

		// Прослушка на каждую LI
		itemFilter.forEach(function (i) {
			i.addEventListener('click', function () {

				itemFilter.forEach(function (i) {
					i.classList.remove('_active')
				})
				i.classList.toggle('_active')

				viewList.forEach(function (i) {
					i.classList.remove('_open');
					viewButton.forEach(function (i) {
						i.classList.remove('_open')
					})
				})

				console.log(this)
			})
			//let contentFilter = this.textContent;
		})

		//this.prepend(contentFilter)
		//console.log(this)
		//let currentButton = this.textContent
		//currentButton.prepend(contentFilter)
	})
})
*/

// filter-store__view ====================================================================================================//

let viewItem = document.querySelectorAll('.view__item')

viewItem.forEach(function (i) {
	i.addEventListener('click', function () {
		viewItem.forEach(function (i) {
			i.classList.remove('_active')
		})
		i.classList.add('_active')
	})
})

// Mark header ====================================================================================================//
/*
let menuList = document.querySelector('.menu__list')
let itemHeaderMenu = menuList.querySelectorAll('li')
itemHeaderMenu.forEach(function (i) {
	i.classList.remove('_active')
})
itemHeaderMenu[1].classList.add('_active')
*/

// show pass ====================================================================================================//

let viewPass = document.querySelectorAll('.pass-view')
//let passInput = document.querySelector('#pass-input')

viewPass.forEach(function (i) {
	i.addEventListener('click', function (e) {
		let passInput = this.closest('.sign-up__pass').querySelector('.sign-up__input')
		if (passInput.getAttribute('type') === 'password') {
			passInput.nextElementSibling.classList.add('_view')
			passInput.setAttribute('type', 'text')
		} else {
			passInput.nextElementSibling.classList.remove('_view')
			passInput.setAttribute('type', 'password')
		}
	})
})


// flyout ====================================================================================================//

let cartMenu = document.querySelector('.flyout')
let wrapper = document.querySelector('.wrapper')

// Open / Close Menu =================//

document.addEventListener('click', function (e) {

	if ((e.target.closest('.manage-menu__cart')) || (e.target.closest('#cart'))) {
		cartMenu.classList.toggle('_active')
		document.body.classList.toggle('_lock')
		wrapper.classList.toggle('_active')
	}

	else if ((e.target.closest('.close-flyout')) || ((!e.target.closest('.flyout')) && cartMenu.classList.contains('_active')) || (e.target.closest('.sum__button'))) {
		if (!e.target.closest('.wish-descript__button')) {
			cartMenu.classList.remove('_active')
			document.body.classList.remove('_lock')
			wrapper.classList.remove('_active')
		}
	}
})

// Open on addCart ======================//
const addCart = document.querySelector('.wish-descript__button')

if (addCart) {
	addCart.addEventListener('click', function () {
		cartMenu.classList.add('_active')
		document.body.classList.add('_lock')
		wrapper.classList.add('_active')
	})
}


// choose color ====================================================================================================//

let colorItem = document.querySelectorAll('.color-descript__item')

colorItem.forEach(function (i) {
	i.addEventListener('click', function (e) {
		colorItem.forEach(function (i) {
			i.classList.remove('_active')
		})
		if (!i.classList.contains('_disabled')) {
			i.classList.add('_active')
		}
	})
})

// wishlist ====================================================================================================//

let addWish = document.querySelector('.wish-descript__add-wish')

if (addWish) {
	addWish.addEventListener('click', function () {
		addWish.classList.toggle('_active')
	})
}


// gooda-slider ====================================================================================================//

$(document).ready(function () {
	$('.visual-slider').slick({
		slidesToShow: 1,
		//autoplay: true, // автовоспроизведение (false)
		autoplaySpeed: 2000, // скорость (3000)
		pauseOnFocus: true, // остановка при фокусе
		touchThreshold: 10, // расстояние для считывания свайпа (5 1/5 экрана)
	});
})


// counter goods ====================================================================================================//

window.addEventListener('click', function (e) {

	if ((e.target.closest('[data-action="plus"]')) || (e.target.closest('[data-action="minus"]'))) {

		const counterWrapper = e.target.closest('.counter')
		const counter = counterWrapper.querySelector('[data-counter]')

		if (e.target.closest('[data-action="plus"]')) {
			counter.innerText = ++counter.innerText
		}

		if (e.target.closest('[data-action="minus"]')) {
			if (parseInt(counter.innerText) > 1) {
				counter.innerText = --counter.innerText
			}
		}
	}
	if (e.target.closest('.delete-item')) {
		const itemCart = e.target.closest('.flyout__item')
		itemCart.remove()
		calcCartPrice()
	}

	if (e.target.closest('[data-action]') && e.target.closest('.flyout__cart')) {
		calcCartPrice()
	}
})

// Calc Sum ====================================================================================================//

function calcCartPrice() {
	const cartWrapper = document.querySelector('.flyout__cart')
	const cartItems = cartWrapper.querySelectorAll('.flyout__item')
	const previousPrice = document.querySelector('.previous-price')
	const lastPrice = document.querySelector('.last-price')

	let totalPrice = 0;

	cartItems.forEach(function (i) {
		const amountEl = i.querySelector('[data-counter]')
		const priceEl = i.querySelector('.item-flyout__price p')
		const currentPrice = parseFloat(amountEl.innerText) * parseFloat(priceEl.innerText)

		totalPrice += currentPrice;
	})

	previousPrice.innerText = (totalPrice).toFixed(2) + ' ' + '$'
	lastPrice.innerText = (totalPrice * 0.85).toFixed(2) + ' ' + '$'
}
calcCartPrice()

