console.log('Assignment 1: Callback Function');
// console.log(window);
function delayedResult(n1, n2, delayTime, callback) {
    // note : setTimeout 為 window 對象的方法，所以可以省略 window，只寫 setTimeout
    // 建立 setTimeout，在傳入的 delayTime 秒後觸發回呼箭頭函式並顯示結果及彈出 alert
    setTimeout(() => {
        let addResult = n1 + n2;
        callback(addResult);
    }, delayTime)
}
delayedResult(4, 5, 3000, function (result) {
    console.log(result);
}); // 9 (4+5) will be shown in the console after 3 seconds
delayedResult(-5, 10, 2000, function (result) {
    window.alert(result);
}); // 5 (-5+10) will be shown in an alert dialog after 2 seconds
// Hint: You should use window.setTimeout() for time scheduling.
console.log('Assignment 2: HTML DOM and AJAX');
// 獲取 html DOM
const renderData = document.querySelector('.render-data');
function ajax(url) {
    return fetch(url)
        // 直接回傳 res.json() 的 Promise 物件
        .then(res => res.json())
    錯誤處理
        .catch(error => {
            console.log('error:', error);
        });
}
function render(data) {
    // 確認資料，以便於找出資料的 key value 做渲染準備
    console.log(data);
    // render 到 ul 中
    const html = data.map(data => `
        <li>手機品牌 : ${data.name}</li>
        <li>價格 : $${data.price}</li>
        <li>描述 : ${data.description}</li>
    `).join('-'); // 若不加 .join() 則會有逗號出現，為了區隔加上 '-'
    renderData.innerHTML = html;
}
const url = "https://remote-assignment.s3.ap-northeast-1.amazonaws.com/products";
ajax(url).then((data) => {
    render(data);
});
// you should get product information in JSON format and render data in the page
// you should get product information in JSON format and render data in the page

const reposList = document.getElementById('repos-list');
const loadMoreButton = document.getElementById('load-more');
let currentPage = 1;

function fetchGitHubRepos(page) {
    const perPage = 5;
    const url = `https://api.github.com/orgs/facebook/repos?per_page=${perPage}&page=${page}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            data.forEach(repo => {
                const repoInfo = document.createElement('div');
                repoInfo.innerHTML = `
                            <h3>Name: ${repo.name}</h3>
                            <p>Visibility: ${repo.private ? 'Private' : 'Public'}</p>
                            <p>Description: ${repo.description || 'N/A'}</p>
                            <p>Topics: ${repo.topics.join(', ') || 'N/A'}</p>
                        `;
                reposList.appendChild(repoInfo);
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function loadMore() {
    currentPage++;
    fetchGitHubRepos(currentPage);
}

loadMoreButton.addEventListener('click', loadMore);

// 第一頁把它先初始 init
fetchGitHubRepos(currentPage);

