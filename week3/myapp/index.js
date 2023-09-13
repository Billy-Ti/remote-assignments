const express = require('express');               // 用 require 載入 express 套件
const path = require('path');
const app = express();                            // 呼叫 express 產生應用程式物件
const port = process.env.PORT || 3000;                                // 設置端口為 3000，相當於 http://localhost:3000/       
app.use(express.static('assets'));

// 建立 express 靜態文件資夾，來可以使用 http://localhost:3000/sum.html

// const absolutePath = path.join(__dirname, 'assets', 'calcSum.js');

app.use('/static', express.static(path.join(__dirname, 'assets')));

// 測試 Google 圖片: http://localhost:3000/images/googlelogo_color_272x92dp.png 資料來源為 Google

// 使用 get 方法與伺服器互動，req 為使用者請求、res 為伺服器的回應
app.get('/', (req, res) => {
    // 當頁面連結進到跟目錄 (/) 後，伺服器回傳 Hello, My Server!
    res.send('<h1 style="background-color: tomato">Hello, My Server!</h1>');
})
// 使用 req.query 來查找網址的參數
app.get('/getData', (req, res) => {
    // 取得伺服器參數的輸入
    const number = req.query.number;

    // 確認取得輸入的值
    console.log(number)

    // 因設置的參數只有 number，所以當沒有參數 number 時，等於只有 getData，但 req.query.number 仍存在只是值是 undefined
    // 故回傳 Lack of Parameter，若沒有任何輸入也一樣，可同時檢查有無參數 !number 以及 input 是否為空字串 number === ""
    if (!number || number === "") {
        console.log(number);
        res.send(`<h1 style="color:red">Lack of Parameter</h1>`);
    }

    // 檢查是否不是數字或者參數 number <= 0 時，代表是錯誤的參數
    else if (isNaN(number) || number <= 0) {
        res.send(`<h1 style="color:red">Wrong Parameter</h1>`);
    }

    /*
    此區 else 為沒有進去以上的判斷內的時候，相當於以上條件都滿足時
    1. 代表有參數 number
    2. 而且參數也是有效數字
    3. 開始做計算
    */
    else {
        const result = calcSum(number);
        res.send(`<h1>1 + 2 + .... + ${number} = ${result}</h1>`);
    }
})

// 設置連加法函式
function calcSum(number) {
    let sum = 0;
    for (let i = 0; i <= number; i++) {
        sum += i;
    }
    return sum;
}

// 監測 express 伺服器
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})



