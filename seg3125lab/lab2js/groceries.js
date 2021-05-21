	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
    //No restrictions
	{
		name: "Brocoli",
		lactoseFree: true,
		nutFree: true,
        organic: true,
		price: 1.99
	},
	{
		name: "Bread",
		lactoseFree: true,
		nutFree: true,
        organic: false,
		price: 2.35
	},
	{
		name: "Salmon",
		lactoseFree: true,
		nutFree: true,
        organic: false,
		price: 10.00
	},
    {
        name: "Lettuce",
        lactoseFree: true,
        nutFree: true,
        organic: true,
        price: 7.50,
    },
    //Lactose products
    {
        name: "Cheese",
        lactoseFree:false,
        nutFree: true, 
        organic: true,
        price: 5.00,
    },
    {
        name:"Milk",
        lactoseFree:false,
        nutFree: true,
        organic: false,
        price:6.00,
    },
    {
        name:"Yogurt",
        lactoseFree:false,
        nutFree: true,
        organic: false,
        price: 3.20,
    },
    //Nut products
    {
        name:"Almonds",
        lactoseFree: true,
        nutFree: false,
        organic: true,
        price: 1.25,
    },
    {
        name: "Peanut Butter",
        lactoseFree: true,
        nutFree: false,
        organic: true,
        price: 4.50,
    },
    {
        name: "Cookies",
        lactoseFree: true,
        nutFree: false,
        organic: false,
        price: 6.24,
    }

];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction, organic) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "LactoseFree") && (prods[i].lactoseFree == true)){
            if (organic == true){
                if (prods[i].organic == true){
                    product_names.push(prods[i]);
                }

            }
            else{
                product_names.push(prods[i]);
            }
			
		}
		else if ((restriction == "NutFree") && (prods[i].nutFree == true)){
			if (organic == true ){
                if (prods[i].organic){
                    product_names.push(prods[i]);
                }

            }
            else{
                product_names.push(prods[i]);
            }
		}
		else if (restriction == "None"){
			if (organic == true){
                if (prods[i].organic == true){
                    product_names.push(prods[i]);
                }

            }
            else{
                product_names.push(prods[i]);
            }
		}
	}
    product_names.sort(function(a, b){return a.price - b.price});

	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice.toFixed(2);
}