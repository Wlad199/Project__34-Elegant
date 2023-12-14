// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";


// Функционал слайдера-слик (MW 3.2)
$(document).ready(function () {
	$('.main-screen__body').slick({
		//autoplay: true, // автовоспроизведение (false)
		autoplaySpeed: 2000, // скорость (3000)
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
/*
let viewPass = document.querySelector('.pass-view')
let passInput = document.querySelector('#pass-input')

viewPass.addEventListener('click', function (e) {
	if (passInput.getAttribute('type') === 'password') {
		viewPass.classList.add('_view')
		passInput.setAttribute('type', 'text')
	} else {
		viewPass.classList.remove('_view')
		passInput.setAttribute('type', 'password')
	}
})
*/

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