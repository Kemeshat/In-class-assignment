const products = [
    { sku: "CC_4B", name: "charger", category: "electronics",price: 15.99, inventory: 10 },
    {sku: "CC_4C",name: "Jeans",category: "apparel",price: 44.99,inventory: 5 },
    {sku: "CC_4D", name: "Bread",category: "groceries", price: 4.99,inventory: 20},
    {sku: "CC_4E",name: "Dish Soap", category: "household",price: 3.99,inventory: 10 },
    {sku: "CC_4F", name: "Novel",category: "books",price: 12.99,inventory: 30 }
];
    
for (const product of products) {
    let discount =0;

    switch (product.category) {
        case "charger":
            discount = 0.10;
            break;
        case "jeans":
            discount = 0.20;
            break;
        case "bread":
            discount = 0.05;
            break;
        case "Dish soap":
            discount = 0.15;
            break;

            default:
            discount = 0;
    }

    product.promoPrice = (product.price * (1 - discount)).toFixed(2);
}

console.log(products);


