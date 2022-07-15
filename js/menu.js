const buttons = document.getElementsByClassName('cart__click');
for (const button of buttons) {
    button.addEventListener('click', () => {
        cardPopup()
    });
}

function cardPopup() {
    document.querySelector('.card__popup-bg').classList.add('card__popup-bg--open')
}

const cardClose = document.querySelector('.card__popup__close');

cardClose.addEventListener('click', () => {
    cardclose()
});

function cardclose() {
    document.querySelector('.card__popup-bg').classList.remove('card__popup-bg--open')
}