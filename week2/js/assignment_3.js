console.log('Assignment 3: Function, Array, and Object');

function calculate(data) {
    // 確認接收到的 data 為何
    // console.log(data);

    // 1. 開始做計算，discount = 0.1 等於 10% off，等於 1 - 0.1

    // 2. 獲取折扣及 products 陣列的 data
    const discountNum = data.discount;
    const product = data.products;
    // 確認有獲取到相對應的值
    // console.log(discountNum);
    // console.log(product);

    // 3. 建立總金額初始值為 0
    let totalPrice = 0;

    // 4. 對獲取的陣列進行循環操作
    product.forEach(element => {
        // 5. 計算陣列中每個 price 折扣後的值，然後存起來
        const totalDiscounted = element.price * (1 - discountNum);

        // 6. 將存起來的值交給總金額
        totalPrice += totalDiscounted;
    });

    // 7. 回傳計算後的總金額給呼叫者 discountedPrice 變數
    return totalPrice;

}
const discountedPrice = calculate({
    discount: 0.1,
    products: [
        {
            name: "Product 1",
            price: 100
        },
        {
            name: "Product 2",
            price: 700
        },
        {
            name: "Product 3",
            price: 250
        }
    ]
});
console.log(discountedPrice) // show the total price of all products after applying a discount