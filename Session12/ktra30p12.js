let products = [
{ id: "P01", name: "Laptop MacBook Pro M3", price: 2000, category: "Laptop", inStock: true },
{ id: "P02", name: "Chuột khong day Logitech", price: 45, category: "Phu kien", inStock: true },
{ id: "P03", name: "Ban phím cơ Keychron", price: 95, category: "Phu kien", inStock: false },
{ id: "P04", name: "Man hinh Dell UltraSharp", price: 450, category: "Man hinh", inStock: true },
{ id: "P05", name: "Tai nghe Sony WH-1000XM5", price: 350, category: "Phu kien", inStock: true }
];
const availableProducts = products.filter((product) => {
    return product.inStock;
});
availableProducts.sort((a, b) => {
    return b.price - a.price;
});
console.log(availableProducts);

let sumOfProducts=(listProduct)=>{
    let allProduct=listProduct.filter(proDuct=>proDuct.inStock===true);
    let sum=allProduct.reduce((sums,prices)=>{
        return sums+=prices.price;
    },0);
    console.log(` Tổng giá trị bằng tiền của các mặt hàng còn trong kho ${sum}`);

}
sumOfProducts(products);