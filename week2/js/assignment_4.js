console.log('Assignment 4: HTML DOM and Event Handling');

// 1. 獲取 Welcome Message 整個區塊、及要變更文字的 h1 的 DOM 元素
const changeText = document.querySelector('#changeText');
const textH1 = document.querySelector('#textH1');

// 確認有無獲取到預期 2 個區塊的值
// console.log(changeText);
// console.log(textH1);

// practice
// 若想自由切換文字的話
// 需要建立一個當前文字狀態的變數 isChange
// 初始值設為 true = 要切換的文字，供下列 if 判斷使用
let isChange = true;

// 2. 建立 click 監聽事件
changeText.addEventListener('click', () => {

    if (isChange) {
        textH1.textContent = "Have a Good Time!";
    }
    else {
        textH1.textContent = "Welcome Message";
    }

    // 當點擊完並更改文字之後，還要更改 isChange 的狀態，供下次點擊使用
    isChange = !isChange;
})

// note : 
// 1. textContent 主要用於處理純文本內容，不會處理任何有關 HTML 的標籤
// 2. innerHTML 則用於處理包含HTML標記的內容


// 獲取 Call to Action 按鈕及 content-more-block DOM 元素
// content-more-block 為多個，需用 querySelectorAll，會返回一個陣列
const btnAction = document.querySelector('.btn-action');
const moreBlock = document.querySelectorAll('.content-more-block');

let actionState = true;

// 建立 click 監聽事件
btnAction.addEventListener('click', () => {
    // 當點擊後，按鈕下方推擠 20px
    // 並且將多個 block 陣列做循環，並 display 顯示出來
    if (actionState) {
        btnAction.classList.add('mb-20');
        moreBlock.forEach((moreBlock) => {
            moreBlock.style.display = "block";
        })
    }
    else {
        btnAction.classList.remove('mb-20');
        moreBlock.forEach((moreBlock) => {
            moreBlock.style.display = "none";
        })
    }
    // 更改點擊狀態，若為已點擊狀態 true，則改為 false
    actionState = !actionState;
})





