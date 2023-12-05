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