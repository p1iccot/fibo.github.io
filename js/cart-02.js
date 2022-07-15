const cartWrapper = document.querySelector('.cart-wrapper');

window.addEventListener('click', function (event) {
	if (event.target.hasAttribute('data-cart')) {

		const card = event.target.closest('.card');
		let cardColor = card.querySelector('.item-menu__cart').classList.add('item__menu__cart--color');
		cardColor = funcCardColor()
		function funcCardColor() {
			setTimeout(() => {
				card.querySelector('.item-menu__cart').classList.remove('item__menu__cart--color');
			}, 1000)
		}

		let cards = card.querySelector('.item-menu__cart');
		cards = cartCounter()
		function cartCounter() {
			const cart__count = document.querySelectorAll('.cart__count');
			for (let index = 0; index < cart__count.length; index++) {
				const element = cart__count[index];
				element.innerText = ++element.innerText
			}
		}

		const productInfo = {
			id: card.dataset.id,
			imgSrc: card.querySelector('.product-img').getAttribute('src'),
			title: card.querySelector('.item-title').innerText,
			price: card.querySelector('.price__currency').innerText,
			counter: card.querySelector('[data-counter]').innerText,
		};

		const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);

		if (itemInCart) {
			const counterElement = itemInCart.querySelector('[data-counter]');
			counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter);
		} else {

			const cartItemHTML = `<div class="cart-item" data-id="${productInfo.id}">
								<div class="cart-item__top">
									<div class="cart-item__img">
										<img src="${productInfo.imgSrc}" alt="${productInfo.title}">
									</div>

									<div class="cart-item__desc">
										<div class="cart-item__title">${productInfo.title}</div>
	
										<div class="cart-item__details">
											<div class="items items--small counter-wrapper">
												<div class="items__control" data-action="minus">-</div>
												<div class="items__current" data-counter="">${productInfo.counter}</div>
												<div class="items__control" data-action="plus">+</div>
											</div>

											<div class="price">
												<div class="price__currency">${productInfo.price}</div>
											</div>
										</div>

									</div>
								</div>
							</div>`;

			cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);
		}

		card.querySelector('[data-counter]').innerText = '1';

		toggleCartStatus();
	}
});
