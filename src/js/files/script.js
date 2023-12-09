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

let viewButton = document.querySelectorAll('.item-filter__button')
let viewList = document.querySelectorAll('.item-filter__list')

viewButton.forEach(function (i) {
	i.addEventListener('click', function () {
		this.classList.toggle('_open');
		this.closest('.item-filter__select').classList.toggle('_open');
		this.nextElementSibling.classList.toggle('_open');
		let itemFilter = this.nextElementSibling.querySelectorAll('li')
		itemFilter.forEach(function (i) {
			i.addEventListener('click', function () {
				itemFilter.forEach(function (i) {
					i.classList.remove('_active')
				})
				i.classList.toggle('_active')
				viewList.forEach(function (i) {
					i.classList.remove('_open')
				})
			})
		})
	})
})