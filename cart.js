if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
}   else{
        ready()
}

function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-remove')
    for (var i = 0; i< removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem) 
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i =0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var priceInputs = document.getElementsByClassName('cart-total-price')
    for (var i =0; i < priceInputs.length; i++) {
        var input = priceInputs[i]
        input.addEventListener('change', priceChanged)
    }
}

function removeCartItem(){
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.parentElement.remove()
    updateCartTotal()
}


