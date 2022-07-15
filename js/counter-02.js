window.addEventListener('click', function (event) {

	let counter;

	if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
		const counterWrapper = event.target.closest('.counter-wrapper');
		counter = counterWrapper.querySelector('[data-counter]');
	}

	if (event.target.dataset.action === 'plus') {
		counter.innerText = ++counter.innerText;

		const cart__count = document.querySelectorAll('.cart__count');
		for (let index = 0; index < cart__count.length; index++) {
			const element = cart__count[index];
			element.innerText = ++element.innerText
		}
	}

	if (event.target.dataset.action === 'minus') {
		const cart__count = document.querySelectorAll('.cart__count');
		for (let index = 0; index < cart__count.length; index++) {

			const element = cart__count[index];
			if (parseInt(element.innerText) > 0) {
				element.innerText = --element.innerText
			}

		}

		if (parseInt(counter.innerText) > 1) {
			counter.innerText = --counter.innerText;

		} else if (event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1) {
			event.target.closest('.cart-item').remove();

			toggleCartStatus();
		}

	}

	if (event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')) {
	}
});