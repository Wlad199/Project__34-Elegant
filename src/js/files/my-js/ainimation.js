
// Scroll Animation ====================================================================================================//
//export function animations() {
// Ищем все объекты с классом _anim-items
let animItems = document.querySelectorAll('._anim-items')

// Проверяем, есть ли объекты с таким классом
if (animItems.length > 0) {
	// Вешаем прослушку на скролл
	window.addEventListener('scroll', animOnScroll);

	function animOnScroll() {
		for (let index = 0; index < animItems.length; index++) {
			// Получаем каждый элемент в константу
			const animItem = animItems[index];
			// Получаем высоту элемента
			const animItemHeight = animItem.offsetHeight;
			// Получаем позцицию элемента относительно верха с помощью функции offset
			const animItemOffset = offset(animItem).top
			// Коэффициент момента старта анимации (Стартует когда прокручена четверть блока)
			const animStart = 4;

			// Момент старта анимации (от высоты окна браузера вычитаем высоту анимируемого блока, делёную на коэффициент(4))
			let animItemPoint = window.innerHeight - animItemHeight / animStart;

			// Для случаев, когда анимируемый объект выше окна браузера делаем проверку
			if (animItemHeight > Window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animItemPoint;
			}

			// Если прокрутили больше чем позиция объекта минус точка старта,
			// но при этом прокрутили меньше чем позиция объекта плюс его высота,
			//тогда добавляем класс _active
			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_active')
			} else {
				// Делаем проверку: если у блока есть класс _anim-no-hide то класс _active не убираем и наоборот
				// Класс _anim-no-hide запрещает поеторную анимацию
				if (!animItem.classList.contains("_anim-no-hide")) {
					animItem.classList.remove('_active')
				}
			}
		}
	}

	// Эта функция высчитывает расстояние от верха страницы
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}

	// Вызываем функцию animOnScroll самостоятельно для объектов, которые видны без скролла
	// Можно использовать задержку setTimeout
	setTimeout(() => {
		animOnScroll();
	}, 300);
}
//}