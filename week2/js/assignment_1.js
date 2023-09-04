console.log('Assignment 1: Function and Array');
function max(numbers) {
    // 1. 將初始最大值給陣列第一個 index
    let maxNum = numbers[0];

    // 2. 將傳遞進來的陣列做循環
    for (let i = 0; i < numbers.length; i++) {
        // 確認有接收到第一個 numbers 的值為 1
        // console.log(maxNum);

        // 3. 依序與陣列後面的 index 做比較
        if (maxNum < numbers[i]) {
            // 4. 若 umbers[0] 小於之後的索引，則最大值改為該索引
            maxNum = numbers[i];
        }
    }
    // 5. 經比較之後找出最大值 maxNum 返回給呼叫者 console.log
    return maxNum;
}

console.log(max([1, 2, 4, 5])); // expected output: 5
console.log(max([5, 2, 7, 1, 6])); // expected output: 7
