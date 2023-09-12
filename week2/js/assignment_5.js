// 一個迴圈的觀念
console.log('Assignment 5: Algorithm (Advanced Optional)');
function twoSum(nums, target) {
    // 建立一個 data 空物件來保存查找的 key value
    const data = {};
    // 對傳入的陣列進行循環
    for (let i = 0; i < nums.length; i++) {
        // 計算當前值等於目標數 target 減掉陣列中的每一個值，供下方 if 判斷使用
        const calcNum = target - nums[i];
        // 確認計算的值，第一次是 7，以此類推
        // console.log(calcNum);
        // 檢查 calcNum 是否為 data 物件的一個屬性名稱
        if (data.hasOwnProperty(calcNum)) {
            return [data[calcNum], i];
        }
        // 將當前值給 data 物件的屬性，對應值為索引 i
        data[nums[i]] = i;
        // console.log('data', data);
    }
    // 跳出循環代表沒找到，回傳訊息
    return 'Not found';
}
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([2, 7, 11, 15], 7));  // 沒找到，回傳 Not found
// console.log(twoSum([2, 7, 11, 15], 26));
// console.log(twoSum([2, 7, 11, 15], 18));
// console.log(twoSum([1, 2, 7, 15], 9));



// note : 雙迴圈寫法，可以有優化方式如上
// console.log('Assignment 5: Algorithm (Advanced Optional)');
// function twoSum(nums, target) {
//     // i 循環做陣列的查找第一個數的 index，判斷式為陣列長度 - 1，因陣列從 0 開始
//     for (let i = 0; i < nums.length - 1; i++) {
//         // j 循環也做陣列查找第二個數的 index，
//         for (let j = i + 1; j < nums.length; j++) {
//             // 每次循環要判斷兩數之和是否 === target，有就返回兩數的 index
//             if (nums[i] + nums[j] === target) {
//                 return [i, j];
//             }
//         }
//     }
//     // 跳出循環代表沒找到，回傳訊息
//     return 'Not found';
// }
// console.log(twoSum([2, 7, 11, 15], 9));
// // console.log(twoSum([2, 7, 11, 15], 26));
// // console.log(twoSum([2, 7, 11, 15], 18));
// // console.log(twoSum([1, 2, 7, 15], 9));