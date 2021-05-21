	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
    //No restrictions
	{
		name: "brocoli",
		lactoseFree: true,
		nutFree: true,
        organic: true,
		price: 1.99
	},
	{
		name: "bread",
		lactoseFree: true,
		nutFree: true,
        organic: false,
		price: 2.35
	},
	{
		name: "salmon",
		lactoseFree: true,
		nutFree: true,
        organic: false,
		price: 10.00
	},
    {
        name: "lettuce",
        lactoseFree: true,
        nutFree: true,
        organic: true,
        price: 7.50,
    },
    //Lactose products
    {
        name: "cheese",
        lactoseFree:false,
        nutFree: true, 
        organic: true,
        price:5.00,
    },
    {
        name:"milk",
        lactoseFree:false,
        nutFree: true,
        organic: false,
        price:6.00,
    },
    {
        name:"yogurt",
        lactoseFree:false,
        nutFree: true,
        organic: false,
        price: 3.20,
    },
    //Nut products
    {
        name:"almond",
        lactoseFree: true,
        nutFree: false,
        organic: true,
        price: 1.25,
    },
    {
        name: "peanut butter",
        lactoseFree: true,
        nutFree: false,
        organic: true,
        price: 4.50,
    },
    {
        name: "cookies",
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
    console.log(organic)
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "LactoseFree") && (prods[i].lactoseFree == true)){
            if (organic == true){
                if (prods[i].organic == true){
                    product_names.push(prods[i].name);
                }

            }
            else{
                product_names.push(prods[i].name);
            }
			
		}
		else if ((restriction == "NutFree") && (prods[i].nutFree == true)){
			if (organic == true ){
                if (prods[i].organic){
                    product_names.push(prods[i].name);
                }

            }
            else{
                product_names.push(prods[i].name);
            }
		}
		else if (restriction == "None"){
			if (organic == true){
                if (prods[i].organic == true){
                    product_names.push(prods[i].name);
                }

            }
            else{
                product_names.push(prods[i].name);
            }
		}
	}
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
	return totalPrice;
}