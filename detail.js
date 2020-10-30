// change image based off glaze choice
let glazeChoice = null;
let numOrder = 0;

function chooseglazing() {
	let glazeSelect = document.getElementById("glaze").value;
	let imgEl = document.getElementById("product-img");
	if (glazeSelect === "none") {
		imgEl.src = 'Images/1421348929.jpg';
		glazeChoice = "none";
	} else if (glazeSelect === "sugar-milk") {
		imgEl.src = 'Images/scooters_coffee_cinnamonroll.png';
		glazeChoice = "sugar-milk";
	} else if (glazeSelect === "vanila-milk") {
		imgEl.src = 'Images/6898135_preview.jpg';
		glazeChoice = "vanila-milk";
	} else if  (glazeSelect === "double-chocolate") {
		imgEl.src = 'Images/post_5303566.jpg';
		glazeChoice = "double-chocolate";
	}
}


function priceshift() {
	let quantitySelect = document.getElementById("quantity").value;
	let priceTagEl = document.getElementById("price-tag");
	if (quantitySelect === "1") {
		priceTagEl.innerHTML= "Total Price: $6";
	} else if (quantitySelect === "2") {
		priceTagEl.innerHTML= "Total Price: $18";
	} else if (quantitySelect === "3") {
		priceTagEl.innerHTML= "Total Price: $36";
	} else if  (quantitySelect === "4") {
		priceTagEl.innerHTML= "Total Price: $48";
	} 
}


function addClickHandlerForAddCart() {
	let addToCartBtn = document.getElementById("btn-add-to-cart");
	addToCartBtn.onclick = function(e) {
		// this function is called when the addToCartBtn is clicked
		++numOrder;
		let cartNumSpanEl = document.getElementById("cart-num-span");
		cartNumSpanEl.innerHTML = numOrder;
	};
}


addClickHandlerForAddCart();
