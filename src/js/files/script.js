// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";


// Функционал слайдера-слик (MW 3.2)
//$(document).ready(function () {
//	$('.comment__body').slick();
//})


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