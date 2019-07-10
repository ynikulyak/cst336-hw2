var quantity = 0;
var tax = 0.0875;

$('.update').click(function(){
	calculateSubtotal();
	displayItems(quantity);
	quantity = 0;
});

$('#place_order').click(function(){
	$('.main').html("<h2>Thank you for your order</h2>");
});

function calculateSubtotal(){

	var items = document.getElementsByClassName("item");
    var subtotal = 0;

	for (var i = 0; i < items.length; i++){
		var price = items[i].getElementsByClassName("item-price")[0];
		var purePrice = parseFloat(price.innerHTML.replace('$', ''));
		
		console.log("purePrice " + purePrice);
		
		var qnt = Number(items[i].getElementsByClassName("item-qnt")[0].value);

		quantity = quantity + qnt;
		var total = parseFloat(purePrice * qnt);
		subtotal = subtotal + total;

		document.getElementsByClassName("item-total")[i].innerHTML = "$"+(parseFloat(total).toFixed(2));
		
		console.log("total "+quantity + " /" + (typeof quantity));
		console.log("qnt " + qnt + " /" + (typeof qnt));
		console.log("total: " + total + " /" + (typeof total));
		console.log("item-total: " + document.getElementsByClassName("item-total")[0].innerHTML);
		console.log("subtotal " + i + ": /" + subtotal + "/" + (typeof subtotal));
	}

	var subAndTx = subtotal * tax;
	var final = subAndTx + subtotal;

	document.getElementById("cart-subtotal").innerHTML = "Subtotal: $"+(subtotal).toFixed(2);
	document.getElementById("taxes").innerHTML = "Tax: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$"+ (subAndTx).toFixed(2);
	document.getElementById("final").innerHTML = "Total: $" + (final).toFixed(2);
}

function displayItems(qnty){

	if (qnty === 1){
		document.getElementById("num-items").innerHTML = qnty + " item";
	}else{
		document.getElementById("num-items").innerHTML = qnty + " items";
	}
}



