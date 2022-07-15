const productsContainer = document.querySelector('#products-container');

getProducts();

async function getProducts() {
	const response = await fetch('../json/products.json');
	const productsArray = await response.json();
	renderProducts(productsArray);
}

function renderProducts(productsArray) {
	productsArray.forEach(function (item) {
		const productHTML = `<div class="col-md-6">
						<div class="card mb-4 menu__item " data-id="${item.id}">
							<img class="product-img item-menu__img"" src="../img/Menu/food1.png" alt="">
							<div class="card-body item-menu__body text-center">
								<h4 class="item-title item-menu__title">${item.title}</h4>

								<p class="item-menu__subTitle">Домашнаяя паста феттуччине, сливочный соус, креветки,
								трюфельное масло, черный перец, пармезан.350 г
								</p>

								<!-- Счетчик -->
								<div class="items counter-wrapper">
									<div class="items__control" data-action="minus">-</div>
									<div class="items__current" data-counter>1</div>
									<div class="items__control" data-action="plus">+</div>
								</div>
								<!-- // Счетчик -->

								<div class="item-menu__actions price">
									<p class="item-menu_price price__currency">от ${item.price} ₽</p>
									<div data-cart class="item-menu__cart btn btn-block btn-outline-warning">В корзину</div>
								</div>

							</div>
						</div>
					</div>`;
		productsContainer.insertAdjacentHTML('beforeend', productHTML);
	});
}
