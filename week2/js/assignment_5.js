console.log('Assignment 5: Algorithm (Advanced Optional)');

function twoSum(nums, target) {

    // i 循環做陣列的查找第一個數的 index，判斷式為陣列長度 - 1，因陣列從 0 開始
    for (let i = 0; i < nums.length - 1; i++) {

        // j 循環也做陣列查找第二個數的 index，
        for (let j = i + 1; j < nums.length; j++) {

            // 每次循環要判斷兩數之和是否 === target，有就返回兩數的 index
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    // 跳出循環代表沒找到，回傳訊息
    return 'Not found';
}

console.log(twoSum([2, 7, 11, 15], 9));
// console.log(twoSum([2, 7, 11, 15], 26));
// console.log(twoSum([2, 7, 11, 15], 18));
// console.log(twoSum([1, 2, 7, 15], 9));

