const products = [
    { name: "TV", price: 30000, brand: "Samsung", inStock: true },
    { name: "PS5", price: 60000, brand: "Sony", inStock: false },
    { name: "XBOX", price: 45000, brand: "Microsoft", inStock: true },
    { name: "iPhone", price: 125000, brand: "Apple", inStock: false },
];

const result = products
    .filter((product) => !product.inStock)
    .map(({name,price,brand}) => `${name} (${brand}) - ₹${price}`);

console.log(result);
